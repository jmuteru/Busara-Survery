import React, { useEffect, useState } from 'react'
import { fetchUserInfo } from 'api/apis'
import { Col, Row } from 'antd'

function Profile() {
  const [data, setData] = useState({})
  const getUserInfo = async () => {
    const response = await fetchUserInfo()
    return response.data
  }

  useEffect(() => {
    fetchUserInfo().then((response) => setData(response.data))
  }, [])

  if (!data) {
    return <p>Loading.............</p>
  }

  return (
    <div>
      <div style={{ color: 'black', margin: '2em' }}> </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <h1>My Profile</h1>

        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '60%',
          }}
        >
          <h4>Email</h4> <h5>{data.email}</h5>
        </Row>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '60%',
          }}
        >
          <h4>First Name</h4> <h5>{data.first_name}</h5>
        </Row>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '60%',
          }}
        >
          <h4>Language</h4>
          <h5>{data.language}</h5>
        </Row>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '60%',
          }}
        >
          <h4>Last name</h4>
          <h5>{data.last_name}</h5>
        </Row>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '60%',
          }}
        >
          <h4>Full name</h4> <h5>{data.name}</h5>
        </Row>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '60%',
          }}
        >
          <h4>Phone Number</h4>
          <h5>{data.phone_number}</h5>
        </Row>
      </div>
    </div>
  )
}

export default Profile
