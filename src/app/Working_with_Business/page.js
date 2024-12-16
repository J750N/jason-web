import styles from '../page.module.css';;
import Image from 'next/image';
import businessImage from '/images/business.png';

export const metadata = {
    title: "Working with business",
    description: "Information about working with business",
  };

const Working_with_Business = () =>{
    return (
    <div>
        <h1 className={styles.sectionTitles}>Working with Business</h1>
      <div className={styles.businessContainer}>
        <Image
          src={businessImage}
          alt="Business"
          placeholder="blur"
          className="businessImage"
          layout="intrinsic"
        />
      <div className={styles.businessInfo}>
        <p><strong>Partner with Cantor College:Unlock Expertise, Innovation, and Growth</strong> At Cantor College, we believe in the power of collaboration between education and industry. 
          Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, 
          innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.</p>
      </div>
        </div>
          <div className={styles.serviceContainer}>
            <h1 className={styles.sectionTitles}>Our Services</h1>
              <div className={styles.serviceInfo}>
                <p><strong>1. Custom Training and Development Programs</strong> Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation. We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.</p>
                <p><strong>2. Research and Development Partnerships</strong> Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you.</p>
                <p><strong>3. Design and Technology Consultancy</strong> Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects, from web development and software engineering to product design and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business.</p>
                <p><strong>4. Internships and Graduate Recruitment</strong> Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment services can connect you with top talent in computing, design, and technology, providing you with candidates who are equipped with the latest industry knowledge and practical experience.</p>
                <p><strong>5. Event Hosting and Sponsorship</strong> Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community.</p>
            <h1 className={styles.sectionTitles}>Why Partner with Cantor College?</h1>
          <ul>
            <li className={styles.partnerInfo}><strong>Cutting-Edge Expertise:</strong> Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design.</li>
            <li><strong>Innovation at the Core:</strong> We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions.</li>
            <li><strong>Tailored Solutions:</strong> We understand that every business is unique. Our services are customized to meet your specific objectives and challenges.</li>
            <li><strong>Future-Ready Talent:</strong> Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills.</li>
          </ul>
        </div>
        </div>
        <div className={styles.GITContainer}>
          <h1 className={styles.sectionTitles}>Get In Touch</h1>
            <p><strong>Ready to explore how Cantor College can help your business grow? Contact our Business Services team today to discuss your needs and learn more about our offerings. We look forward to working with you to achieve your business goals.</strong></p>
        </div>
      </div>
    );
}
export default Working_with_Business;