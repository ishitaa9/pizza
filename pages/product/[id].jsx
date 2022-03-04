import styles from '../../styles/Product.module.css';
import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';


const Product = ({pizza}) => {
    const [size, setSize] = useState(0);
    // const pizza = {
    //     id: 1,
    //     img: "/img/pizza.jpg",
    //     name: "Veggie Paradise",
    //     price : [19.9, 23.9, 27.9],
    //     desc: "homemade tomato sauce, mozerella cheese and fresh vegetables."
    // };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" objectFit="contain" alt="" />
            </div>
            </div>
            <div className={styles.right}>
                <h2 className={styles.title}>{pizza.title}</h2>
                <span className={styles.price}>${pizza.prices[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h4 className={styles.choose}>Choose your size</h4>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={()=>setSize(0)}>
                    <Image src="/img/size.png" layout="fill" alt="" />
                    <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(1)}>
                    <Image src="/img/size.png" layout="fill" alt="" />
                    <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={()=>setSize(2)}>
                    <Image src="/img/size.png" layout="fill" alt="" />
                    <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h4 className={styles.choose}>Choose additional toppings</h4>
                <div className={styles.toppings}>
                    {pizza.extraOptions.map((option) => (
                    <div className={styles.option} key={option._id}>
                        <input type="checkbox" id="double" name="double" className={styles.checkbox} />
                        <label htmlFor="double">{option.text}</label>
                    </div>
                    ))}
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return{
      props: {
        pizza: res.data,
      },
    };
  };


export default Product;