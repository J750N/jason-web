import styles from './page.module.css';
import Image from 'next/image';
import cityMapImage from '/images/citymap.jpg';
import aboutUsImage from '/images/about-us.jpeg';


export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function Home() {
  return (
    <>
      <h1 className={styles.sectionTitles}>About Us</h1>
      <div className={styles.aboutUsContainer}>
        <Image
          src={aboutUsImage}
          alt="About us"
          placeholder="blur"
          className="aboutUsImage"
          layout="intrinsic"
        />
      <div className={styles.aboutUsInfo}>
        <p>Cantor College was established in 1989 to specialize in Computing and Design.
        At Cantor College, we want to give students the education they need to 
        achieve their career aims, leaving them equipped with the knowledge,
        skills and experience to succeed. Cantor College gives you the 
        opportunities that can give you the edge when you enter the world of work,
        Through our teaching and our links to some of the world's leading researchers and employers.
        Our students have gone on to successful careers in a wide range of industries across the globe.
        Whatever your ambitions, our learning and support can help to get the most out of your time with 
        Cantor College, both as a student and in your future career.</p>
        </div>
      </div>

      <h1 className={styles.sectionTitles}>How to Find Us</h1>
      <div className={styles.cityMapContainer}>
        <Image
          src={cityMapImage}
          alt="City Map"
          placeholder="blur"
          className="cityMapImage"
          layout="intrinsic" /* Automatically adjusts size */
        />
        <div className={styles.cityMapInfo}>
          <p><strong>Cantor College</strong></p>
          <p><strong>Main Street</strong></p>
          <p><strong>Sheffield</strong></p>
          <p><strong>SC4 2BB</strong></p>
          <p><strong>Tel:(01321) 2340 235</strong></p>
          <p><strong>Fax: (01321) 2340 236</strong></p>
          <p><strong>Email: info@cantorcollege.ac.uk</strong></p>
        </div>
      </div>
    </>
  );
}
