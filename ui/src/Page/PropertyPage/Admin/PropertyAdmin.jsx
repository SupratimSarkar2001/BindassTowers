import React from 'react'
import NavLayout from '../../../Components/Navbar/NavLayout'
import ConfigTabs from '../../../Components/Tabs/ConfigTabs'
import { adminPropertyTabConfig } from '../../../Components/Tabs/configTabs'


const PropertyAdmin = () => {
 return (
  <NavLayout pageName="property-admin">
   <ConfigTabs defaultActiveKey="all_existing_property" items={adminPropertyTabConfig}/>
  </NavLayout>
 )
}

export default PropertyAdmin
