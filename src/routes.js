import React from 'react'

const ViewProfile = React.lazy(() => import('./views/components/profile/Profile'))
const Dashboard = React.lazy(() => import('./views/components/dashboard/dashboard'))

const routes = [
  { path: '/view-profile', exact: true, name: 'ViewProfile', component: ViewProfile },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
]

export default routes
