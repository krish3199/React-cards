import React, { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  let products = [
    {
      "productId": 1,
      "img": "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?cs=srgb&dl=pexels-pixabay-356056.jpg&fm=jpg",
      "price": 29999,
      "category": "Electronics",
      "stock": 50,
      "ratings": 4.5,
      "tags": ["mobile", "android", "touchscreen"],
      "dimensions": { "length": 14.5, "width": 7.2, "height": 0.8 }
    },
    {
      "productId": 2,
      "img": "https://lwks.com/hubfs/Audio-min.webp",
      "price": 6999,
      "category": "Audio",
      "stock": 150,
      "ratings": 4.7,
      "tags": ["bluetooth", "noise-cancelling", "wireless"],
      "dimensions": { "length": 15, "width": 18, "height": 7 }
    },
    {
      "productId": 3,
      "img": "https://static.investindia.gov.in/s3fs-public/2021-04/Footwear%20pic.jpg",
      "price": 4999,
      "category": "Footwear",
      "stock": 120,
      "ratings": 4.3,
      "tags": ["sports", "men", "comfortable"],
      "dimensions": { "length": 30, "width": 10, "height": 12 }
    },
    {
      "productId": 4,
      "img": "https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.jpg?s=612x612&w=0&k=20&c=blm3IyPyZo5ElWLOjI-hFMG-NrKQ0G76JpWGyNttF8s=",
      "price": 3500,
      "category": "Home Appliances",
      "stock": 35,
      "ratings": 4.1,
      "tags": ["kitchen", "coffee", "automatic"],
      "dimensions": { "length": 25, "width": 15, "height": 30 }
    },
    {
      "productId": 5,
      "img": "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:3000,ch:1687,q:80,w:3000/z37mwDVckwJURH4Ho5KRYW.jpeg",
      "price": 1200,
      "category": "Bags",
      "stock": 200,
      "ratings": 4.0,
      "tags": ["travel", "waterproof", "lightweight"],
      "dimensions": { "length": 45, "width": 30, "height": 12 }
    },
    {
      "productId": 6,
      "img": "https://www.uxdesigninstitute.com/blog/wp-content/uploads/2023/10/273_designing_for_wearables_illustration_blog-2-1.png",
      "price": 10999,
      "category": "Wearables",
      "stock": 80,
      "ratings": 4.6,
      "tags": ["fitness", "bluetooth", "water-resistant"],
      "dimensions": { "length": 5, "width": 4, "height": 1.5 }
    },
    {
      "productId": 7,
      "img": "https://innovationmanagement.se/wp-content/uploads/2009/09/tips-for-innovative-ideas-from-electronics-technology-industry.jpg",
      "price": 24999,
      "category": "Electronics",
      "stock": 42,
      "ratings": 4.4,
      "tags": ["4K", "smart", "LED"],
      "dimensions": { "length": 110, "width": 15, "height": 65 }
    },
    {
      "productId": 8,
      "img": "https://img.freepik.com/premium-photo/top-view-office-desk-workspace_160097-385.jpg?semt=ais_hybrid&w=740&q=80",
      "price": 2999,
      "category": "Computer Accessories",
      "stock": 90,
      "ratings": 4.2,
      "tags": ["gaming", "mechanical", "LED-backlit"],
      "dimensions": { "length": 44, "width": 12, "height": 4 }
    },
    {
      "productId": 9,
      "img": "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?cs=srgb&dl=pexels-lum3n-44775-322207.jpg&fm=jpg",
      "price": 899,
      "category": "Accessories",
      "stock": 180,
      "ratings": 3.9,
      "tags": ["UV protection", "fashion", "unisex"],
      "dimensions": { "length": 14, "width": 6, "height": 4 }
    },
    {
      "productId": 10,
      "img": "https://www.kitchen-retro.com/wp-content/uploads/2023/06/Home-Appliances.jpg",
      "price": 1599,
      "category": "Home Appliances",
      "stock": 100,
      "ratings": 4.3,
      "tags": ["kitchen", "boil", "automatic shutoff"],
      "dimensions": { "length": 23, "width": 18, "height": 24 }
    }
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className="mode-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div className="products-grid">
        {products.map((e) => (
          <div key={e.productId} className="product-card">
            <img src={e.img} alt={e.category} className="product-img" />
            <div className="product-info">
              <h3 className="product-title">{e.category}</h3>
              <p className="product-category">{e.category}</p>
              <p className="product-price">₹{e.price}</p>
              <p className="product-rating">⭐ {e.ratings}</p>
              <p className={`product-stock ${e.stock > 0 ? "in-stock" : "out-stock"}`}>
                {e.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              <button className="product-btn" disabled={e.stock === 0}>
                {e.stock > 0 ? "Add to Cart" : "Sold Out"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
