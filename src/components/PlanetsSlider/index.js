import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const ReactSlick = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  }
  return (
    <div className="container" testid="planet">
      <h1 className="heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem planetItemDetails={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default ReactSlick
