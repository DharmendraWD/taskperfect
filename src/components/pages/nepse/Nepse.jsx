import React from 'react'
import Marquee from '../../utilities/Marquee'
import LiveTradingTable from './LiveTradingTable'

function Nepse() {
  return (
    <>
<div>
      <Marquee></Marquee>
</div>
    <div className='stickyAfterScroll'>
      <LiveTradingTable></LiveTradingTable>
    </div>
    </>
  )
}

export default Nepse