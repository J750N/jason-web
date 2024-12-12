import Image from 'next/image'
import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Footer';
import styles from './page.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
        <header>
          <Navbar/>
        </header>
        {children}
        </div>
        <footer>
        <Footer />
        </footer>
      </body>
    </html>
  );
}