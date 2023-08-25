/* eslint-disable react/prop-types */
import useFetch from "../../useFetch";

const Electronics = ({openModal}) => {

    const {data: products, error, loading} = useFetch('https://fakestoreapi.com/products/category/electronics')


    return ( 
        <>



<div className="products">

  {loading && <div className="loader"></div>}

  {error && <div className="error">{error.message}</div>}

  {products &&
    products.map((product, index) => (
      <div
        className="prod-div"
        key={product.id}
        onClick={() => openModal(product, index)}
      >
        <div className="prod-img">
          <img src={product.image} alt="" />
        </div>
        <div className="prod-title">{product.title}</div>
      </div>
    ))}
</div>

    
        </>    
     );
}
 
export default Electronics;