import React from 'react'
import Container from "./Container"
import Flex from "./Flex"

const WhyChoose = () => {
  return (
    <>
    <div className='md:h-screen'>
     <Container>
        <div  className='pt-20 pb-[30px]'>
            <h5 className='text-2xl font-Outfit uppercase'>Why <span className='font-semibold '>Choose us</span></h5>
        </div>
        <Flex>
            <ChooseData Heading="Efficiency:" Details="Streamlined appointment scheduling that fits into your busy lifestyle." />
            <ChooseData Heading="Efficiency:" Details="Streamlined appointment scheduling that fits into your busy lifestyle." />
            <ChooseData Heading="Efficiency:" Details="Streamlined appointment scheduling that fits into your busy lifestyle." />
        </Flex>    
    </Container>         
    </div>

    </>
  )
}

export default WhyChoose



const ChooseData = ({Heading, Details}) => {
  return (
    <div>
        <div className='space-y-11 pr-[127px] pb-[110px] pt-[60px] pl-[67px] border-1 border-[#ABABAB] hoverEffect group  transition-all duration-400 hover:bg-primary'>
            <h4 className='font-semibold font-Outfit text-[18px] uppercase text-textColor  transition-all duration-400 group-hover:text-white'>{Heading}</h4>
            <p className='text-[18px] font-Outfit text-paraColor  transition-all duration-400 group-hover:text-white'>{Details}</p>
        </div>
    </div>
  )
}

