const Card = ({ user, name, price, description, img }) => {
  return (
    <div className="card">
        <div className="card-img">
            <img src={`/${img}`} alt="" />
        </div>
        <div className="card-info">
            <div className="card-info-left">
              <span className="card-info-left--user">
                {user}
              </span>
              <span className="card-info-left--name">
                {name}
              </span>
              <span className="card-info-left--description">
                {description}
              </span>
            </div>
            <div className="card-info-right">
              <span className="card-info-right--price">
                {price}
              </span>
              <span className="card-info-right--symbol">
                ETH
              </span>
            </div>
        </div>
    </div>
  )
}

export default Card