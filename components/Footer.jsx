import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
            <Image src="/img/footer1.jpg" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
            <div className={styles.card}>
                <h3 className={styles.motto}>    
                KEEP YOUR FRIENDS CLOSE AND YOUR PIZZA CLOSER!
                </h3>
            </div>
            <div className={styles.card}>
                <h2 className={styles.title}>FIND OUTR RESTAURANTS</h2>
                <p className={styles.text}>
                    1654 R. Don Road #304.
                    <br /> NewYork, 85022
                    <br /> (602) 876 - 1010
                </p>
                <p className={styles.text}>
                    2365 K. Laquie Road #253.
                    <br /> NewYork, 85022
                    <br /> (602) 876 - 1010
                </p>
                <p className={styles.text}>
                    1614 E. Erwin St #104.
                    <br /> NewYork, 85022
                    <br /> (602) 876 - 1010
                </p>
                <p className={styles.text}>
                    1624 W. Caroll St #125.
                    <br /> NewYork, 85022
                    <br /> (602) 876 - 1010
                </p>
            </div>
                <div className={styles.card}>
                    <h2 className={styles.title}>WORKING HOURS</h2>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default Footer;