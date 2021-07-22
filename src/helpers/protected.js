import React from 'react'
import { Redirect } from 'react-router-dom'

// Class to check if user is logged in already and prevent duplicate login
class AllowLoginIfTokenPresent extends React.Component {
  render() {
    return localStorage.getItem('access_token') ? (
      <Redirect to={{ pathname: '/dashboard' }} />
    ) : (
      <Redirect to={{ pathname: '/' }} />
    )
  }
}

export { AllowLoginIfTokenPresent }
