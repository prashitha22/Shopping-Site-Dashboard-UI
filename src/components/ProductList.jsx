import ProductCard from "./ProductCard";
import products from "../api";

const ProductList = () => {

  return (
    <>
      <div className="product-list">
        {
            products.map((item, index) => {
                return <ProductCard key={index} item={item}/>
            })
        }
      </div>
    </>
  );
};

export default ProductList;
