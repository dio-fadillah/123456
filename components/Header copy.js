import Link from 'next/link';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import styles from '../styles/landingPage.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const Header = () => {

  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-opacity-75">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FSW Group 1</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={styles.nav_item}>
                            <a className="nav-link active fw-bold " aria-current="page" href="#">HOME</a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className="nav-link text fw-bold" href="/gamelist">GAME LIST</a>
                        </li>
                        <li className={styles.nav_item}>
                            <a className="nav-link fw-bold" href="/profile">PROFILE</a>
                        </li>
                        <li className={styles.nav_item2}>
                            <a className="nav-link fw-bold" href="/register">SIGN UP</a>
                        </li>
                        <li className={styles.nav_item2}>
                            <a className="nav-link fw-bold" href="/login">LOGIN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    
  );
};

export default Header;
