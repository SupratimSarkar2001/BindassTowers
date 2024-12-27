import React from 'react'
import NavLayout from '../../Components/Navbar/NavLayout'
import UserInfoCard from '../../Components/UserInfoCard/UserInfoCard'
import WelcomeSlide from '../../Components/WelcomeSlide/WelcomeSlide'


const Home = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <NavLayout pageName="home">
      <div style ={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <div style ={{width:'80%'}}>
          <WelcomeSlide/>
        </div>
        <div style ={{width:'20%'}}>
          <UserInfoCard _id={userInfo._id} />
        </div>
      </div>
    </NavLayout>
  )
}

export default Home
