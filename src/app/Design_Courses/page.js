import styles from '../page.module.css';
import Image from 'next/image';
import designImage from '/images/design.jpeg';


export const metadata = {
    title: "Design Courses",
    description: "Information about the Design Courses",
  };

const Design = () =>{
    return (
    <div>
        <h1 className={styles.sectionTitles}>Design Courses</h1>
            <div className={styles.businessContainer}>
            <Image
            src={designImage}
            alt="Design"
            placeholder="blur"
            className="designImage"
            layout="intrinsic"
            />
        <div className={styles.genericInfo}>
            <p>The College is an internationally connected creative community of diverse disciplines housed under one roof. We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
                The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; they provide you with space, tools and inspiration to develop your creative practice and a clear career path. You'll get expert teaching from active practitioners and researchers who will encourage you to adopt innovative and resourceful approaches that both perceive and create opportunities for better lives.x
                You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, cultural institutions, businesses and organisations.
            </p>
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
                <td>Graphic Design</td>
                <td>Undergraduate</td>
                <td>Develop your own creative and innovative approach to graphic design by challenging and exploring contemporary practices through a series of exciting and diverse projects.</td>
                <td>BA (Honours)</td>
                <td>W210</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Art and design</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Interior Architecture and Design</td>
                <td>Undergraduate</td>
                <td>Develop your own creative and sustainable approach to interior architecture and design by challenging and exploring contemporary practices through a series of exciting and diverse projects.</td>
                <td>BA (Honours)</td>
                <td>W250</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Art and design</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Jewellery, Materials and Design</td>
                <td>Undergraduate</td>
                <td>Develop your own creative and innovative approach to jewellery design, challenging and exploring contemporary practices through new technologies and craft techniques.</td>
                <td>BA (Honours)</td>
                <td>W721</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Art and design</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Game Design and Development</td>
                <td>Undergraduate</td>
                <td>Study a course with a distinctive, practice-based approach to games design &amp;ndash; gaining a diverse skill set and useful experience within the field.</td>
                <td>BA (Honours)</td>
                <td>A112</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Art and design</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow1}>
                <td>Product Design</td>
                <td>Undergraduate</td>
                <td>Develop a highly creative approach to producing innovative &#39;future-facing&#39; products by exploring and challenging design through a series of exciting and diverse projects.</td>
                <td>BSc (Honours)</td>
                <td>D009</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Art and design</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow2}>
                <td>Product Design</td>
                <td>Undergraduate</td>
                <td>Develop a creative and innovative approach to product design and service innovation by challenging and exploring contemporary practices through a series of exciting and diverse projects.</td>
                <td>BA (Honours)</td>
                <td>W240</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Art and design</td>
                <td>false</td>
            </tr>
            <tr className={styles.tableRow1}>
            <td>Digital Media Production</td>
                <td>Undergraduate</td>
                <td>Design and produce new media products in film, animation, interactive media, web, apps, VR, cross-media and games.</td>
                <td>BA (Honours)</td>
                <td>W212</td>
                <td>112</td>
                <td>2025/26</td>
                <td>Full-time</td>
                <td>3 / 4 Years</td>
                <td>false</td>
                <td>Art and design</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
    </div>
    </div>

    );
}
export default Design;