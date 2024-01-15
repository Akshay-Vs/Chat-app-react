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
}

const ProductCard = ({ theme, products }: ProductCardProps) => {
  return (
    <div className="product-card">
      {products.map((product: Product) => (
        <div
          className={`product-card__container ${
            theme == "dark"
              ? "product-card__container--dark"
              : "product-card__container--light"
          }`}
        >
          <img
            className="product-card__product-image"
            src={product.image}
            alt={product.name}
          />

          <div className="product-card__product-name">{product.name}</div>

          <div className="product-card__product-description">
            product.description
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
