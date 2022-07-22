import './index.css'

const PlanetItem = props => {
  const {planetItemDetails} = props
  const {name, imageUrl, description} = planetItemDetails

  return (
    <div className="image-details-container">
      <img src={imageUrl} className="image-style" alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
