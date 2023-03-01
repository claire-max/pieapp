import css from '../styles/Footer.module.css'
import {BsGithub, BsTwitter, BsFacebook, BsLinkedin,BsPinterest} from 'react-icons/bs';
import Image from 'next/image'
import Logo from '../assets/logo-transparent-png.png'

export default function Footer (){
    return(
        <div className={css.container}>
        <br/>
        <div className={css.social}> 
             <a href="https://github.com/claire-max"><BsGithub size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a> 
             <a href="#"><BsTwitter size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
            <a href="#"><BsFacebook size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
             <a href="#"><BsLinkedin size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
             <a href="#"><BsPinterest size={30} style={
            {color:"#fff", marginRight:"1rem" }}/></a>
      </div>
        <div className={css.logo}>
<Image src ={Logo} alt='' width={100} height={100}/>
</div>
<br/>
       </div> 
    )

}