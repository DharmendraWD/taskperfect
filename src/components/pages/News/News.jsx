import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import HeadingL from '../../utilities/HeadingL';
import Para from '../../utilities/Para';


function News() {

// console.log(totalNewss.data)
  return (
    <div>
        <HeadingL label="Latest Lorem Lorem Lorem " />
        <Para label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos." />
<NewsCard></NewsCard>
    </div>
  )
}

export default News