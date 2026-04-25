import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  // const stars =
  //   "★".repeat(Math.floor(product.rating)) + (product.rating % 1 ? "½" : "");
  const stars =
    "★".repeat(Math.floor(product.rating || 0)) +
    ((product.rating || 0) % 1 ? "½" : "");

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div className={styles.imgBox} style={{ background: product.colorBg }}>
        {/* <span className={styles.emoji}>{product.emoji}</span> */}
        <img
          src={product.image}
          alt={product.name}
          className={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "18px 18px 0 0",
          }}
          style={{ width: "32%", objectFit: "cover", borderRadius: "18px 18px 0 0" }}
        />

        <div className={styles.badge}>{product.badge}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{product.name}</div>
        {/* <div className={styles.desc}>{product.desc.substring(0, 82)}…</div> */}

        <div className={styles.desc}>
          {(product.desc || "").substring(0, 82)}…
        </div>
        <div className={styles.footer}>
        <div className={styles.rating}>
          <span className={styles.stars}>{stars}</span>
          <span className={styles.count}>
            ({product.reviews.toLocaleString("en-IN")})
          </span>
        </div>
          {/* <div className={styles.price}>
            {product.price}
            <sub>/{product.unit}</sub>
          </div> */}


          {/* <div className={styles.price}>
            {product.price || "—"}
            <sub>/{product.unit || ""}</sub>
          </div> */}

          

          <button
            className={styles.detailBtn}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${product.id}`);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
