import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className={styles.container}>
        <div className={styles.item}>
        <div className={styles.callButton}>
            <Image src="/img/phone-icon.jpg" alt="phone-icon" width="32" height="32"/>
        </div>
        <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW</div>
        <div className={styles.text}>01628827133</div>
        </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>Homepage</li>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                {/* <Image src="" alt="" width="160px" height="96px" /> */}
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <div className={styles.item}>
            <div className={styles.cart}>
            <Image src="/img/cart.jpg" alt="" width="90" height="90" />
            <div className={styles.counter}>2</div>
            </div>
        </div>
        </div>
    )
}

export default Navbar;