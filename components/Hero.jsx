import css from "../styles/Hero.module.css";
import React from 'react'

const Hero = () => {
  

  return (
   
    <video className={css.container} autoPlay loop muted>
    <source
      src="https://player.vimeo.com/external/278954650.sd.mp4?s=ceb458282b284a14db9dca3f234bb109cf3e3818&profile_id=164"
      
      type="video/mp4"
      
    />
  </video>
 
);
}
export default Hero;