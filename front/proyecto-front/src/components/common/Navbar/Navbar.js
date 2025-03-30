import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = React.useState('usuario');

  return (
    <nav className={styles.Navbar}>
      <div className={styles.Navbar_content}>
        <div className={styles.Navbar_menu}>
          <div className={styles.Navbar_menu_item}>
            Logo
          </div>
          <div className={styles.Navbar_menu_item}>
            <Link to="/home">Home</Link>
          </div>
          <div className={styles.Navbar_menu_item}>
            <Link to="/recommendation-form">Recomendaciones</Link>
          </div>
          <div className={styles.Navbar_menu_item}>
            <Link to="/recommendation-history">Historial</Link>
          </div>
        </div>
        <div className={styles.Navbar_account}>
          <div className={styles.Navbar_account_item}>
            {user} | Cuenta
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
