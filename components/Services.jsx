import Image from "next/image";
import css from "../styles/Services.module.css";
import order from "../assets/order1.png";
import del from "../assets/del.png";
import eating from "../assets/eating.png";
export default function Services() {
  return (
    <>
    <div className={css.container}>
      <br/>
      <div className={css.heading}>
        <span>WHAT WE SERVE</span>
        <span>Your Favorite Food</span>
        <span>Delivery Partner</span>
      </div>

      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={order} alt="order" objectFit="cover" layout="intrinsic"/>
          </div>
          <span>Easy to Order</span>
          <span>Only a few steps for ordering</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={del} alt="del" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Fast Delivery</span>
          <span>Delivery that is always on time</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={eating} alt="eating" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Best Quality</span>
          <span>Not only fast, but the highest quality</span>
        </div>
      </div>
      </div>
    </>
  );
}
