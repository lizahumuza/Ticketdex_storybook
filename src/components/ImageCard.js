import { Box, Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import { Label } from "semantic-ui-react";

function ImageCard(){
    return(
<Flex w="100%" height="20rem" color="#fff" font-size="30px" margin="0 20px" justifyContent="center" alignItems="center" borderRadius="10px">
    <Image
        src={"/images/r3.png"}
        alt="img"
        w="100%"
        borderRadius="2xl"
        objectFit="cover"
        filter="drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25))"
        height="20rem"
        fallback={<Box height="100%" background="rgba(251, 251, 255, 0.3)" borderRadius="2xl" />}
       
    />
   
</Flex>
    );
}
export default ImageCard;