import '../App.css';
import '../Styles/Shop.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

let productlist = null

function Product({ match }) {
  const id = match.params.productId
  const [product, setProduct] = useState("");
  let product_entity = null
  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/v1/products/${id}`)
        .then(response => {
            console.log(response);
            setProduct(response.data);
         })
  }, [`http://localhost:3000/api/v1/products/${id}`])

if (product) {
  product_entity = 
    <div className="product" id='product'>

      <div className="item-brief">
        <h1>{product[0].name}</h1> 
        <div className="img-container">
          <img alt={product[0].img} src={product[0].img} />
        </div>
      </div>
        
      <div className="item-chara">
      <h3 className="product-titles">Prix : <span className="color-title">{product[0].price} €</span> </h3>
        <h3 className="product-titles">Quantité restante : <span className="color-title">{product[0].quantity}</span></h3>
        <h3 className="product-titles">Tags : <span className="product-category badge badge-secondary">{product[0].category}</span></h3>
        <h3 className="product-titles">Description : </h3>
        <p className="item-desc">{product[0].description}</p>
      </div>

    </div>
}
return (
   
    <div className="App">
    {product_entity}

    </div>

  );
}

function Products() {

  const [products, setProducts] = useState("");

  
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/products')
        .then(response => {
            console.log(response);
            setProducts(response.data);
         })
  }, ['http://localhost:3000/api/v1/products'])
  
  const [cart, setCart] = useState([]);

function addItem(e) {
  const item = e.target.value;
  setCart(cart => [...cart, item])
}

if(products) {
  productlist = 
      <div className="items-container">
      {products.map((product) => <div className="item-container" key={product.id}>
      <img className="product-img" src={product.img} alt={product.name}  />
      <div className="item-options">
      <AnchorLink className="anchor" href='#product' ><Link  className="link" to={`/products/${product.id}`}>{product.name}</Link></AnchorLink>
      <p >  <span className="item-category badge badge-secondary">{product.category}</span> </p>
      <h2>{product.price} €</h2>
      </div>

      <button  value={product.name} onClick={addItem} type="button" class=" item-button btn btn-primary">Add to Cart</button>
      </div>

      )}
    </div>

} 

  return (
   
    <div className="App">
      <div className="shop-container">
          {productlist}
          <div className="cart">
          <div className="cart-title">
            <h1>Cart <span role="img" aria-label="shopping bag">🛍️</span></h1>
          </div>
          <div>
            {cart.map(item => <div  className="item-cart" key={item}> {item} </div>)}
          </div>
          </div>
      </div>
      <Route path={`/products/:productId`} component={Product} />

    </div>

  );
}

export default Products;