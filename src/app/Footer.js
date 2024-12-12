import styles from './page.module.css'

export default function Footer() {
    return (
    <footer className={styles.footer}>
    <div className={styles.footerContainer}>
    <h1 className={styles.sectionTitles}>Contact Us</h1>
        <p>Email: info@cantorcollege.ac.uk</p>
        <p>Tel:(01321) 2340 235</p>
        <p>Fax: (01321) 2340 236</p>
        <p>&copy; {new Date().getFullYear()}</p>  
    </div>    
    </footer>
    );
  }