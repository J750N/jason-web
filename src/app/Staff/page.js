import styles from '../page.module.css';
import Image from 'next/image';
import staffImage from '/images/staff.jpg';

export const metadata = {
    title: "Staff",
    description: "Information for Staff",
  };

const Staff = () =>{
    return (
     <div>
        <h1 className={styles.sectionTitles}>Information For Staff</h1>
        <div className={styles.stafflayout}>
            <div className={styles.staffImageContainer}>
                <Image
                src={staffImage}
                alt="staff"
                placeholder="blur"
                className="staffImage"
                layout="intrinsic"
                />
            </div>
            <div>
                <ul className={styles.staffInfo}>
                    <li><strong>News: </strong>Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one day event.</li>
                    <li><strong>Academic Registry: </strong>For academic regulations, assessment, awards, student records and course validation.</li>
                    <li><strong>Catering Services: </strong>Contact the Catering Services regarding on and off-site catering.</li>
                    <li><strong>Financial Services: </strong>The financial team based on the 2nd Floor are responsible for all areas of student finance as well as College budgeting.</li>
                    <li><strong>Information Systems Services: </strong>The ISS team delivers the College’s computing facilities including all hardware and software. They also run the staff helpdesk.</li>
                    <li><strong>Marketing Services: </strong>The Marketing Team will help promote events and new courses. They will help with press release preparation.</li>
                    <li><strong>Personnel Services: </strong>All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.</li>
                    <li><strong>Facilities: </strong>The facilities are responsible for the general care and maintenance of the College. All enquiries via the main helpdesk.</li>
                </ul>
            </div>
        </div>
     </div>
    );
}
export default Staff;
