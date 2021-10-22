import React from 'react'
import {Box, HStack, Text} from '@chakra-ui/react'
import Socialicons from './Socialicons';
import Footlinks from './Footlinks';

const Footer = () => {
    return (  
        <Box w="100%">
            <Footlinks/>
        <HStack marginTop="40px" spacing="300px" h="100%" marginLeft="40px" w="100%">
            <Text color="#FFFFFF" fontSize="30px" fontWeight="700" display={{ base: "none", md: "block" }}>TicketDEX</Text>
            <Socialicons />
            <Text color="#FFFFFF" fontSize="14px" fontFamily="Poppins" fontWeight="500"> ©2021 TicketDex.All rights reserved.</Text>
        </HStack>
        </Box>
    );
}
 
export default Footer;