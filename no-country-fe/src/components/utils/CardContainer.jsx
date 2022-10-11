import Card from "./Card"

const CardContainer = ({ data }) => {
  return (
    <div className="card-container">
      <div className="card-container--title">
        <h2>NFTs populares</h2>
        <span>Mas...</span>
      </div>
      <div className="card-container--carrousel">
          {
            data.map(nft => {
              return <Card key={nft.id} user={nft.user} name={nft.name} price={nft.price} description={nft.description.substr(0, 110)} img={nft.img}/>
            })
          }
      </div>
    </div>
  )
}

export default CardContainer