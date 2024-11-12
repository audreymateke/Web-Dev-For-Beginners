const Products = {
    id: 1,
    name: "rice",
    price: 200,
    instock: true,
}


const user = {
    name: "Audrey",                    
    email: "audreymateke1@gmail.com",        
    address: {                            
      street: "123 Main St",
      city: "Springfield",
      zip: "62701"
    },
    orderHistory: []                      
  };
  
  const cart = [
    {
      productId: "A101",                  
      quantity: 2,                        
      price: 79.99,                       
      discountApplied: false             
    },
    {
      productId: "B202",
      quantity: 1,
      price: 59.99,
      discountApplied: true
    }
  ];

  const order = {
    orderId: "ORD1001",                   
    items: [                             
      {
        productId: "A101",
        quantity: 2,
        price: 79.99
      }
    ],
    totalAmount: 159.98,                  
    status: "Paid"                        
  };

  function addToCart(productId, quantity) {
    const product =  b202; 
    
    if (product.inStock) {
      const cartItem = {
        productId: productId,
        quantity: quantity,
        price: product.price,
        discountApplied: false
      };
      cart.push(cartItem);
    } else {
      console.log("Product is out of stock.");
    }
  }
  
  function removeFromCart(productId) {
    const index = cart.findIndex(item => item.productId === productId);
    
    if (index !== -1) {
      cart.splice(index, 1);
    } else {
      console.log("Product not found in cart.");
    }
  }

  function calculateCartTotal() {
    let total = 0;
    
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    
    return total;
  }
  


