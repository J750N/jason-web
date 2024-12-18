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
        <div style={{ overflowX:'auto'}}>
        <table className={styles.table}>
            <thead>
            <tr className={styles.tableHeader}>
                <th>CourseTitle</th>
                <th>CourseType</th>
                <th>CourseSummary</th>
                <th>CourseAwardName</th>
                <th>UcasCode</th>
                <th>UcasPoints</th>
                <th>YearOfEntry</th>
                <th>ModeOfAttendance</th>
                <th>StudyLength</th>
                <th>HasFoundationYear</th>
                <th>CourseSubject</th>
                <th>NoLongerRecruiting</th>
            </tr>
            </thead>
            <tbody>
            <tr className={styles.tableRow1}>
                <td>Computing</td>
                <td>Undergraduate</td>
                <td>Learn how to code, configure and integrate applications, databases and systems architectures which form the pillars of modern technology in today&amp;rsquo;s world.</td>
                <td>BSc (Honours)</td>
                <td>G504</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Computer Networks</td>
                <td>Undergraduate</td>
                <td>This course includes general computing skills in programming, cyber security, information systems, management and professionalism in a technical environment.</td>
                <td>BSc (Honours)</td>
                <td>G420</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Cyber Security with Forensics</td>
                <td>Undergraduate</td>
                <td>Prepare for a career in cyber security by designing security systems, identifying evidence of cybercrimes and acting as detectives in a digital world.</td>
                <td>BSc (Honours)</td>
                <td>F4G4</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Computer Science for Games</td>
                <td>Undergraduate</td>
                <td>Create the software powering the next generation of blockbuster games.</td>
                <td>BSc (Honours)</td>
                <td>G611</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Software Engineering</td>
                <td>Undergraduate</td>
                <td>Gain experience in the whole software development process and prepare for a career in software engineering.</td>
                <td>BEng (Honours)</td>
                <td>G600</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Computer Science</td>
                <td>Undergraduate</td>
                <td>Gain a solid foundation in the core areas of computer science, including programming, algorithms, data structures and software development.</td>
                <td>BSc (Honours)</td>
                <td>G400</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Computing with Foundation Year</td>
                <td>Undergraduate</td>
                <td>Gain a degree in computing&amp;nbsp;&amp;ndash; with an initial foundation year to prepare for the course.</td>
                <td>BSc (Honours)</td>
                <td>A020</td>
                <td>80</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>4/5 Years</td>
                <td>true</td>
                <td>Computing</td>
                <td>true</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Cyber Security with Forensics with Foundation Year</td>
                <td>Undergraduate</td>
                <td>Gain a degree in cyber security with forensics, with an initial foundation year to prepare for the course.</td>
                <td>BSc (Honours)</td>
                <td>A023</td>
                <td>80</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>4/5 Years</td>
                <td>true</td>
                <td>Computing</td>
                <td>true</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Software Engineering with Foundation Year</td>
                <td>Undergraduate</td>
                <td>Gain a degree in software engineering, with an initial foundation year to prepare for the course.</td>
                <td>BEng (Honours)</td>
                <td>A017</td>
                <td>80</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>4/5 Years</td>
                <td>true</td>
                <td>Computing</td>
                <td>true</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Cyber Security with Foundation Year</td>
                <td>Undergraduate</td>
                <td>Gain a degree in cyber security &amp;ndash; with an initial foundation year to prepare for the course.</td>
                <td>BSc (Honours)</td>
                <td>A093</td>
                <td>80</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>4/5 Years</td>
                <td>true</td>
                <td>Computing</td>
                <td>true</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Information Technology with Business Studies with Foundation Year</td>
                <td>Undergraduate</td>
                <td>Gain a degree in information technology with business studies, with an initial foundation year to prepare for the course.</td>
                <td>BSc (Honours)</td>
                <td>A019</td>
                <td>80</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>4/5 Years</td>
                <td>true</td>
                <td>Computing</td>
                <td>true</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Computer Science with Foundation Year</td>
                <td>Undergraduate</td>
                <td>Gain a degree in computer science, with an initial foundation year to prepare for the course.</td>
                <td>BSc (Honours)</td>
                <td>A022</td>
                <td>80</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>4/5 Years</td>
                <td>true</td>
                <td>Computing</td>
                <td>true</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Computer Science for Games with Foundation Year</td>
                <td>Undergraduate</td>
                <td>Gain a degree in computer science for games, with an initial foundation year to prepare for the course.</td>
                <td>BSc (Honours)</td>
                <td>A092</td>
                <td>80</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>4/5 Years</td>
                <td>true</td>
                <td>Computing</td>
                <td>true</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Business and Digital Technology with Foundation Year</td>
                <td>Undergraduate</td>
                <td>Gain a degree in business and digital communications technology &amp;ndash; with an initial foundation year to prepare for the course.</td>
                <td>BSc (Honours)</td>
                <td>A018</td>
                <td>80</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>4/5 Years</td>
                <td>true</td>
                <td>Computing</td>
                <td>true</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Computing</td>
                <td>Postgraduate</td>
                <td>A course enhanced by real-life project experience for non-computing graduates wanting to pursue a career in the IT industry.</td>
                <td>MSc</td>
                <td></td>
                <td></td>
                <td>2025/26</td>
                <td>Part-time</td>
                <td>3 Years</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Computing and Informatics</td>
                <td>Postgraduate</td>
                <td>Conduct a period of intensive, supervised study where you critically investigate and evaluate an approved topic and make an original contribution to knowledge.</td>
                <td>MPhil</td>
                <td></td>
                <td></td>
                <td>2025/26</td>
                <td>Part-time</td>
                <td>3 Years</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Cyber Security</td>
                <td>Postgraduate</td>
                <td>Develop your skills and academic knowledge in the growing field of cyber security through academic teaching, industry input and practical skills development.&amp;nbsp;&lt;strong&gt;Currently applications for this course are only open to home students.&lt;/strong&gt;</td>
                <td>MSc</td>
                <td></td>
                <td></td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>1 Year</td>
                <td>false</td>
                <td>Computing</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
    );
}
export default Computing_Courses;