import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {Circle} from '@chakra-ui/react'

 
const ArrowIcon = () => {
    return (  
        <Circle size="40px" bg="linear-gradient(90deg, #10985B 0%, #286EE6 100%)" color="#FFFFFF">
            <AiOutlineArrowRight size="20"/>
        </Circle>
    );
}
 
export default ArrowIcon;
