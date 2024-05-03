import pandas as pd
import boto3
import numpy as np
from io import BytesIO
import requests
from decimal import Decimal

def download_excel(url):
    response = requests.get(url)
    excel_data = BytesIO(response.content)
    return pd.read_excel(excel_data)

def load_local_excel(file_path):
    return pd.read_excel(file_path)

def convert_floats_to_decimals(df):
    for column in df.columns:
        if df[column].dtype == float:
            df[column] = df[column].apply(lambda x: Decimal(str(x)) if pd.notnull(x) else x)
    return df

def add_zip_code_clean(df, zip_code_column='ZIP_Code'):
    df['zip code clean'] = df[zip_code_column].astype(str).str[:5]
    return df

def convert_df_for_dynamodb(df):
    for column in df.columns:
        df[column] = df[column].replace([np.inf, -np.inf, np.nan], None)
        if df[column].dtype == float:
            df[column] = df[column].apply(lambda x: Decimal(str(x)) if x is not None else x)
    return df



def upload_to_dynamodb(dataframe, table_name):
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.Table(table_name)

    for index, row in dataframe.iterrows():
        item = {k: Decimal(str(v)) if isinstance(v, float) and v is not None else v for k, v in row.to_dict().items()}
        table.put_item(Item=item)

def main():
    url = "https://www.cdii.ca.gov/wp-content/uploads/2023/05/DxF_DSA_SignatoryList.xlsx"
    table_name = "DxFData"
    df = download_excel(url)
    df['ZIP_Code'] = df['ZIP_Code'].astype(str).str.strip()
    df = convert_floats_to_decimals(df)
    df = add_zip_code_clean(df)

    path_zipcode_lookup = '/home/ec2-user/zipcode lookup.xlsx'
    df_zipcode_lookup = load_local_excel(path_zipcode_lookup)
    df_zipcode_lookup['ZIP_Code'] = df_zipcode_lookup['ZIP_Code'].astype(str).str.strip()
    df = pd.merge(df, df_zipcode_lookup, on='ZIP_Code', how='left')
    print(df.head())

    df = convert_df_for_dynamodb(df)
    upload_to_dynamodb(df, table_name)

if __name__ == "__main__":
    main()