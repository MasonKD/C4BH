import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Flex, Text, Image, Button, View, Icon } from '@aws-amplify/ui-react';
import UseCaseDiagram from '../images/UseCaseDiagram.png';
import VisualizationsPic from '../images/visualizations.png';
import CDI from '../images/logoCDI.png';
import Cedars from '../images/logoCedarsSinai.png';
import AWSLogo from '../images/logoAWS.png';
import SmileLogo from '../images/logosmile.png';

const MainPage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Handler for the Sign Out button
  const handleSignOut = () => {
    navigate('/'); // Redirects to the landing page
  };

  // Handler for the Query Master Patient Index button
  const HandleMirthQuery = () => {
    navigate ('/Mirth');
  };

  // Handler for the Query Master Patient Index button
  const HandleNetworkQuery = () => {
    navigate ('/Networking');
  };

  const HandleUseCaseQuery = () => {
    navigate('/useCase');
    };

  const HandleSmileCDRQuery = () => {
    navigate('/SmileCDR');
    };

    const HandleBackgroundQuery = () => {
      navigate('/Background');
      };

    const HandleNavigation = () =>{
      navigate('/DxfRegistration');
    }

      return (
        <Flex
            gap="0"
            direction="column"
            width="100%"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            position="relative"
            backgroundColor="rgba(255,255,255,1)"
        >
            <Flex
                gap="48px"
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="73px 60px 73px 60px"
            >
                <Text
                    
                    fontSize="48px"
                    fontWeight="700"
                    color="rgba(34,84,155,1)"
                    lineHeight="60px"
                    textAlign="left"
                    display="block"
                    width="844px"
                    shrink="0"
                    position="relative"
                    whiteSpace="pre-wrap"
                >
                    Data Exchange Framework Sandbox
                </Text>
                <Flex
                    gap="32px"
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                >
                    <Flex
                        gap="42px"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        position="relative"
                    >
                        <Text
                            
                            fontSize="32px"
                            fontWeight="500"
                            color="rgba(45,112,205,1)"
                            lineHeight="40px"
                            textAlign="left"
                            display="block"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            Securely and rapidly test, collaborate, and scale new workflows.
                        </Text>
                        <Text
                            
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(13,26,38,1)"
                            lineHeight="24px"
                            textAlign="left"
                            display="block"
                            letterSpacing="0.01px"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            The Data Exchange Framework (DxF) Sandbox is a real-world testing environment for California DxF Participants to  identify, test, and validate data exchange implementation strategies as  they plan, design, and adjust their current workflows to meet state  requirements.
    
    
    
                        </Text>
                        <Text
                            
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(13,26,38,1)"
                            lineHeight="24px"
                            textAlign="left"
                            display="block"
                            letterSpacing="0.01px"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            
    
    The DxF Sandbox allows health providers, community-based organizations,  health plans, public health agencies, and social service organizations  to pursue cutting-edge data sharing approaches with meaningful  cross-sector collaboration.
    
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
//width="100%"
gap="0"
direction="column"
width="100%"
justifyContent="flex-start"
alignItems="center"
position="relative"
>
<Flex
width="100%"
gap="48px"
direction="column"
justifyContent="flex-start"
alignItems="center"
shrink="0"
alignSelf="stretch"
position="relative"
padding="6px 60px 6px 60px"
backgroundColor="rgba(34,84,155,1)"
>
<Text

fontSize="24px"
fontWeight="400"
color="rgba(255,255,255,1)"
lineHeight="36px"
textAlign="center"
display="block"
shrink="0"
alignSelf="stretch"
position="relative"
whiteSpace="pre-wrap"
>
Additional Grant Funders
</Text>
</Flex>
<Flex
width="100%"
gap="8px"
direction="column"
justifyContent="flex-start"
alignItems="center"
shrink="0"
alignSelf="stretch"
position="relative"
padding="33px 60px 33px 60px"
backgroundColor="rgba(255,255,255,1)"
>
<Flex
width="100%"
gap="48px"
direction="row"
justifyContent="center"
alignItems="center"
shrink="0"
alignSelf="stretch"
position="relative"
>
<Image
src={CDI}
width="196px"
height="58px"
display="block"
shrink="0"
position="relative"
objectFit="cover"
alt=""
/>
<Image
src={Cedars}
width="192.25px"
height="62px"
display="block"
shrink="0"
position="relative"
objectFit="cover"
alt=""
/>
<Image
src={AWSLogo}
width="96.93px"
height="62px"
display="block"
shrink="0"
position="relative"
objectFit="cover"
alt=""
/>
<Image
src={SmileLogo}
width="109.15px"
height="62px"
display="block"
shrink="0"
position="relative"
objectFit="cover"
alt=""
/>
</Flex>
</Flex>
</Flex>
            
            <Flex
                gap="24px"
                direction="column"
                width="100%"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="48px 60px 48px 60px"
                backgroundColor="rgba(10,40,81,1)"
            >
                <Flex
                    gap="48px"
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                >
                    <Flex
                        gap="18px"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                    >
                        <Text
                            
                            fontSize="32px"
                            fontWeight="500"
                            color="rgba(255,255,255,1)"
                            lineHeight="40px"
                            textAlign="center"
                            display="block"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            Join the DxF Sandbox Community
                        </Text>
                        <Text
                            
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(255,255,255,1)"
                            lineHeight="24px"
                            textAlign="center"
                            display="block"
                            letterSpacing="0.01px"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            
                        </Text>
                    </Flex>
                </Flex>
                <Button onClick={HandleNavigation} variation="primary"
                >
                    Register DxF Participant
                </Button>
            </Flex>
            <Flex
                gap="48px"
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="48px 60px 48px 60px"
                backgroundColor="rgba(255,255,255,1)"
            >
                <Text
                    
                    fontSize="40px"
                    fontWeight="400"
                    color="rgba(34,84,155,1)"
                    lineHeight="50px"
                    textAlign="left"
                    display="block"
                    width="202px"
                    shrink="0"
                    position="relative"
                    whiteSpace="pre-wrap"
                >
                    Use Cases
                </Text>
                <Flex
                    gap="30px"
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                >
                    <Flex
                        gap="6px"
                        direction="column"
                        height="121px"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        overflow="hidden"
                        shrink="0"
                        alignSelf="stretch"
                        position="relative"
                    >
                        <Text
                            
                            fontSize="20px"
                            fontWeight="700"
                            color="rgba(45,112,205,1)"
                            lineHeight="25px"
                            textAlign="left"
                            display="block"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            Data Exchange Solutions Driven by A Use Case Library
                        </Text>
                        <Text
                            
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(13,26,38,1)"
                            lineHeight="24px"
                            textAlign="left"
                            display="block"
                            letterSpacing="0.01px"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            The DxF Sandbox hosts a “Use Case Library” co-developed by organizations  with on-the-ground experience, backed by best-in-class practices, and  aligned with nationally-recognized data standards. These priority use  cases provide organizations with well-reasoned and defined rules for  priority data exchange interactions between people and systems to enable  efficient and effective implementation of these workflows.
    
    
                        </Text>
                    </Flex>
                    <Flex>
  <Image
    src={UseCaseDiagram} // Ensure this variable correctly points to an image resource
    alt="Description of the image"
    style={{ width: 'auto', height: '100%' }} // Optional: Adjust styling as needed
  />
</Flex>

                </Flex>
            </Flex>
            <Flex
                gap="48px"
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="48px 60px 48px 60px"
                backgroundColor="rgba(241,247,255,1)"
            >
                <Text
                    
                    fontSize="40px"
                    fontWeight="400"
                    color="rgba(34,84,155,1)"
                    lineHeight="50px"
                    textAlign="center"
                    display="block"
                    shrink="0"
                    position="relative"
                    whiteSpace="pre-wrap"
                >
                    Connections
                </Text>
                <Flex
                    gap="48px"
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                >
                    <Flex
                        gap="24px"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                    >
                        <Flex
                            width="95px"
                            height="95px"
                            shrink="0"
                            position="relative"
                            borderRadius="28px"
                        >
                            <View
                                width="95px"
                                height="95px"
                                display="block"
                                position="absolute"
                                top="0px"
                                left="0px"
                                borderRadius="15px"
                                backgroundColor="rgba(255,255,255,1)"
                            />
                            <Icon
                                width="57px"
                                height="55px"
                                viewBox={{"minX":0,"minY":0,"width":57,"height":55}}
                                paths={[{"d":"M 0 2.7681864527716895 C 0 1.2393623499842148 1.2279219906526002 0 2.742644994271875 0 L 40.41390997418907 0 C 41.928629126417704 0 43.15655516596815 1.2393576653435672 43.15655516596815 2.7681846586539947 L 43.15655516596815 21.670795191236856 C 43.15655516596815 22.363458582223974 42.60022001056033 22.92497436187692 41.91394723028637 22.92497436187692 C 41.22767445001241 22.92497436187692 40.671339294604586 22.363458582223974 40.671339294604586 21.670795191236856 L 40.671339294604586 2.7681846586539947 C 40.671339294604586 2.6246873378407565 40.556083565869784 2.508358341280127 40.41390997418907 2.508358341280127 L 2.742644994271875 2.508358341280127 C 2.600472785141647 2.508358341280127 2.4852158713635664 2.624686540455114 2.4852158713635664 2.7681864527716895 L 2.4852158713635664 47.63192701955457 C 2.4852158713635664 47.775424539714216 2.6004716000983734 47.89175353627485 2.7426447967646626 47.89175353627485 L 26.182943349221137 47.89175353627485 C 26.869216129495097 47.89175353627485 27.42555128490292 48.453269315927784 27.42555128490292 49.145932706914905 C 27.42555128490292 49.83859609790203 26.869216129495097 50.40011187755497 26.182943349221137 50.40011187755497 L 2.7426447967646626 50.40011187755497 C 1.2279229781886616 50.40011187755497 0 49.16075132168845 0 47.63192701955457 L 0 2.7681864527716895 Z","fillRule":"nonzero"},{"d":"M 50.7445389325108 46.54516055925324 C 52.263783369986974 44.557571591312666 53.16748156987436 42.06611144656078 53.16748156987436 39.361615374569446 C 53.16748156987436 32.860874704793346 47.94621250744845 27.59098489131083 41.50544859334948 27.59098489131083 C 35.064684679250504 27.59098489131083 29.843415616824586 32.860874704793346 29.843415616824586 39.361615374569446 C 29.843415616824586 45.862356044345546 35.064684679250504 51.13224585782806 41.50544859334948 51.13224585782806 C 44.18522012920326 51.13224585782806 46.65388963635166 50.21997608191024 48.62322298949577 48.686348328668096 L 54.439276331356616 54.55656427577783 C 55.02507956283518 55.14781616079749 55.97484592497021 55.14781616079749 56.560649156448775 54.55656427577783 C 57.14645238792734 53.965306011673036 57.14645238792734 53.00668899269143 56.560649156448775 52.4154339181292 L 50.7445389325108 46.54516055925324 Z M 41.50544859334948 48.104234483107376 C 46.2893166034237 48.104234483107376 50.16740705767975 44.190031032509445 50.16740705767975 39.361615374569446 C 50.16740705767975 34.53319971662945 46.2893166034237 30.618996266031512 41.50544859334948 30.618996266031512 C 36.721580583275255 30.618996266031512 32.843490129019195 34.53319971662945 32.843490129019195 39.361615374569446 C 32.843490129019195 44.190031032509445 36.721580583275255 48.104234483107376 41.50544859334948 48.104234483107376 Z","fillRule":"evenodd"},{"d":"M 9.376795527671634 10.94671422603256 C 8.690521957368825 10.94671422603256 8.13418759198985 11.508229208299865 8.13418759198985 12.200893396672624 C 8.13418759198985 12.893557585045384 8.690521957368825 13.455072567312687 9.376795527671634 13.455072567312687 L 31.06817522074792 13.455072567312687 C 31.75445116113728 13.455072567312687 32.3107831564297 12.893557585045384 32.3107831564297 12.200893396672624 C 32.3107831564297 11.508229208299865 31.75445116113728 10.94671422603256 31.06817522074792 10.94671422603256 L 9.376795527671634 10.94671422603256 Z","fillRule":"nonzero"},{"d":"M 9.376795527671634 22.577569385309037 C 8.690521957368825 22.577569385309037 8.13418759198985 23.1390835701907 8.13418759198985 23.8317485559491 C 8.13418759198985 24.52441194693622 8.690521957368825 25.085927726589166 9.376795527671634 25.085927726589166 L 25.645333457594244 25.085927726589166 C 26.331606237868204 25.085927726589166 26.887942973333725 24.52441194693622 26.887942973333725 23.8317485559491 C 26.887942973333725 23.1390835701907 26.331606237868204 22.577569385309037 25.645333457594244 22.577569385309037 L 9.376795527671634 22.577569385309037 Z","fillRule":"nonzero"},{"d":"M 9.376795527671634 34.20842454458552 C 8.690521957368825 34.20842454458552 8.13418759198985 34.76993713469589 8.13418759198985 35.462603715225576 C 8.13418759198985 36.15526391667012 8.690521957368825 36.71678288586564 9.376795527671634 36.71678288586564 L 17.51106370260409 36.71678288586564 C 18.19733806293575 36.71678288586564 18.753671638285873 36.15526391667012 18.753671638285873 35.462603715225576 C 18.753671638285873 34.76993713469589 18.19733806293575 34.20842454458552 17.51106370260409 34.20842454458552 L 9.376795527671634 34.20842454458552 Z","fillRule":"nonzero"},{"d":"M0 2.76819 C0 1.23936 1.22792 0 2.74264 0 L40.4139 0 C41.9286 0 43.1566 1.23936 43.1566 2.76818 L43.1566 21.6708 C43.1566 22.3635 42.6002 22.925 41.9139 22.925 C41.2277 22.925 40.6713 22.3635 40.6713 21.6708 L40.6713 2.76818 C40.6713 2.62469 40.5561 2.50836 40.4139 2.50836 L2.74264 2.50836 C2.60047 2.50836 2.48522 2.62469 2.48522 2.76819 L2.48522 47.6319 C2.48522 47.7754 2.60047 47.8918 2.74264 47.8918 L26.1829 47.8918 C26.8692 47.8918 27.4256 48.4533 27.4256 49.1459 C27.4256 49.8386 26.8692 50.4001 26.1829 50.4001 L2.74264 50.4001 C1.22792 50.4001 0 49.1608 0 47.6319 L0 2.76819 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"},{"d":"M50.7445 46.5452 C52.2638 44.5576 53.1675 42.0661 53.1675 39.3616 C53.1675 32.8609 47.9462 27.591 41.5054 27.591 C35.0647 27.591 29.8434 32.8609 29.8434 39.3616 C29.8434 45.8624 35.0647 51.1322 41.5054 51.1322 C44.1852 51.1322 46.6539 50.22 48.6232 48.6863 L54.4393 54.5566 C55.0251 55.1478 55.9748 55.1478 56.5606 54.5566 C57.1465 53.9653 57.1465 53.0067 56.5606 52.4154 L50.7445 46.5452 Z M41.5054 48.1042 C46.2893 48.1042 50.1674 44.19 50.1674 39.3616 C50.1674 34.5332 46.2893 30.619 41.5054 30.619 C36.7216 30.619 32.8435 34.5332 32.8435 39.3616 C32.8435 44.19 36.7216 48.1042 41.5054 48.1042 Z","fill":"rgba(34,84,155,1)","fillRule":"evenodd"},{"d":"M9.37679 10.9467 C8.69052 10.9467 8.13419 11.5082 8.13419 12.2009 C8.13419 12.8936 8.69052 13.4551 9.37679 13.4551 L31.0682 13.4551 C31.7544 13.4551 32.3108 12.8936 32.3108 12.2009 C32.3108 11.5082 31.7544 10.9467 31.0682 10.9467 L9.37679 10.9467 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"},{"d":"M9.37679 22.5776 C8.69052 22.5776 8.13419 23.1391 8.13419 23.8317 C8.13419 24.5244 8.69052 25.0859 9.37679 25.0859 L25.6453 25.0859 C26.3316 25.0859 26.8879 24.5244 26.8879 23.8317 C26.8879 23.1391 26.3316 22.5776 25.6453 22.5776 L9.37679 22.5776 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"},{"d":"M9.37679 34.2084 C8.69052 34.2084 8.13419 34.7699 8.13419 35.4626 C8.13419 36.1553 8.69052 36.7168 9.37679 36.7168 L17.5111 36.7168 C18.1973 36.7168 18.7537 36.1553 18.7537 35.4626 C18.7537 34.7699 18.1973 34.2084 17.5111 34.2084 L9.37679 34.2084 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"}]}
                                display="block"
                                position="absolute"
                                top="21px"
                                left="19.5px"
                            />
                        </Flex>
                        <Flex
                            gap="6px"
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                        >
                            <Text
                                
                                fontSize="20px"
                                fontWeight="700"
                                color="rgba(45,112,205,1)"
                                lineHeight="25px"
                                textAlign="center"
                                display="block"
                                shrink="0"
                                alignSelf="stretch"
                                position="relative"
                                whiteSpace="pre-wrap"
                            >
                                FTP Log
                            </Text>
                            <Text
                                
                                fontSize="16px"
                                fontWeight="400"
                                color="rgba(13,26,38,1)"
                                lineHeight="24px"
                                textAlign="center"
                                display="block"
                                letterSpacing="0.01px"
                                shrink="0"
                                alignSelf="stretch"
                                position="relative"
                                whiteSpace="pre-wrap"
                            >
                                Coming soon
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        gap="24px"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                    >
                        <Flex
                            width="95px"
                            height="95px"
                            shrink="0"
                            position="relative"
                            borderRadius="28px"
                        >
                            <View
                                width="95px"
                                height="95px"
                                display="block"
                                position="absolute"
                                top="0px"
                                left="0px"
                                borderRadius="15px"
                                backgroundColor="rgba(255,255,255,1)"
                            />
                            <Icon
                                width="70px"
                                height="59px"
                                viewBox={{"minX":0,"minY":0,"width":70,"height":59}}
                                paths={[{"d":"M 55.90722733113764 42.55869303757483 L 55.78512873922884 42.56078565923617 L 52.504064094908806 42.56078565923617 L 52.504064094908806 42.56446227923839 C 52.48223880684451 42.56348862888207 52.46028537164344 42.56299453765647 52.438218434692665 42.56299453765647 L 48.59901808956366 42.56299453765647 C 47.80389439671676 42.56299453765647 47.15931796014028 43.20258473011806 47.15931796014028 43.99155759180035 C 47.15931796014028 44.78053045348264 47.80389439671676 45.42012064594422 48.59901808956366 45.42012064594422 L 52.438218434692665 45.42012064594422 C 52.46531606209812 45.42012064594422 52.4922342835121 45.41937950910583 52.518962114894315 45.41791176752392 L 55.95695574289563 45.41791176752392 L 55.95695574289563 45.415499439775424 C 63.73561875295785 45.28218563445771 70 38.98359061709432 70 31.233293817529596 C 70 23.93672353354537 64.44761889020604 17.926952085220144 57.306590403254454 17.137056435513582 C 55.81811381223191 12.026922476076846 51.06824133170923 8.290155949698262 45.438799856558894 8.290155949698262 C 44.6220156362521 8.290155949698262 43.82375416922787 8.368822720511607 43.051279567467326 8.518932902731763 C 40.03049640330216 3.4214445906000988 34.44535356265778 0 28.054860887652726 0 C 18.453663669104635 0 10.670357156008103 7.7230981675028385 10.670357156008103 17.25002349150082 C 10.670357156008103 17.95573653213477 10.713064935344802 18.651551399650096 10.796057597796665 19.335061215833875 C 4.650286594533254 20.479807007622455 0 25.832682355007258 0 32.26329237170931 C 0 39.46752390837489 5.836475073969666 45.319115320547226 13.073554416609376 45.41651668641636 L 17.45247938034112 45.41791176752392 C 17.479207211723338 45.41937950910583 17.506127263810704 45.42012064594422 17.533223060542774 45.42012064594422 L 21.367502555620042 45.42012064594422 C 22.162626248466943 45.42012064594422 22.80720268504342 44.78053045348264 22.80720268504342 43.99155759180035 C 22.80720268504342 43.20258473011806 22.162626248466943 42.56299453765647 21.367502555620042 42.56299453765647 L 17.533223060542774 42.56299453765647 L 17.495730869672375 42.56347046376348 L 17.495730869672375 42.56078565923617 L 13.19682830082964 42.56078565923617 L 13.112605425864842 42.559652155836275 C 7.448250720971484 42.483420419169654 2.879400258846755 37.902555345729624 2.879400258846755 32.26329237170931 C 2.879400258846755 27.232522723639704 6.518034316547906 23.03893979500879 11.327293383925474 22.14313968742203 L 13.977306606617791 21.64953347049332 L 13.654784062136612 18.99330085820641 C 13.585530603419238 18.422943382219465 13.549757414854858 17.841252688745435 13.549757414854858 17.25002349150082 C 13.549757414854858 9.301045707379277 20.04391288547182 2.857126108287752 28.054860887652726 2.857126108287752 C 33.3833543041328 2.857126108287752 38.044314639821806 5.706500252218054 40.569190352790635 9.967156064723488 L 41.60304483873546 11.711759485086006 L 43.60466284017573 11.322797066807489 C 44.19581290476189 11.207922673368508 44.80876628933176 11.147282057986015 45.438799856558894 11.147282057986015 C 49.751749182264355 11.147282057986015 53.39841028507874 14.009742353347148 54.540409970412135 17.930370760538416 L 55.07480549879887 19.76501504071819 L 56.987580920994 19.976593259472523 C 62.68714817072839 20.60704458077246 67.12059974115324 25.408401496657987 67.12059974115324 31.233293817529596 C 67.12059974115324 37.422171518621155 62.11799181615771 42.45225270869628 55.90722733113764 42.55869303757483 Z","fillRule":"nonzero"},{"d":"M 40.40040592828531 36.99846649453113 L 40.40040592828531 57.148436728367315 C 40.40040592828531 57.93741322307332 41.04498236486178 58.57699978251119 41.84010605770868 58.57699978251119 C 42.63522975055558 58.57699978251119 43.27980618713206 57.93741322307332 43.27980618713206 57.148436728367315 L 43.27980618713206 36.999382016507965 L 45.93887392037345 39.63246318515441 C 46.501688822347695 40.189779922506986 47.41325432635195 40.18884986843528 47.97491590409531 39.63038872861165 C 48.53657382049191 39.07192758878802 48.53564017706691 38.167413673814565 47.97282161374591 37.610096936461986 L 42.85618470511095 32.54346026174027 C 42.294116717876705 31.98688466122608 41.38402307527185 31.986964587747867 40.82205394440025 32.54363827990243 L 35.70722207972028 37.610274954624145 C 35.14450603410869 38.16768978361711 35.14373348994134 39.072203698590556 35.705490262700586 39.63056674677381 C 36.2672506968066 40.18892979495706 37.17881986215762 40.1896999959852 37.74153590776921 39.63228516699224 L 40.40040592828531 36.99846649453113 Z","fillRule":"nonzero"},{"d":"M 26.71981852482456 54.12263659491835 L 24.066057913718584 51.48847278520406 C 23.50391853022243 50.93048757148744 22.59235119554479 50.93032771844386 22.030014099323342 51.48811674887973 C 21.467677003101894 52.0459057793156 21.467515903844248 52.95042332731278 22.02965345666702 53.5084085410294 L 27.140390104990686 58.58140300725693 C 27.410368662051834 58.84938936876274 27.776587549496178 58.99996366976282 28.158464186379707 59 C 28.540340823263236 59.000032697213456 28.90658534013493 58.84952015761658 29.176613325377403 58.5815810254191 L 34.28915684832944 53.50859019221528 C 34.85139325751486 52.95069943711532 34.85139325751486 52.046181889118145 34.28915684832944 51.4882947670419 C 33.726920439144024 50.930407644965655 32.815351273793 50.930407644965655 32.253111203260815 51.4882947670419 L 29.599218783671315 54.12165931153831 L 29.59921695299793 33.55482503727236 C 29.59921695299793 32.76584854256635 28.95464234709484 32.12626198312849 28.159516823574556 32.12626198312849 C 27.364393130727656 32.12626198312849 26.719816694151177 32.76585217559007 26.719816694151177 33.55482503727236 L 26.71981852482456 54.12263659491835 Z","fillRule":"nonzero"},{"d":"M55.9072 42.5587 L55.7851 42.5608 L52.5041 42.5608 L52.5041 42.5645 C52.4822 42.5635 52.4603 42.563 52.4382 42.563 L48.599 42.563 C47.8039 42.563 47.1593 43.2026 47.1593 43.9916 C47.1593 44.7805 47.8039 45.4201 48.599 45.4201 L52.4382 45.4201 C52.4653 45.4201 52.4922 45.4194 52.519 45.4179 L55.957 45.4179 L55.957 45.4155 C63.7356 45.2822 70 38.9836 70 31.2333 C70 23.9367 64.4476 17.927 57.3066 17.1371 C55.8181 12.0269 51.0682 8.29016 45.4388 8.29016 C44.622 8.29016 43.8238 8.36882 43.0513 8.51893 C40.0305 3.42144 34.4454 0 28.0549 0 C18.4537 0 10.6704 7.7231 10.6704 17.25 C10.6704 17.9557 10.7131 18.6516 10.7961 19.3351 C4.65029 20.4798 0 25.8327 0 32.2633 C0 39.4675 5.83647 45.3191 13.0736 45.4165 L17.4525 45.4179 C17.4792 45.4194 17.5061 45.4201 17.5332 45.4201 L21.3675 45.4201 C22.1626 45.4201 22.8072 44.7805 22.8072 43.9916 C22.8072 43.2026 22.1626 42.563 21.3675 42.563 L17.5332 42.563 L17.4957 42.5635 L17.4957 42.5608 L13.1968 42.5608 L13.1126 42.5597 C7.44825 42.4834 2.8794 37.9026 2.8794 32.2633 C2.8794 27.2325 6.51803 23.0389 11.3273 22.1431 L13.9773 21.6495 L13.6548 18.9933 C13.5855 18.4229 13.5498 17.8413 13.5498 17.25 C13.5498 9.30105 20.0439 2.85713 28.0549 2.85713 C33.3834 2.85713 38.0443 5.7065 40.5692 9.96716 L41.603 11.7118 L43.6047 11.3228 C44.1958 11.2079 44.8088 11.1473 45.4388 11.1473 C49.7517 11.1473 53.3984 14.0097 54.5404 17.9304 L55.0748 19.765 L56.9876 19.9766 C62.6871 20.607 67.1206 25.4084 67.1206 31.2333 C67.1206 37.4222 62.118 42.4523 55.9072 42.5587 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"},{"d":"M40.4004 36.9985 L40.4004 57.1484 C40.4004 57.9374 41.045 58.577 41.8401 58.577 C42.6352 58.577 43.2798 57.9374 43.2798 57.1484 L43.2798 36.9994 L45.9389 39.6325 C46.5017 40.1898 47.4133 40.1889 47.9749 39.6304 C48.5366 39.0719 48.5356 38.1674 47.9728 37.6101 L42.8562 32.5435 C42.2941 31.9869 41.384 31.987 40.8221 32.5436 L35.7072 37.6103 C35.1445 38.1677 35.1437 39.0722 35.7055 39.6306 C36.2673 40.1889 37.1788 40.1897 37.7415 39.6323 L40.4004 36.9985 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"},{"d":"M26.7198 54.1226 L24.0661 51.4885 C23.5039 50.9305 22.5924 50.9303 22.03 51.4881 C21.4677 52.0459 21.4675 52.9504 22.0297 53.5084 L27.1404 58.5814 C27.4104 58.8494 27.7766 59 28.1585 59 C28.5403 59 28.9066 58.8495 29.1766 58.5816 L34.2892 53.5086 C34.8514 52.9507 34.8514 52.0462 34.2892 51.4883 C33.7269 50.9304 32.8153 50.9304 32.2531 51.4883 L29.5992 54.1217 L29.5992 33.5548 C29.5992 32.7658 28.9546 32.1263 28.1595 32.1263 C27.3644 32.1263 26.7198 32.7659 26.7198 33.5548 L26.7198 54.1226 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"}]}
                                display="block"
                                position="absolute"
                                top="calc(50% - 29.5px - 0px)"
                                left="calc(50% - 35px - -0.5px)"
                            />
                        </Flex>
                        <Flex
                            gap="6px"
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                        >
                            <Text
                                
                                fontSize="20px"
                                fontWeight="700"
                                color="rgba(45,112,205,1)"
                                lineHeight="25px"
                                textAlign="center"
                                display="block"
                                shrink="0"
                                alignSelf="stretch"
                                position="relative"
                                whiteSpace="pre-wrap"
                            >
                                Integration Engine (Mirth)
                            </Text>
                            <Text
                                
                                fontSize="16px"
                                fontWeight="400"
                                color="rgba(13,26,38,1)"
                                lineHeight="24px"
                                textAlign="center"
                                display="block"
                                letterSpacing="0.01px"
                                shrink="0"
                                alignSelf="stretch"
                                position="relative"
                                whiteSpace="pre-wrap"
                            >
                                Serves as the conduit to bring health data in from multiple transport channels and push it to clinical health data repository
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex
                        gap="24px"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                    >
                        <Flex
                            width="95px"
                            height="95px"
                            shrink="0"
                            position="relative"
                            borderRadius="28px"
                        >
                            <View
                                width="95px"
                                height="95px"
                                display="block"
                                position="absolute"
                                top="0px"
                                left="0px"
                                borderRadius="15px"
                                backgroundColor="rgba(255,255,255,1)"
                            />
                            <Icon
                                width="67px"
                                height="66px"
                                viewBox={{"minX":0,"minY":0,"width":67,"height":66}}
                                paths={[{"d":"M 2.7180494444710868 15.500965454999138 L 2.717957251412528 27.569539126227884 C 3.169682186841965 28.753631577772254 4.564479013851711 30.276265614172992 7.643972029004779 31.70027800167308 C 11.316977027484349 33.398738107260534 16.569781739371166 34.51697360768038 22.50786361694336 34.51697360768038 C 22.795340457132887 34.51697360768038 23.08121133531843 34.51435089694775 23.365372249058314 34.509172439575195 C 23.400278510685478 34.50625053635689 23.435573184064456 34.50476276173311 23.4712190083095 34.50476276173311 C 24.175613226209368 34.50476276173311 24.746637862069267 35.08643886271645 24.746637862069267 35.80397381502039 C 24.746637862069267 36.521508767324335 24.175613226209368 37.10318486830767 23.4712190083095 37.10318486830767 C 23.440929819696716 37.10318486830767 23.410894958914394 37.10211275515886 23.381134523664205 37.099997015560376 C 23.091413073454586 37.105108586126285 22.800291041816987 37.10768710865694 22.50786361694336 37.10768710865694 C 13.962610421861923 37.10768710865694 6.529608971732003 34.90560423626619 2.7179259879248483 31.661672031178195 L 2.7178260360445297 44.76863042046042 C 2.718191280890772 45.887655941879046 3.824426392146519 47.807744474972 7.716127245766776 49.60737991333008 C 11.218303983552115 51.2268887127147 16.17997990335737 52.31968337187872 21.812448637826105 52.40312307021197 C 22.55643013289997 52.41086435380994 23.157202148437502 53.02833716133061 23.157202148437502 53.78802849264706 C 23.157202148437502 54.53701792043798 22.573242700951443 55.147074689486004 21.84380705697196 55.171530667473284 L 21.822969600132534 55.172067530014935 L 21.798289244515555 55.17229338253246 C 21.77662078613149 55.17229338253246 21.75507150374885 55.17177404833766 21.733651869637626 55.17075314241297 C 9.661829798562186 54.98214252775206 0.000659713230561465 50.397027885212616 0 44.76895994298598 L 0.00031239893204266475 10.378564638250014 C 0.03444641533091531 4.643936423694385 10.09824891771589 0 22.507657323564803 0 C 34.9381688117981 0 45.01509557451521 4.659745174295762 45.01509557451521 10.407831051770378 L 45.014865548270095 10.455011087305406 L 45.014865548270095 13.316802221186022 C 45.01630320037948 13.342894288492117 45.017034367152625 13.369179522180383 45.017034367152625 13.395637708551744 L 45.017034367152625 20.35255521886489 C 45.017034367152625 21.117064139422247 44.40862584539823 21.736820108750287 43.65811963762556 21.736820108750287 C 42.907613429852894 21.736820108750287 42.29920855930874 21.117062403875238 42.29920855930874 20.35255521886489 L 42.29920855930874 20.32470686295453 L 42.2970397404262 20.325040087980383 L 42.2970397404262 15.501507871291217 C 38.485126045772006 18.745086256195517 31.052545397622247 20.946876862469843 22.50786361694336 20.946876862469843 C 13.962703527723042 20.946876862469843 6.529769624982562 18.74483957711388 2.7180494444710868 15.500965454999138 Z M 42.29717118399484 10.42774217269 L 42.2970397404262 10.441376629997702 L 42.2970397404262 11.410636593313779 C 41.844545654739655 12.594457142493305 40.44959125518799 14.116217273123125 37.37175429207938 15.539464052985696 C 33.698750206402366 17.23792589412016 28.445945494515556 18.356161510243137 22.50786361694336 18.356161510243137 C 16.569781739371166 18.356161510243137 11.316977027484349 17.23792589412016 7.6439729418073386 15.539464052985696 C 4.564759244237628 14.115581947214464 3.1699363167796815 12.59309855629416 2.7180807079587663 11.409050997565775 L 2.7180884667805265 10.395350848927217 L 2.718138214520046 10.388981622808119 C 2.7290039790794256 9.266810595989227 3.8510806832994735 7.351859282044804 7.734266458238874 5.560851826387293 C 11.379238833699908 3.879713752690484 16.59884491647993 2.768527928520651 22.507657323564803 2.768527928520651 C 28.426716395786833 2.768527928520651 33.653847622871396 3.8835589149419 37.299394607543945 5.56932453548207 C 41.1915541444506 7.36912577643114 42.29726976667132 9.288969134583192 42.29726976667132 10.407831051770378 L 42.29717118399484 10.42774217269 Z","fillRule":"evenodd"},{"d":"M 7.849469443729946 24.203392477596505 C 7.849469443729946 24.918799360008798 7.280139825173787 25.498749228084787 6.577835525785174 25.498749228084787 C 5.875531226396561 25.498749228084787 5.306201151439122 24.918799360008798 5.306201151439122 24.203392477596505 C 5.306201151439122 23.487987388582788 5.875531226396561 22.90803387585808 6.577835525785174 22.90803387585808 C 7.280139825173787 22.90803387585808 7.849469443729946 23.487987388582788 7.849469443729946 24.203392477596505 Z","fillRule":"nonzero"},{"d":"M 7.849629184177944 40.72270471909467 C 7.849629184177944 41.438109808108386 7.2802986528192255 42.01806146958295 6.577994353430612 42.01806146958295 C 5.875690054041999 42.01806146958295 5.30635997908456 41.438109808108386 5.30635997908456 40.72270471909467 C 5.30635997908456 40.00729610113537 5.875690054041999 39.4273442661061 6.577994353430612 39.4273442661061 C 7.2802986528192255 39.4273442661061 7.849629184177944 40.00729610113537 7.849629184177944 40.72270471909467 Z","fillRule":"nonzero"},{"d":"M 41.07248224530901 32.70763576731962 C 40.82973330106054 32.279344592024295 40.38112244861466 32.01550517362707 39.89563146318708 32.01550517362707 C 39.410137054749896 32.01550517362707 38.96152252256871 32.279344592024295 38.71877702985491 32.70763576731962 L 33.714176341465546 41.537565792308136 C 33.47143084875175 41.965860467623266 33.47143084875175 42.493532304378114 33.714176341465546 42.92182697969324 C 33.956925285714014 43.35012165500837 34.40553613815989 43.61396127588608 34.89102712358747 43.61396127588608 L 44.90022850036621 43.61396127588608 C 45.385722908803395 43.61396127588608 45.83433744098459 43.35012165500837 46.077082933698385 42.92182697969324 C 46.31982842641218 42.493532304378114 46.31982842641218 41.965860467623266 46.077082933698385 41.537565792308136 L 41.07248224530901 32.70763576731962 Z M 39.89563146318708 36.16829614078297 L 42.54652328491211 40.84543149611529 L 37.24473599025182 40.84543149611529 L 39.89563146318708 36.16829614078297 Z","fillRule":"evenodd"},{"d":"M 48.29471484592983 34.22838592529297 C 48.29471484592983 33.46387874028262 48.90312336768423 32.84412103540757 49.6536295754569 32.84412103540757 L 56.69385299682617 32.84412103540757 C 57.44435920459884 32.84412103540757 58.052764075142996 33.46387874028262 58.052764075142996 34.22838592529297 L 58.052764075142996 41.39994755913229 C 58.052764075142996 42.164454744142645 57.44435920459884 42.78420874651741 56.69385299682617 42.78420874651741 L 49.6536295754569 42.78420874651741 C 48.90312336768423 42.78420874651741 48.29471484592983 42.164454744142645 48.29471484592983 41.39994755913229 L 48.29471484592983 34.22838592529297 Z M 51.01254065377372 35.61265081517836 L 51.01254065377372 40.0156826692469 L 55.33493826729911 40.0156826692469 L 55.33493826729911 35.61265081517836 L 51.01254065377372 35.61265081517836 Z","fillRule":"evenodd"},{"d":"M 47.23513363429478 50.832270678351904 C 46.70444300515311 51.37285799313994 46.70444300515311 52.24932485292939 47.23513363429478 52.789912167717425 L 52.21332146780831 57.860971338608685 C 52.74400861689023 58.4015621823423 53.604426921265464 58.401562355897006 54.13511407034738 57.86097504110897 L 59.113301903860915 52.78991587021772 C 59.64398905294283 52.2493250264841 59.64398905294283 51.37285799313994 59.113301903860915 50.832270678351904 L 54.13511407034738 45.76121150746065 C 53.604426921265464 45.22062419267262 52.74400861689023 45.22062419267262 52.21332146780831 45.76121150746065 L 47.23513363429478 50.832270678351904 Z M 53.17421776907785 54.92450355080997 L 50.117822538103376 51.81109327428481 L 53.17421776907785 48.69767929525936 L 56.230613000052315 51.81109327428481 L 53.17421776907785 54.92450355080997 Z","fillRule":"evenodd"},{"d":"M 34.05152626037598 51.81113770428826 C 34.05152626037598 48.52341232580297 36.66794107300895 45.85818739498363 39.89545620509556 45.85818739498363 C 43.122967914172584 45.85818739498363 45.739386149815154 48.52341232580297 45.739386149815154 51.81113770428826 C 45.739386149815154 55.09885961167952 43.122967914172584 57.764091716093176 39.89545620509556 57.764091716093176 C 36.66794107300895 57.764091716093176 34.05152626037598 55.09885961167952 34.05152626037598 51.81113770428826 Z M 39.89545620509556 48.62671347225414 C 38.16895360265459 48.62671347225414 36.76935206821987 50.05243005121455 36.76935206821987 51.81113770428826 C 36.76935206821987 53.56984535736196 38.16895360265459 54.99556193632238 39.89545620509556 54.99556193632238 C 41.621955384526935 54.99556193632238 43.021560341971266 53.56984535736196 43.021560341971266 51.81113770428826 C 43.021560341971266 50.05243005121455 41.621955384526935 48.62671347225414 39.89545620509556 48.62671347225414 Z","fillRule":"evenodd"},{"d":"M 46.52182224818639 24.27959363600787 C 35.21203787667411 24.27959363600787 26.04364814758301 33.61902287427117 26.04364814758301 45.13979496675379 C 26.04364814758301 56.66056705923641 35.21203787667411 66 46.52182224818639 66 C 57.83160661969867 66 67 56.66056705923641 67 45.13979496675379 C 67 33.61902287427117 57.83160661969867 24.27959363600787 46.52182224818639 24.27959363600787 Z M 28.761473955426897 45.13979496675379 C 28.761473955426897 35.148037012885595 36.71305040631976 27.048121564528522 46.52182224818639 27.048121564528522 C 56.33059409005302 27.048121564528522 64.28217054094587 35.148037012885595 64.28217054094587 45.13979496675379 C 64.28217054094587 55.131552920621985 56.33059409005302 63.231470220229205 46.52182224818639 63.231470220229205 C 36.71305040631976 63.231470220229205 28.761473955426897 55.131552920621985 28.761473955426897 45.13979496675379 Z","fillRule":"evenodd"},{"d":"M2.71805 15.501 L2.71796 27.5695 C3.16968 28.7536 4.56448 30.2763 7.64397 31.7003 C11.317 33.3987 16.5698 34.517 22.5079 34.517 C22.7953 34.517 23.0812 34.5144 23.3654 34.5092 C23.4003 34.5062 23.4356 34.5048 23.4712 34.5048 C24.1756 34.5048 24.7466 35.0864 24.7466 35.804 C24.7466 36.5215 24.1756 37.1032 23.4712 37.1032 C23.4409 37.1032 23.4109 37.1021 23.3811 37.1 C23.0914 37.1051 22.8003 37.1077 22.5079 37.1077 C13.9626 37.1077 6.52961 34.9056 2.71793 31.6617 L2.71783 44.7686 C2.71819 45.8877 3.82443 47.8077 7.71613 49.6074 C11.2183 51.2269 16.18 52.3197 21.8124 52.4031 C22.5564 52.4109 23.1572 53.0283 23.1572 53.788 C23.1572 54.537 22.5732 55.1471 21.8438 55.1715 L21.823 55.1721 L21.7983 55.1723 C21.7766 55.1723 21.7551 55.1718 21.7337 55.1707 C9.66183 54.9821 0.000659713 50.397 0 44.769 L0.000312399 10.3786 C0.0344464 4.64394 10.0982 0 22.5077 0 C34.9382 0 45.0151 4.65975 45.0151 10.4078 L45.0149 10.455 L45.0149 13.3168 C45.0163 13.3429 45.017 13.3692 45.017 13.3956 L45.017 20.3526 C45.017 21.1171 44.4086 21.7368 43.6581 21.7368 C42.9076 21.7368 42.2992 21.1171 42.2992 20.3526 L42.2992 20.3247 L42.297 20.325 L42.297 15.5015 C38.4851 18.7451 31.0525 20.9469 22.5079 20.9469 C13.9627 20.9469 6.52977 18.7448 2.71805 15.501 Z M42.2972 10.4277 L42.297 10.4414 L42.297 11.4106 C41.8445 12.5945 40.4496 14.1162 37.3718 15.5395 C33.6987 17.2379 28.4459 18.3562 22.5079 18.3562 C16.5698 18.3562 11.317 17.2379 7.64397 15.5395 C4.56476 14.1156 3.16994 12.5931 2.71808 11.4091 L2.71809 10.3954 L2.71814 10.389 C2.729 9.26681 3.85108 7.35186 7.73427 5.56085 C11.3792 3.87971 16.5988 2.76853 22.5077 2.76853 C28.4267 2.76853 33.6538 3.88356 37.2994 5.56932 C41.1916 7.36913 42.2973 9.28897 42.2973 10.4078 L42.2972 10.4277 Z","fill":"rgba(34,84,155,1)","fillRule":"evenodd"},{"d":"M7.84947 24.2034 C7.84947 24.9188 7.28014 25.4987 6.57784 25.4987 C5.87553 25.4987 5.3062 24.9188 5.3062 24.2034 C5.3062 23.488 5.87553 22.908 6.57784 22.908 C7.28014 22.908 7.84947 23.488 7.84947 24.2034 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"},{"d":"M7.84963 40.7227 C7.84963 41.4381 7.2803 42.0181 6.57799 42.0181 C5.87569 42.0181 5.30636 41.4381 5.30636 40.7227 C5.30636 40.0073 5.87569 39.4273 6.57799 39.4273 C7.2803 39.4273 7.84963 40.0073 7.84963 40.7227 Z","fill":"rgba(34,84,155,1)","fillRule":"nonzero"},{"d":"M41.0725 32.7076 C40.8297 32.2793 40.3811 32.0155 39.8956 32.0155 C39.4101 32.0155 38.9615 32.2793 38.7188 32.7076 L33.7142 41.5376 C33.4714 41.9659 33.4714 42.4935 33.7142 42.9218 C33.9569 43.3501 34.4055 43.614 34.891 43.614 L44.9002 43.614 C45.3857 43.614 45.8343 43.3501 46.0771 42.9218 C46.3198 42.4935 46.3198 41.9659 46.0771 41.5376 L41.0725 32.7076 Z M39.8956 36.1683 L42.5465 40.8454 L37.2447 40.8454 L39.8956 36.1683 Z","fill":"rgba(34,84,155,1)","fillRule":"evenodd"},{"d":"M48.2947 34.2284 C48.2947 33.4639 48.9031 32.8441 49.6536 32.8441 L56.6939 32.8441 C57.4444 32.8441 58.0528 33.4639 58.0528 34.2284 L58.0528 41.3999 C58.0528 42.1645 57.4444 42.7842 56.6939 42.7842 L49.6536 42.7842 C48.9031 42.7842 48.2947 42.1645 48.2947 41.3999 L48.2947 34.2284 Z M51.0125 35.6126 L51.0125 40.0157 L55.3349 40.0157 L55.3349 35.6126 L51.0125 35.6126 Z","fill":"rgba(34,84,155,1)","fillRule":"evenodd"},{"d":"M47.2351 50.8323 C46.7044 51.3729 46.7044 52.2493 47.2351 52.7899 L52.2133 57.861 C52.744 58.4016 53.6044 58.4016 54.1351 57.861 L59.1133 52.7899 C59.644 52.2493 59.644 51.3729 59.1133 50.8323 L54.1351 45.7612 C53.6044 45.2206 52.744 45.2206 52.2133 45.7612 L47.2351 50.8323 Z M53.1742 54.9245 L50.1178 51.8111 L53.1742 48.6977 L56.2306 51.8111 L53.1742 54.9245 Z","fill":"rgba(34,84,155,1)","fillRule":"evenodd"},{"d":"M34.0515 51.8111 C34.0515 48.5234 36.6679 45.8582 39.8955 45.8582 C43.123 45.8582 45.7394 48.5234 45.7394 51.8111 C45.7394 55.0989 43.123 57.7641 39.8955 57.7641 C36.6679 57.7641 34.0515 55.0989 34.0515 51.8111 Z M39.8955 48.6267 C38.169 48.6267 36.7694 50.0524 36.7694 51.8111 C36.7694 53.5698 38.169 54.9956 39.8955 54.9956 C41.622 54.9956 43.0216 53.5698 43.0216 51.8111 C43.0216 50.0524 41.622 48.6267 39.8955 48.6267 Z","fill":"rgba(34,84,155,1)","fillRule":"evenodd"},{"d":"M46.5218 24.2796 C35.212 24.2796 26.0436 33.619 26.0436 45.1398 C26.0436 56.6606 35.212 66 46.5218 66 C57.8316 66 67 56.6606 67 45.1398 C67 33.619 57.8316 24.2796 46.5218 24.2796 Z M28.7615 45.1398 C28.7615 35.148 36.7131 27.0481 46.5218 27.0481 C56.3306 27.0481 64.2822 35.148 64.2822 45.1398 C64.2822 55.1315 56.3306 63.2315 46.5218 63.2315 C36.7131 63.2315 28.7615 55.1315 28.7615 45.1398 Z","fill":"rgba(34,84,155,1)","fillRule":"evenodd"}]}
                                display="block"
                                position="absolute"
                                top="15px"
                                left="14.5px"
                            />
                        </Flex>
                        <Flex
                            gap="6px"
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="center"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                        >
                            <Text
                                
                                fontSize="20px"
                                fontWeight="700"
                                color="rgba(45,112,205,1)"
                                lineHeight="25px"
                                textAlign="center"
                                display="block"
                                shrink="0"
                                alignSelf="stretch"
                                position="relative"
                                whiteSpace="pre-wrap"
                            >
                                CDR (Smile)
                            </Text>
                            <Text
                                
                                fontSize="16px"
                                fontWeight="400"
                                color="rgba(13,26,38,1)"
                                lineHeight="24px"
                                textAlign="center"
                                display="block"
                                letterSpacing="0.01px"
                                shrink="0"
                                alignSelf="stretch"
                                position="relative"
                                whiteSpace="pre-wrap"
                            >
                                Clinical data repository where all processed health data is stored
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                gap="48px"
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="48px 60px 48px 60px"
                backgroundColor="rgba(34,84,155,1)"
            >
                <Text
                    
                    fontSize="40px"
                    fontWeight="400"
                    color="rgba(255,255,255,1)"
                    lineHeight="50px"
                    textAlign="center"
                    display="block"
                    shrink="0"
                    position="relative"
                    whiteSpace="pre-wrap"
                >
                    Rules Engine (Coming Soon)
                </Text>
                <Flex
                    gap="48px"
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                >
                    <Flex
                        gap="18px"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                    >
                        <Text
                            
                            fontSize="20px"
                            fontWeight="700"
                            color="rgba(255,255,255,1)"
                            lineHeight="25px"
                            textAlign="center"
                            display="block"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            DxF Defined Rules and Participant Defined Rules
                        </Text>
                        <Text
                            
                            fontSize="16px"
                            fontWeight="400"
                            color="rgba(255,255,255,1)"
                            lineHeight="24px"
                            textAlign="center"
                            display="block"
                            letterSpacing="0.01px"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                gap="48px"
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="48px 60px 48px 60px"
                backgroundColor="rgba(255,255,255,1)"
            >
                <Text
                    
                    fontSize="40px"
                    fontWeight="400"
                    color="rgba(34,84,155,1)"
                    lineHeight="50px"
                    textAlign="left"
                    display="block"
                    shrink="0"
                    position="relative"
                    whiteSpace="pre-wrap"
                >
                    Visualizations
                </Text>
                <Flex
                    gap="48px"
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    shrink="0"
                    alignSelf="stretch"
                    position="relative"
                >
                    <Image
                        src={VisualizationsPic}
                        width="324px"
                        height="315px"
                        display="block"
                        shrink="0"
                        position="relative"
                        alt=""
                    />
                    <Flex
                        gap="6px"
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        overflow="hidden"
                        grow="1"
                        shrink="1"
                        basis="0"
                        alignSelf="stretch"
                        position="relative"
                    >
                        <Text
                            
                            fontSize="20px"
                            fontWeight="700"
                            color="rgba(45,112,205,1)"
                            lineHeight="25px"
                            textAlign="left"
                            display="block"
                            shrink="0"
                            alignSelf="stretch"
                            position="relative"
                            whiteSpace="pre-wrap"
                        >
                            Objectives of the Visualization Tool
                        </Text>
                        <Flex
    direction="column"
    textAlign="left"
    alignSelf="stretch"
    position="relative"
>
    <ol style={{ fontSize: "14px", fontWeight: "400", color: "rgba(13,26,38,1)", lineHeight: "24px", paddingLeft: "20px" }}>
        <li>Onboard organizations to the Sandbox, minimize duplicative data entry, and validate completeness of data.</li>
        <li>Help visualize DxF uptake and layer an equity lens.</li>
        <li>Assist Organizations to readily understand their Partner’s DxF compliance and data sharing capabilities.</li>
        <li>Incorporate additional information that may be suitable for inclusion in the CDII Participant Directory.</li>
        <li>Assist with DxF evaluation.</li>
    </ol>
</Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
        )
      }

export default MainPage;


