import Image from "next/image";
import nft_mockup from "public/images/products/nft-mockup.webp";

const ProductVisualizationCard = () => {
    return (
        <article className="product-visualization--card">
            <Image src={nft_mockup} />
        </article>
    );
}

export default ProductVisualizationCard;
