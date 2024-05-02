import React from 'react'
import imgBanner from '../assets/img-projet/imgAccueil.png';
function Banner() {
  return (
    <div className="banner">
                <img src={imgBanner} className='bannerImg' alt="image de la bannière"/>
                <div className="bannerFilter"></div>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
  )
}

export default Banner