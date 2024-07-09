import React from 'react'
import RegistrationForm from '../components/registrationForm'


const Registration = () => {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  
  };



  return (
    <div style={containerStyle}>
      <RegistrationForm/>
      
    </div>
  )
}

export default Registration