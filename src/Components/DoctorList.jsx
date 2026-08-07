import React, { useEffect, useContext, useState } from 'react'
import { counterContext } from '../MainContext'

import DoctorsCart from './DoctorsCart'
import Flex from "./Flex"

import HeadingPart from './HeadingPart'


const TopDoctorBook = ({doctorData}) => {
      const { allDoctors } = useContext(counterContext);
      
      const [docFilterSpeci, setDocFilterSpeci] = useState([])

  useEffect(()=>{
    const FilterDoc = allDoctors.filter((items)=> items.speciality == doctorData.speciality)
    setDocFilterSpeci(FilterDoc)
    },[])
    
    console.log(docFilterSpeci);



  return (
    <>

            <div className="">
                <div>
                   <HeadingPart 
                      HeadingLine="Find by Speciality" 
                      DetailsLine="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free." 
                    />
                </div>
                <Flex className="gap-[20px] !flex-wrap justify-center lg:justify-start pt-[30px]  text-start">
                    
                    {
                     docFilterSpeci.map((items,index)=>{
                            return(
                                <DoctorsCart key={index} 
                                    id={items._id}
                                    DoctorPhoto={items.image}
                                    DoctorName={items.name}
                                    DoctorDesignation={items.speciality}
                                    Active="Available"
                                />
                            )
                        }) 
                    }

                </Flex>  

            </div>

    </>
  )
}

export default TopDoctorBook

