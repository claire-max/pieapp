import Image from "next/image";
import css from "../styles/Services.module.css";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
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
            <Image src={s1} alt="s1" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Easy to Order</span>
          <span>Only a few steps for ordering</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s2} alt="s1" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Fast Delivery</span>
          <span>Delivery that is always on time</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image src={s3} alt="s1" objectFit="cover" layout="intrinsic" />
          </div>
          <span>Best Quality</span>
          <span>Not only fast, but the highest quality</span>
        </div>
      </div>
      </div>
    </>
  );
}
