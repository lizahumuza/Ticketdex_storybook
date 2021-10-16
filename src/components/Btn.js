import React from 'react'
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Btn = ({backgroundColor,size,label,...props}) => {
    return ( 
        <Button
        color="#286EE6" 
        size="lg" 
        fontWeight="300" 
        borderRadius="62px"
        borderColor="#307FE2"
        padding="12px 30px"
        border= "1px solid"
        bg="transparent"
        fontSize="14px"
        //_hover= {
            //color="brand.darkSpringGreen",
           // borderColor="brand.darkSpringGreen"
         // }
        >SELL TICKETS</Button>
     );
}
Btn.propTypes={
    backgroundColor: PropTypes.string,
    size:PropTypes.oneOf(['sm','md','lg']),
    label: PropTypes.string,
}


  export default Btn;