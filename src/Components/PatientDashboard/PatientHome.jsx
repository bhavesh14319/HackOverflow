import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import PatientNavbar from './PatientNavbar';
import "../PatientDashboardCss/PatientHome.css"

const PatientHome = () => {
    const smallScreen = useMediaQuery('(max-width:600px)');

    const AppointmentCard = () =>{
      return (
        <div className='smAppointmentCard'>
          <span>Patient Name</span>
          <span>Date </span>
          <span>Status</span>
        </div>
      )
    }

  return (
    <>
        {smallScreen && 
            <div className='Patient_Body'>
                <PatientNavbar/>

                <div className="Patient_BookBtn animated-gradient ">
                    <span>Book Appointment</span>
                </div>
                
                <div className='Patient_AppointmentContainer'>
                    <AppointmentCard/>
                    <AppointmentCard/>
                    <AppointmentCard/>
                    <AppointmentCard/>
                    <p className='ShowMoreBtn'>Show More</p>
                </div>

           </div>
        }
    </>
  )
}

export default PatientHome
