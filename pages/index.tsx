import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}
const Index = (props: IIndexProps) => {
  return (
      
    <div className="app">
       <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="ST_YjdkNGU4ZGMtYzdmYi00NzRmLTgyMjktNmZkNWVmMjBiNzVhNjM3MjYyOTQ4NTI2NTEyNTkw" id="snipcart"></script>
        <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>   
      <Header />
      <main className="main">
        <img src="/static/aquarium.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>REDISCOVER</h3>
          <h2>Fishkeeping</h2>
          <p>An <strong>exclusive collection of bettas</strong> available for everyone.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
        {id: "bong1", name: "Black Leaf ELITE Cylinder 6-arm Perc Ice Bong | No Carb Hole", price: 10.00, image: "../static/bong.jpg", description: "An affordable straight perc ice bong with lots of diffusion"
    } as IProduct,
    {id: "bong2", name: "Black Leaf ELITE Cylinder 6-arm Perc Ice Bong | No Carb Hole", price: 10.00, image: "../static/bong.jpg", description: "An affordable straight perc ice bong with lots of diffusion"
} as IProduct,
{id: "bong3", name: "Black Leaf ELITE Cylinder 6-arm Perc Ice Bong | No Carb Hole", price: 10.00, image: "../static/bong.jpg", description: "An affordable straight perc ice bong with lots of diffusion"
} as IProduct,
{id: "bong4", name: "Black Leaf ELITE Cylinder 6-arm Perc Ice Bong | No Carb Hole", price: 10.00, image: "../static/bong.jpg", description: "An affordable straight perc ice bong with lots of diffusion"
} as IProduct,
    ]
  }
}

export default Index