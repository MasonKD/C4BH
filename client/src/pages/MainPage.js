import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Flex, Text } from '@aws-amplify/ui-react';

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

  return (
    <div className="main-container">
      <main>

<Flex
gap="48px"
direction="column"
width="auto"
justifyContent="flex-start"
alignItems="center"
position="relative"

backgroundColor="rgba(255,255,255,1)"
>
<Flex
gap="48px"
direction="column"
justifyContent="flex-start"
alignItems="left"
shrink="0"
alignSelf="stretch"
position="relative"
padding="48px 60px 48px 60px"
>
<Text

fontSize="48px"
fontWeight="700"
color="rgba(34,84,155,1)"
lineHeight="60px"
textAlign="left"
display="block"

shrink="0"
position="relative"
whiteSpace="pre-wrap"
>
Data Exchange Framework Sandbox
</Text>
<Flex
height="291px"
overflow="hidden"
shrink="0"
alignSelf="stretch"
position="relative"
borderRadius="10px"
backgroundColor="rgba(226,226,226,1)"
/>
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
gap="6px"
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
Worem ipsum dolor sit amet, consectetur adipiscing elit.
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
Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
</Text>
</Flex>
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
Emet, consectetur adipiscing elit.
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
Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
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
backgroundColor="rgba(241,247,255,1)"
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
gap="48px"
direction="row"
justifyContent="center"
alignItems="flex-start"
shrink="0"
alignSelf="stretch"
position="relative"
>
<Flex
height="291px"
overflow="hidden"
grow="1"
shrink="1"
basis="0"
position="relative"
borderRadius="10px"
backgroundColor="rgba(226,226,226,1)"
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
Emet, consectetur adipiscing elit.
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
Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
</Text>
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
backgroundColor="rgba(255,255,255,1)"
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
height="96px"
overflow="hidden"
shrink="0"
alignSelf="stretch"
position="relative"
borderRadius="10px"
backgroundColor="rgba(226,226,226,1)"
/>
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
Corem ipsum dolor sit
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
Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
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
height="96px"
overflow="hidden"
shrink="0"
alignSelf="stretch"
position="relative"
borderRadius="10px"
backgroundColor="rgba(226,226,226,1)"
/>
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
Corem ipsum dolor sit
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
Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
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
height="96px"
overflow="hidden"
shrink="0"
alignSelf="stretch"
position="relative"
borderRadius="10px"
backgroundColor="rgba(226,226,226,1)"
/>
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
Corem ipsum dolor sit
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
Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
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
Rules Engine
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
gap="0"
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
Worem ipsum dolor sit amet, consectetur adipiscing elit.
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
Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
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
<Flex
height="291px"
overflow="hidden"
grow="1"
shrink="1"
basis="0"
position="relative"
borderRadius="10px"
backgroundColor="rgba(226,226,226,1)"
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
Corem ipsum dolor sit
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
Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
</Text>
</Flex>
</Flex>
</Flex>
</Flex>
      
      </main>
    </div>
  );
};

export default MainPage;


