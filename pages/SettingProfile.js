import React from 'react'
import WithHeaderFooter from '../src/components/Common/WithHeaderFooter'

import Profile from '../src/components/SettingProfile/Profile'
const SettingProfile = () => {
  return (
    <div>
        <WithHeaderFooter>
        <Profile/>
        </WithHeaderFooter>
       
    </div>
  )
}

export default SettingProfile