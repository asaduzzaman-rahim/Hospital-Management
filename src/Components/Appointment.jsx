import React, { useContext, useEffect, useState }  from 'react'
import { counterContext } from '../MainContext'
import Section from './Section'
import Container from './Container'
import Flex from "./Flex"
import DoctorList from "./DoctorList"
import { useParams } from  "react-router-dom";


const Appointment = () => {

    const { allDoctors} = useContext(counterContext);
    const {DoctorName} = useParams()
    const [doctorData, setDoctorData] = useState("")
        
    useEffect(()=>{
        let findData = allDoctors.find((items)=>{
            return items.name === DoctorName
        })
        setDoctorData(findData)
    },[allDoctors])


  return (
    <>
     <Section>
        <Container>
            <div className='space-y-46'>
                <Flex className="gap-6.5 lg:justify-start lg:items-center">
                    <div className="bg-primary  max-w-[473px] flex justify-center items-end rounded-xl">
                         <img  src={doctorData.image} alt="Doctor Photo" />
                    </div>
                    <div className='p-10.5 border-1 border-[#d0d0d0] rounded-xl w-full'>
                        <div>
                            <h1 className='text-4xl font-Outfit font-medium text-textColor'>{doctorData.name}</h1>
                            <h4 className='text-xl pt-3 font-Outfit text-paraColor flex items-center gap-2'>{doctorData.degree}- 
                                {doctorData.speciality}
                            <span className='text-[16px] px-3.5 py-2 border-1 border-[#d0d0d0] rounded-[90%]'>{doctorData.experience}</span></h4>
                        </div>
                        <div className='pt-5 pb-7 space-y-4 max-w-[900px]'>
                            <h3 className='text-[18px] font-Outfit font-medium text-textColor'>About</h3>
                            <p className='leading-6 text-paraColor'>{doctorData.about}</p>
                        </div>
                        <h3 className='text-[22px] font-normal text-paraColor font-Outfit'>Appointment fee: <span className='text-black'>${doctorData.fees}</span> </h3>
                    </div>
                </Flex>    
                <div className=''>
                    <DoctorList doctorData={doctorData} />
                </div>  
            </div>  
        </Container>    
    </Section> 
    </>
  )
}

export default Appointment
