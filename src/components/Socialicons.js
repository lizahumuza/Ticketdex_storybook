import React from 'react'
import { Box, Circle} from '@chakra-ui/react'
import { FaTwitter, FaDiscord} from 'react-icons/fa'

const Socialicons = () => {
    return (  
        <Box d="flex" alignItems="flex-start" flexDir="row" gridGap="7.8rem">
            <Circle size="40px" bg="rgba(255,255,255,0.05)" color="white" border="2px solid" borderColor="#4a494940">
                <FaTwitter size="20" />
            </Circle>
            <Circle size="40px" bg="rgba(255,255,255,0.05)" color="white" border="2px solid" borderColor="#4a494940">
                <FaDiscord size="20" />
            </Circle>  
        </Box>
    );
}
 
export default Socialicons;
