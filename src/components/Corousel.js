import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ImageCard from "./ImageCard";
import {Image, Box, Text} from "@chakra-ui/react"


const Corousel = ()=>{
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const images = [
    "/images/r3.png",
    "/images/r4.png",
    "/images/r5.png",
    "/images/r12.png",
    "/images/r1.png",
    "/images/r3.png"
  ];
  
  return (
 <>
 <Carousel
  additionalTransfrom={0}
  centerMode={false}
  containerClass=""
  //customButtonGroup={<NextArrow />}
  //dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  partialVisible
  renderButtonGroupOutside={true}
  renderDotsOutside={true}
  responsive={responsive}
  showDots={false}
  sliderClass=""
  swipeable
  arrows={true}
 >
    {images.slice(0, 5).map(image => {
        return (
          <Box>
          <Image
            draggable={false}
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
          <Box zIndex={999} top={"65%"} position={"absolute"}>
          <Text
            fontSize={{ xl: "4xl", lg: "3xl" }}
            ml={"1rem"}
            fontWeight="bold"
            lineHeight={"3.4rem"}
            letterSpacing={"0.01rem"}
            textTransform={"capitalize"}
          >
            
          </Text>
        </Box>
        <Box zIndex={999} top={"82%"} position={"absolute"}>
          <Text
            fontSize={{ xl: "xl", lg: "lg" }}
            ml={"1rem"}
            fontWeight="semiBold"
            lineHeight={"7"}
            letterSpacing={"0.01rem"}
          >
            
          </Text>
        </Box>
          </Box>
          
        );
      })} 
      </Carousel>
 </>
  )
}

export default Corousel;
/*<ImageCard />
<ImageCard />
<ImageCard />
<ImageCard />
<ImageCard />
<ImageCard />
<ImageCard />
<ImageCard />
<ImageCard />*/