import React, { useState } from 'react';
import useCaseImg1 from '../images/DxFUseCases.png';
import pdfIcon from '../images/icons/pdf.svg'
import excelIcon from '../images/icons/excel.svg'
import gDocIcon from '../images/icons/gDoc.svg'
import folderIcon from '../images/icons/folder.svg'
import { Button } from "@aws-amplify/ui-react";
import button from '../css/button.module.css'
import font from '../css/fonts.module.css'
import flex from '../css/flex.module.css'

const useCase = () => {

  const handleUseCase1Doc = () => {
    window.location.href = "https://drive.google.com/drive/folders/1Um1DTMRnOn5cxoW-9J-_pc2yzriAq2j5?usp=drive_link"; // Redirects to the MPI site
  };

  const folderData = {
    "folderName": "Synthetic Data",
    "files": [
      { "name": "Estella Ruiz_C-CDA Referral (Consult Document Closing Referral). txt", "url": "https://drive.google.com/file/d/1PI_-cTrqNFrwAY18ortVcTxFRUlN6tDK/view?usp=drive_link" },
      { "name": "Estella Ruiz_JSON.json", "url": "https://drive.google.com/file/d/1wppvBvSr8X_K3dEaAybVs3jAct5yPetn/view?usp=drive_link" },
      { "name": "Estella-Ruiz_HL7-V2_ADT-A01.17", "url": "https://drive.google.com/file/d/1Qhv0ZFBd2aOnPKcYwRvjlby-q7YoIX9v/view?usp=drive_link" }
    ],
    // "subFolders": [
    //   { "folderName": "Subfolder 1", "files": [], "subFolders": [] },
    //   // ... more subfolders
    // ]
  };
  const [isOpen, setIsOpen] = useState(false); // State to track folder expansion

  const toggleFolder = () => {
    setIsOpen(!isOpen); // Toggle folder expansion state
  };

  const [show_folder, setShowFolder] = useState(null);
  return (
    <div className='main-container main-container-fix' style={{minHeight:"700px"}}>
      <main >
          <h2 className={font.h2}>DxF Sandbox: Use Case(s)</h2>
          <div className={flex.row}>
          <table>
              <tr>
                <th style={{ width: '1%' }}>Category</th>
                <th style={{ width: '1%' }}>Persona / Name of Story</th>
                <th style={{ width: '1%' }}>System Actors</th>
                <th style={{ width: '30%' }}>Summary</th>
                <th style={{ width: '80%'}}>Transactions</th>
              </tr>
              <tr>
                <td>Aging</td>
                <td>Estella Ruiz</td>
                <td>ED; HH; QHIO</td>
                <td>
                  Estella falls at home and is taken to the Emergency Department (ED) where they send a notification of the injury to the local QHIO who sends a notification to her PCP and MCP. The ED clinical staff member identifies through a survey that Estella is at risk for food and housing instability and records in her EHR that Estella will need these needs addressed. After she is discharged from the hospital, Estella is referred to a home health services and a provider monitors and evaluates her until she is feeling better.
                </td>
                <td style={{fontSize: '11px'}}>
                  <ol>
                  <li>ED sends event notification to QHIO</li>
                  <li>QHIO ingests ADT</li>
                  <li>QHIO notifies PCP</li>
                  <li>QHIO notifies MCP Administrator</li>
                  <li>ED asks QHIO if they have patient's data (patient discovery)</li>
                  <li>Request sent to QHIO (document discovery)</li>
                  <li>Response returned (document retrieve)</li>
                  <li>ED asks the QHIO if they have patient's data</li>
                  <li>ED EHR sends order information (referral, planned intervention, ordered activity) to HH EHR</li>
                  <li>HH confirms receipt of order</li>
                  <li>HH completes the service requested</li>
                  <li>ED EHR is informed of the completion</li>
                  <li>ED EHR confirms receipt of order</li>
                  <li>After each visit to PCP, Estella's encounter data for that visit is pushed to QHIO (data aggregator)</li>
                  <li>QHIO accepts the data and conducts aggregation</li>
                  <li>MCP requests aggregated patient information for a given time period from QHIO</li>
                  <li>QHIO gathers relevant information</li>
                  <li>QHIO sends patient information back to MCP</li>
                  </ol>
                </td>
              </tr>
            </table>
          </div>
          <ul className="download-list" style={{"margin-right": "auto"}}>
            <li className='folder'>
              <a href="#" className="folder-toggle icon-link" onClick={toggleFolder}>
                <img src={folderIcon} className="icon" style = {{height: '100%'}} alt="Folder icon"/>
                {folderData.folderName}
              </a>
              {isOpen && (
                <ul className="folder-content">
                  {folderData.files.map((file) => (
                    // <li key={file.name}>{file.name}</li>
                    <li key={file.name}>
                      <div className={flex.row}>
                        <a href={file.url} className="icon-link" target="_blank">
                          <img src={gDocIcon} className="icon" style = {{height: '80%'}} alt="Google Doc icon"/>
                          {file.name}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <div className={flex.row}>
                <a href="https://docs.google.com/spreadsheets/d/1ZoOfsfqA3IKzmO0qZRWvi_N_AO_zAr2S/edit?usp=sharing&ouid=118037618800781845205&rtpof=true&sd=true" className="icon-link" target="_blank">
                  <img src={excelIcon} className="icon" alt="Microsoft Excel icon"/>
                  DxF Data Set Requirements.xlss
                </a>
              </div>
            </li>
            <li>
              <div className={flex.row}>
                <a href="https://drive.google.com/file/d/17ejGibBT-tkfbLtXSE8xwPIVUd7VmwdE/view?usp=sharing" className="icon-link" target="_blank">
                  <img src={pdfIcon} className="icon" alt="PDF icon"/>
                  DxF Sandbox MVP Validation Report.pdf
                </a>
              </div>
            </li>
            <li>
              <div className={flex.row}>
                <a href="https://drive.google.com/file/d/1qImUTPDtE2Hpyc7l6GIzG6p59s5izB2d/view?usp=sharing" className="icon-link" target="_blank">
                  <img src={pdfIcon} className="icon" alt="PDF icon"/>
                  DxF Use Case_Estella Ruiz.pdf
                </a>
              </div>
            </li>
          </ul>
      </main>
    </div>
  );
};

export default useCase;