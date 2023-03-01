import css from "../styles/Header.module.css";
import Logo from "../assets/logo-transparent-png.png";
import Link from "next/link";
import Image from "next/image";
import { UilShoppingBag } from "@iconscout/react-unicons";

export default function Header () {
    return(
             <div className={css.header}>
     <div className={css.logo}>
      <Link href="../">
     <Image src={Logo} alt="logo" width={80} height={70} />
     </Link>

     </div>
     <div className={css.rightSide}>
        <Link href = '/cart'>
          <div className={css.cart}>
            <UilShoppingBag size="35" color="#ffe398" />
            <div className={css.badge}>1</div>
            
          </div>
          </Link>
     </div>
     </div>
        
        
    )
}