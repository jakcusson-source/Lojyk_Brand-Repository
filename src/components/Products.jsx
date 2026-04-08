import React from "react";
import BuyButton from "./BuyButton";

const products = [
  { id: 1, name: "T-shirt LOJYK", price: "$35", image: "link-to-image1.jpg" },
  { id: 2, name: "Hoodie LOJYK", price: "$60", image: "link-to-image2.jpg" },
  { id: 3, name: "Casquette LOJYK", price: "$25", image: "link-to-image3.jpg" },
];

export default function Products() {
  return (
    <section style={{padding: "50px 20px", background: "#000", color: "#fff", textAlign: "center"}}>
      <h2 style={{fontSize: "2.5rem", marginBottom: "40px"}}>Nos Produits</h2>
      <div style={{display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap"}}>
        {products.map(product => (
          <div key={product.id} style={{width: "250px", background: "#111", padding: "20px", borderRadius: "10px"}}>
            <img src={product.image} alt={product.name} style={{width: "100%", borderRadius: "10px"}} />
            <p style={{margin: "15px 0 5px"}}>{product.name}</p>
            <p style={{margin: "5px 0 15px", fontWeight: "bold"}}>{product.price}</p>
            <BuyButton
  productId={product.id}
  name={product.name}
  price={product.price}
/>
          </div>
        ))}
      </div>
    </section>
  );
}
