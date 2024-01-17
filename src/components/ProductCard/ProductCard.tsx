import React, { useRef, useState } from "react";
import "./ProductCard.scss";
import getProducts from "../../libs/getProducts";
import product from "../../types/productType";
import message from "../../types/messageType";

interface ProductCardProps {
  theme: string;
  handleMessage: (message:message) => void;
}

const ProductCard = ({ theme, handleMessage }: ProductCardProps) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isClick, setIsClick] = useState(true);
  const slider = useRef<HTMLDivElement>(null);

  const products: product[] = getProducts();

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
      {products.map((product: product, index:number) => (
        <div
          className={`product-card__container ${
            theme == "dark"
              ? "product-card__container--dark"
              : "product-card__container--light"
          }`}
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            isClick && handleMessage({
              type: "product",
              content: {
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                text: product.name,
              },
            });
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
