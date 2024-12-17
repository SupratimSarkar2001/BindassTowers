import React from 'react'

const Home = () => {
  const userInfo  = JSON.parse(localStorage.getItem('userInfo'))
  return (
    <div>
      {userInfo.firstName} - {userInfo.role}
    </div>
  )
}

export default Home
