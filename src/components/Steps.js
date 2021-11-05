import React from 'react'
import {Box, Text,Flex,HStack} from '@chakra-ui/react'
import {primaryGradientBg} from '../theme'
import '../index.css'
import ArrowIcon from './ArrowIcon'

const Steps = () => {
    return (  
        <>
        <Text color="#FFFFFF" fontSize="2rem" fontFamily="Poppins"><p><strong>How NFT Ticketing</strong> <span>Works?</span></p></Text>
        <HStack
            w="100%"
            justifyContent={{ base: "center", lg: "flex-start" }}
            flexWrap={{ base: "wrap", lg: "nowrap" }}
            spacing="0"
            z-index="2"
            fontFamily="Poppins"
        >
            
            <Flex alignItems="center" flexDir={{ base: "column", sm: "row" }} color="#FFFFFF" overflow="hidden" perspective="1px">
                <Box
                    w="18rem"
                    h="20rem"
                    bg={primaryGradientBg}
                    borderRadius="15px"
                    boxShadow="7px 7px 15px rgba(0, 0, 0, 0.25)"
                    border="2px solid #3C3E46"
                    p={{ base: "2rem", xl: "3.75rem 3rem" }}
                    padding="1.5rem"
                >
                    <Text fontWeight="bold" textStyle="step-title" fontSize="1.8rem">Step 1</Text>
                    <Text mt={{ base: "2rem", lg: "3rem", xxl: "5rem" }} textStyle="seller-text-3">A ticket is generated on the blockchain to secure proof of ownership and ease of transfer which cannot be hacked or altered.</Text>
                </Box>
                <Box>
                    <ArrowIcon />
                </Box>
            </Flex>
            <Flex alignItems="center" color="#FFFFFF" flexDir={{ base: "column", sm: "row" }}>
                <Box
                    w="18rem"
                    h="20rem"
                    bg={primaryGradientBg}
                    borderRadius="15px"
                    boxShadow="7px 7px 15px rgba(0, 0, 0, 0.25)"
                    border="2px solid #3C3E46"
                    padding="1.5rem"
                >
                    <Text fontWeight="bold" textStyle="step-title" fontSize="1.8rem">Step 2</Text>
                    <Text mt={{ base: "2rem", lg: "3rem", xxl: "5rem" }} textStyle="seller-text-3">The ticket is purchased in the primary market by a patron, which leads to them receiving ownership of the ticket in the form of a digital and immutable NFT.</Text>
                </Box>
                <Box>
                    <ArrowIcon />
                </Box>
            </Flex>
            <Box color="#FFFFFF" pt={{ base: "0rem", sm: "2rem", lg: "0rem" }}>
                <Box
                    w="18rem"
                    h="20rem"
                    bg={primaryGradientBg}
                    borderRadius="15px"
                    boxShadow="7px 7px 15px rgba(0, 0, 0, 0.25)"
                    border="2px solid #3C3E46"
                    padding="1.5rem"
                >
                    <Text fontWeight="bold" textStyle="step-title" fontSize="1.8rem">Step 3</Text>
                    <Text mt={{ base: "2rem", lg: "3rem", xxl: "5rem" }} textStyle="seller-text-3">The tokenized tickets can be used for easy admission at the event or resold on the secondary market and transferred to a new buyer. The original creator receives a percentage of each subsequent resale.</Text>
                </Box>
            </Box>
        </HStack>
       </>
    );
}
 
export default Steps;
