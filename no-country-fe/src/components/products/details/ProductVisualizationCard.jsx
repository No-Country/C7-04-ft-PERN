import Image from "next/image";
import nft_mockup from "public/images/products/nft-mockup.webp";

const ProductVisualizationCard = () => {
    return (
        <article className="product-visualization--card">
            <Image src={nft_mockup} />
            <div className="product-visualization--card__info">
                <h3>Nombre de la Colección</h3>
                <h2>Nombre del NFT</h2>
                <p>Creado por Usuario</p>
                <p>Propiedad de Usuario</p>
                <p>Descripción</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nesciunt nostrum, vel perspiciatis optio, error sed pariatur illo esse et laborum accusantium sint eaque amet, tempore aut officiis consectetur eum.</p>
                <div className="product-info--price">
                    <p>Precio</p>
                    <div className="product-info--price__card">
                        <p> 3.0 </p>
                        <p> ETH </p>
                        <button type="button" className="product-info--price__card--button">
                            Buy
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProductVisualizationCard;
