import styles from '../page.module.css';
import Image from 'next/image';
import cantorImage from '/images/cantor-building.jpg';


export const metadata = {
    title: "Facilities",
    description: "Information for the Facilities",
  };

const Facilities = () =>{
    return (
        <div>
            <h1 className={styles.sectionTitles}>Facilities</h1>
        <div className={styles.facilitiesLayoutContainer}>
            <div className={styles.faciltiesCantorContainer}>
            <p>The College is located in the attractive and pleasantly refurbished Building. The building houses computing laboratories, and lecture/tutorial rooms. It has its own catering facilities and student work areas. There is also a car park to the back of the building.</p>
            <p>Our building has space of 9500m², houses over 240 staff and provides teaching space for more than 1600 students.</p>
            <h1><strong>Facilities include:</strong></h1>
            <ul className={styles.facilitiesList}>
            <li>wi-fi technology</li>
            <li>pool teaching rooms, including classrooms to teach from 25 - 80 students</li>
            <li>specialist faculty facilities</li>
            <li>a double height lecture theatre at first and second floor level</li>
            <li>dramatic three-storey glass open atrium</li>
            <li>meeting rooms</li>
            <li>office accommodation</li>
            <li>specialist IT facilities</li>
            <li>reception desk area</li>
            <li>catering outlet</li>
            <li>parking for disabled badge holders</li>
            <li>cycle racks</li>
            <li>gallery</li>
            </ul>
        </div>
        <div className={styles.faciltiesImagesContainer}>
        <Image
            src={cantorImage}
            alt="cantor"
            placeholder="blur"
            className="cantorImage"
            layout="intrinsic"
            />
        </div>
        </div>
        </div>
    );
}
export default Facilities;