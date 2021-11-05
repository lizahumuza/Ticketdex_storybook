import React from 'react'
import {Box, Text ,Heading, Button, Image,Flex} from '@chakra-ui/react'
import '../index.css'

const Seller = () => {
    const bg = `linear-gradient(93.64deg, #32353C 27.07%, rgba(196, 196, 196, 0) 90.79%);`;
    return (  
        <Flex dir="column" w="100%" mt="4rem">
        <Box overflow="hidden" w="100%" borderRadius="20" position="relative">
            <Image 
            height="500px"
            w="100%"
            objectFit="cover"
            src="/hero.jpeg"
            alt=""
            zIndex={1}
            alt="img"
            />
            <Box position={"absolute"} bg={bg} zIndex={2} left="0" right="0" top="0" bottom="0"/>
            <Box   
                zIndex={99}
                top="15%"
                position="absolute"
                pl="4.7rem"
                width="45%"
                pt="1.5rem"
                color="#FFFFFF"
                fontFamily="Poppins"
            >
            <Flex alignItems="flex-start" flexDir="column">
            <Text fontSize="1.95rem" mb="0rem" ><strong>Become</strong> a seller</Text>
            <Text
                 mt="1rem"
                 fontWeight="light"
                 letterSpacing="0.2px"
                 opacity="0.8"
                 fontSize="1.15rem"
            >
                Host your event through TicketDex in five clicks or less. Get paid when buyers trade your tickets. Creators keep 99% of primary ticket sales revenue.   
            </Text>
            <Button 
                 color="#FFFFFF" 
                 size="lg" 
                 fontWeight="800" 
                 borderRadius="62px"
                 borderColor="#307FE2"
                 padding="12px 30px"
                 border= "1px solid"
                 bg="transparent"
                 fontSize="0.9rem"
                 mt="2rem"
                 lineHeight="tall"
            >Learn More</Button>
            </Flex>
            </Box>
        </Box>
        </Flex>
    );
}
 
export default Seller;