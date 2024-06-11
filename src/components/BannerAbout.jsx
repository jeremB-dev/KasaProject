
import imgBannerAbout from '../assets/img-projet/imgAbout.png';

function BannerAbout() {
  return (
    <div className="banner">
                <img src={imgBannerAbout} className='bannerImg' alt="image de la bannière"/>
                <div className="bannerFilterAbout"></div>
            </div>
  )
}

export default BannerAbout