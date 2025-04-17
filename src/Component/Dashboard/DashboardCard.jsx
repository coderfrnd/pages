import React from 'react'
import SideDashboardCard from './SideDashboardCard'
import BusinessIdentityCard from './BusinessIdentityCard'

const DashboardCard = () => {
  return (
    <div className='w-[1105px] h-[963px] top-[125px] left-[290px] rounded-[15px] bg-[#ffffff] absolute'>
      <div className="relative flex">
        <SideDashboardCard />
        <BusinessIdentityCard />
      </div>
    </div>
  )
}

export default DashboardCard