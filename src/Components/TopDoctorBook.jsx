import React, { useContext } from 'react'
import Section from "./Section"
import Container from './Container'
import HeadingPart from './HeadingPart'
import DoctorsCart from './DoctorsCart'
import Flex from "./Flex"
import { useNavigate } from 'react-router-dom'
import { counterContext } from '../MainContext'

const TopDoctorBook = () => {
    
    const { allDoctors} = useContext(counterContext);
    const Navigate = useNavigate()

  return (
    <>
     <Section>
        <Container>
             <HeadingPart 
                HeadingLine="Top Doctors to Book" 
                DetailsLine="Simply browse through our extensive list of trusted doctors." />   
            <div className="text-center">
                <Flex className="gap-x-5 gap-y-7 !flex-wrap justify-center pb-[60px] pt-[40px] text-start">
                    {
                        allDoctors.slice(0,10).map((items, index)=>{
                             return(
                                <DoctorsCart key={index} 
                                DoctorPhoto={items.image}
                                Active=""
                                DoctorName={items.name}
                                DoctorDesignation={items.speciality}
                                Active="Available"
                                />
                            )
                            })
                    } 
                </Flex>  
                <button onClick={()=> Navigate("/alldoctors")} className='px-[84px] py-[18px] text-xl font-Outfit rounded-[50px] bg-[#EAEFFF] text-paraColor cursor-pointer '>more</button>                  
            </div>

        </Container>    
    </Section> 
    </>
  )
}

export default TopDoctorBook

