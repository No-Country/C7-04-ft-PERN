import { useRouter } from "next/router";
import Header from "src/components/utils/Header";
import ProductVisualizationCard from "src/components/products/details/ProductVisualizationCard";

const ProductDetails = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <Header />
      <main>
        <p>500 Visualizaciones</p>
        <ProductVisualizationCard />
      </main>
    </div>
  );
}

export default ProductDetails;
