import Header from '../Header'
import './index.css'

const Contact = () => (
  <>
    <Header />
    <div className="contact-container">
      <h1> HAVE A QUESTION ?</h1>

      <p className="about-para2">
        𝐆𝐨𝐭 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧𝐬 𝐨𝐫 𝐟𝐞𝐞𝐝𝐛𝐚𝐜𝐤? 𝐑𝐞𝐚𝐜𝐡 𝐨𝐮𝐭 𝐭𝐨 𝐮𝐬! 𝐎𝐮𝐫 𝐭𝐞𝐚𝐦 𝐢𝐬 𝐡𝐞𝐫𝐞 𝐭𝐨 𝐚𝐬𝐬𝐢𝐬𝐭
        <br />
        𝐲𝐨𝐮. 𝐒𝐢𝐦𝐩𝐥𝐲 𝐟𝐢𝐥𝐥 𝐨𝐮𝐭 𝐭𝐡𝐞 𝐟𝐨𝐫𝐦 𝐛𝐞𝐥𝐨𝐰, 𝐚𝐧𝐝 𝐰𝐞’𝐥𝐥 𝐠𝐞𝐭 𝐛𝐚𝐜𝐤 𝐭𝐨 𝐲𝐨𝐮 𝐩𝐫𝐨𝐦𝐩𝐭𝐥𝐲.
        𝐘𝐨𝐮𝐫 𝐬𝐚𝐭𝐢𝐬𝐟𝐚𝐜𝐭𝐢𝐨𝐧 𝐢𝐬 𝐨𝐮𝐫 𝐩𝐫𝐢𝐨𝐫𝐢𝐭𝐲.
      </p>

      <div className="info">
        <h2 className="input-heading">
          First Name
          <input placeholder=" Enter First Name" className="input" />
        </h2>

        <h2 className="input-heading">
          Last Name
          <input placeholder=" Enter Last Name" className="input" />
        </h2>
      </div>

      <div className="info">
        <h2 className="input-heading">
          Email
          <input placeholder=" Enter your Email" className="input" />
        </h2>

        <h2 className="input-heading">
          Mobile Number
          <input placeholder=" Enter your Mobile number" className="input" />
        </h2>
      </div>
      <div>
        <button className="btn">Submit</button>
      </div>
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

export default Contact
