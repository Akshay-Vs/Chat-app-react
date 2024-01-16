import React, { useRef, useState } from "react";
import "./ProductCard.scss";

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
  url: string;
};

interface ProductCardProps {
  theme: string;
  products: Product[];
  handleMessage: (type: string, content: Product) => void;
}

const ProductCard = ({ theme, products, handleMessage }: ProductCardProps) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isClick, setIsClick] = useState(true);
  const slider = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDown(true);
    setStartX(e.pageX - slider.current!.offsetLeft);
    setScrollLeft(slider.current!.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);

  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) {
      setIsClick(true);
      return;
    }
    setIsClick(false);
    e.preventDefault();
    const x = e.pageX - slider.current!.offsetLeft;
    const walk = (x - startX) * 2.8;
    slider.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="product-card"
      ref={slider}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {products.map((product: Product, index:number) => (
        <div
          className={`product-card__container ${
            theme == "dark"
              ? "product-card__container--dark"
              : "product-card__container--light"
          }`}
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            isClick && handleMessage("product", product);
          }}
        >
          <img
            className="product-card__product-image"
            src={product.image}
            alt={product.name}
          />

          <div className="product-card__product-name">{product.name}</div>

          <div className="product-card__product-description">
            {product.description}
          </div>

          <div
            className={`product-card__product-price ${
              theme == "dark"
                ? "product-card__product-price--dark"
                : "product-card__product-price--light"
            }`}
          >
            ${product.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
