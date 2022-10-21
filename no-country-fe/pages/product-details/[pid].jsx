import { useRouter } from "next/router";
import Header from "src/components/utils/Header";
import ProductVisualizationCard from "src/components/products/details/ProductVisualizationCard";
import { useEffect, useState } from "react";
import { aux } from "helpers/nfts-aux";
import ProductGraph from "./ProductGraph";

const ProductDetails = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(aux[0]);
  useEffect(() => {
    setProduct(aux[pid - 1])
  })

  return (
    <div className="product-details--page">
      <Header />
      <main>
        <div className="container">
          <ProductVisualizationCard product={product} />
          <div className="description">
            <h3>Descripción</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="rarity">
            <h3>Rareza:  <span>COMÚN</span></h3>
            <div className="rarity-cards-container">
              {product?.rarity.map(rarity => (
                <div className="rarity-card">
                  <div>
                    <p className="rarity-card__title">{rarity.type}</p>
                    <p>{rarity.description}</p>
                  </div>
                  <span className="rarity-percentage">{rarity.percentage} %</span>
                </div>
              ))}
            </div>
          </div>
          <div className="graph-container">
            <div className="graph">
              <ProductGraph />
            </div>
          </div>
          <div className="related-items">
                
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductDetails;
