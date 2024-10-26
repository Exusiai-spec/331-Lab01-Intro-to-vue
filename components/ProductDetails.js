const productDetails = {
    props: ['details'],
    template: `
      <div class="product-details">
        <h2>Product Details</h2>
        <ul>
          <li v-for="detail in details" :key="detail">{{ detail }}</li>
        </ul>
      </div>
    `
  };
  
  export default ProductDetails;