import React from "react";
import BuyButton from "./BuyButton";

export default function Hero() {
  return (
    <section style={{
      background: "#111", 
      color: "#fff", 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center",
      textAlign: "center"
    }}>
      <h1 style={{fontSize: "4rem", letterSpacing: "0.2em"}}>LOJYK TEST</h1>
      <p style={{fontSize: "1.5rem", margin: "20px 0"}}>Streetwear minimaliste & audacieux</p>
      <BuyButton text="SHOP NOW" style={{padding: "15px 30px", fontSize: "1rem"}} />
    </section>
  );
}
