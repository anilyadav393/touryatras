import AllProductsSection from '../AllProductsSection'

import Header from '../Header'

import './index.css'

const About = () => (
  <>
    <Header />
    <div className="about-sections">
      <h1> About Us</h1>
      <p> Tour Yatras</p>
    </div>

    <div className="about-para">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8grlIYT8S1nIpLkwZuL34OowUwEl4AvexaAQkfaqxw&s"
        className="tour-img"
        alt="tour-img"
      />

      <div>
        <h1>
          Explore , Dreams, Discover.
          <br />
          Your Guide to Epic Adventures
        </h1>

        <p className="about-para2">
          Touryatras, the sacred journeys of India, weave a tapestry of
          spirituality, culture, and tradition. These pilgrimages draw millions
          each year, seeking divine blessings and inner transformation. From the
          lofty heights of the Himalayas to the tranquil banks of the Ganges,
          each yatra carries its own significance. The Char Dham Yatra
          encompasses Badrinath, Kedarnath, Gangotri, and Yamunotri, offering a
          path to salvation. Varanasi, the city of light.
          <br />
          Touryatras, the sacred journeys of India, weave a tapestry of
          spirituality, culture, and tradition. These pilgrimages draw millions
          each year, seeking divine blessings and inner transformation. From the
          lofty heights of the Himalayas to the tranquil banks of the Ganges,
          each yatra carries its own significance. The Char Dham Yatra
          encompasses Badrinath, Kedarnath, Gangotri, and Yamunotri, offering a
          path to salvation.
        </p>
      </div>
    </div>
    <div className="img-cont">
      <img
        src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/03/Shimla-Himachal-Pradesh-Feature.jpg"
        alt="img1"
        className="img1"
      />

      <img
        src="https://i.ytimg.com/vi/2oTa5o6jrN0/maxresdefault.jpg"
        alt="img1"
        className="img1"
      />

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5w9ujO5sMNkjnEPHhetYJW26gP9zoHIc_Dwro3FXfa8dZQMtW7828dTYUrYO2col4oBA&usqp=CAU"
        alt="img1"
        className="img1"
      />
    </div>

    <div className="footer">
      <div className="infooter">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
          alt="insta-logo"
          className="insta"
        />

        <p className="footer-heading">FACEBOOK</p>
      </div>

      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShndVC6RsOmwo_WADOPHNdICG0d5cb4zIrQ9gLWUixkA&s"
          alt="insta-logo"
          className="insta"
        />
        <p className="footer-heading">INSTAGRAM</p>
      </div>

      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
          alt="insta-logo"
          className="insta"
        />
        <p className="footer-heading">TWITTER</p>
      </div>
    </div>
  </>
)

export default About
