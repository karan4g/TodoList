import "../styles/index.css"
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";


import Container from '@mui/material/Container';

export default function App({ Component, pageProps }) {
    
  
    return (
        <Container maxWidth="false">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <Header />
        <main>
                <Component {...pageProps} /> 
  
                </main>

<footer></footer>
</Container>
    )
  }
  
  
  
  
  
  

  
  
  