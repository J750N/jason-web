import styles from '../page.module.css';
import Image from 'next/image';
import computerImage from '/images/computer.jpeg';


export const metadata = {
    title: "Computing Courses",
    description: "Information about the Computing Courses",
  };

const Computing_Courses = () =>{
    return (
    <div>
        <h1 className={styles.sectionTitles}>Computer Courses</h1>
            <div className={styles.computerContainer}>
            <Image
            src={computerImage}
            alt="computer"
            placeholder="blur"
            className="computerImage"
            layout="intrinsic"
            />
        <div className={styles.genericInfo}>
            <p>The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. At undergraduate level, there are single BSc Honours Degree courses in Computing, Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.
            The College teaches undergraduate and postgraduate courses in a wide range of specialisms, including computer science, software development, information systems, networking and software engineering. It is at the heart of a passionate computing community, including student societies devoted to games development, digital forensics and programming.
            The courses are British Computer Society accredited and are highly relevant to modern industry. They are designed to prepare students for professional occupations in Computing and related fields. Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.</p>
        </div>
        </div>
    </div>
    );
}
export default Computing_Courses;