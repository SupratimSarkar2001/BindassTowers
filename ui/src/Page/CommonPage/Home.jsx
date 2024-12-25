import React from 'react'
import NavLayout from '../../Components/Navbar/NavLayout'

const Home = () => {
  const userInfo  = JSON.parse(localStorage.getItem('userInfo'))
  return (
    // <div>
    //   {userInfo.firstName} - {userInfo.role}
    // </div>
    <NavLayout>
      
    </NavLayout>
  )
}

export default Home
