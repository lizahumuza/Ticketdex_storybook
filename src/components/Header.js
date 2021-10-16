import React from 'react';
import Btn from './Btn'
import Logo from './Logo';
import Text from './Text'
import Iconz from './Iconz';
import { Box, Spacer, Flex } from '@chakra-ui/react';

const Header = () => {
    return (  
        <Flex marginLeft="40px" height="100%">
            <Box>
                <h1 style={{fontFamily:"Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif"}}><p><Logo/> <span style={{color:"white"}}>Ticket</span><span style={{color:"#286EE6"}}>DEX</span></p></h1>  
            </Box>
            <Spacer />
            <Box d="flex" marginRight="40px" marginTop="20px" height="100%" gridGap={30}>

                <Text/>
                
                <Btn/>
               
                <Iconz/>
            </Box>
        </Flex>
        
    );
}
 
export default Header;
//          