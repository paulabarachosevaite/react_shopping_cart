import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import Hero from "../../components/hero/Hero";
import {products} from "../../products";
import "./home.css";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product.product}
            price={product.price}
            image={product.image}
            description={product.description}
            sizes={product.sizes}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
