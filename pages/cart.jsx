import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
    return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.trTitle}>
                <th>Products</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Qantity</th>
                <th>Total</th>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image 
                            src="/img/pizza.jpg" 
                            layout="fill" 
                            objectFit="contain" 
                            alt="" />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>Veggie</span>
                    </td>
                    <td>
                    <span className={styles.extras}>Double toppings, spizy sauce</span> 
                    </td>
                    <td>
                    <span className={styles.price}>$19.90</span>
                    </td>
                    <td>
                    <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                    <span className={styles.total}>$39.80</span>
                    </td>
                </tr>
            </table>
        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>$79.60
            </div>
            <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
        </div>
    </div>
    );
}

export default Cart;