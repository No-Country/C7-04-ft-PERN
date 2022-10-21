import Image from "next/image";
import nft_mockup from "public/images/products/nft-mockup.webp";
import favorite_icon from "public/icons/favorite-icon.svg";

const ProductVisualizationCard = ({ product }) => {
    
    if(product) {
        const {
            user,
            name,
            price,
            img
        } = product;

        return (
            <article className="product-visualization--card">
                <Image width='100%' height='100%' src={img} className="product-visualization--card__image" />
                <div className="product-visualization--card__info">
                    <h3>Nombre de la Colección</h3>
                    <h2>{name}</h2>
                    <div className="product-info--price__container">
                        <div className="product-info--price">
                            <p className="product-info--price__title">Precio</p>
                            <div className="product-info--price__card">
                                <p> {price} </p>
                                <p> ETH </p>
                            </div>
                        </div>
                        <button type="button" className="product-info--price__card--button">
                            OFERTAR
                        </button>
                    </div>
                    <p className="counter">Acaba en 00 días - 00 horas - 00 min</p>
                    <div className="details">
                        <h4>Detalles</h4>
                        <ul>
                            <li className="details-el">Creador <span>{user}</span></ li>
                            <li className="details-el">Dueño <span>Usuario</span></ li>
                            <li className="details-el">Porcentaje de regalias <span>5%</span></ li>
                            <li className="details-el">Comisión de la plataforma <span>1%</span></ li>
                        </ul>
                    </div>
                    <div className="product-visualization--card__footer">
                        <p>500 vizualizaciones</p>
                        <a href="#">Compartir</a>
                        <p className="favorite">30k <span className="favorite-icon"><Image src={favorite_icon} alt="favorite button" /></span></p>
                    </div>
                </div>
            </article>
        );
    } else {
        return null;
    }
}

export default ProductVisualizationCard;
