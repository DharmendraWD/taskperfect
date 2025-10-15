import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import HeadingL from '../../utilities/HeadingL';
import Para from '../../utilities/Para';


function News() {

  return (
    <div>
        <HeadingL label="News" />
        <Para label="Stay updated with the latest news and announcements from our company." />
<NewsCard></NewsCard>

    </div>
  )
}

export default News