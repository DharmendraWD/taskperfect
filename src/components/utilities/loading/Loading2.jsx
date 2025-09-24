import React from 'react'
import styles from './Loading2.module.css';
import loadingImgGIF from '../../../assets/img/promoquityArow.gif'

function Loading2() {
  return (
  <div className="loadingGif">
    <img className='w-[300px]' src={loadingImgGIF} alt="" />
  </div>

  )
}

export default Loading2