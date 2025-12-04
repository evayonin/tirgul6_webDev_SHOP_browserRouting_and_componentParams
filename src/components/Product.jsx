function Product({product ,addToCart}){
    return(
        <div>
          <h2 style={{color:product.color}}>{product.name} - {product.price} $</h2>
          <button onClick={()=>addToCart(product)}>add to cart</button>
        </div>
    )
}export default Product;