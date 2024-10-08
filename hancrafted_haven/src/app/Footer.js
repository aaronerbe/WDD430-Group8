import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>&copy; {new Date().getFullYear()} Handcrafted Haven. All rights reserved.</p>
      </div>
      <div>
        <nav>
          <ul className={styles.nav}>
            <li><Link href="/"><span>Home</span></Link></li>&nbsp;&nbsp;&nbsp;
            <li><Link href="/about"><span>About</span></Link></li>&nbsp;&nbsp;&nbsp;
            <li><Link href="/contact"><span>Products</span></Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}