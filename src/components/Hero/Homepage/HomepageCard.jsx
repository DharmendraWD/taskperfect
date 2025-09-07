import React from 'react'
import Card1 from '../../utilities/cards/Card1'
import HeadingL from '../../utilities/HeadingL'
import Para from '../../utilities/Para'

function HomepageCard() {
  return (
     <div className="py-[120px]">
      <HeadingL label="Low ticket size" />
    <Para label="Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency." /> 
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

   <Card1></Card1>
 
</div></div>
  )
}

export default HomepageCard