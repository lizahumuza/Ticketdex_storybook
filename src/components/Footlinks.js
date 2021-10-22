import React from 'react'
import { Link, Flex} from '@chakra-ui/react'

const Footlinks = () => {
    return ( 
        <Flex direction="row" marginTop="40px" marginLeft="30px" marginRight="30px" height="100%" justifyContent="space-around">
            <Link href="#" textDecoration="underline" fontSize= "0.8rem" color="#FFFFFF" fontFamily="Poppins" fontWeight="300" lineHeight= "1.5rem" >WALLETS</Link>
            
            <Link href="#" textDecoration="underline" fontSize="0.8rem" color="#FFFFFF" fontFamily="Poppins" fontWeight="300" lineHeight= "1.5rem" >FAQ</Link>
            
            <Link href="#" textDecoration="underline" fontSize="0.8rem" color="#FFFFFF" fontFamily="Poppins" fontWeight="300" lineHeight= "1.5rem" >HELP</Link>
        </Flex>
        
         
     );
}
 
export default Footlinks;