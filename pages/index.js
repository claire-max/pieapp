import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { client } from "../lib/client";
import Menu from "../components/Menu";

export default function Home({pizzas}) {


  return (
    <Layout>
      <div>
        <Head>
          <title>Pie</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
          
        </Head>
        {/* body */}
        <main>
        <Hero/> 
        <br/>
        <Services/> 
        <Menu pizzas={pizzas}/>      
        </main>
      </div>
      </Layout>
  );
}


export const getServerSideProps = async () => {
  const query = '*[_type == "pizza" && !(_id in path("drafts.**"))]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas,
    },
  };
};



