import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import Features from '../components/Features';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css'; 

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="The Best in Town!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <PizzaList pizzaList={pizzaList}/>
      <Image src="/img/pizza1.jpg" alt="" layout='fill'/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props: {
      pizzaList: res.data,
    },
  };
};
