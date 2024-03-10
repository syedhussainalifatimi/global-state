import { Link } from "react-router-dom";
import Styles from './homepage.module.css';
const HomePage = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.leftside}>
          <h5>We Are Here To Serve You</h5>
          <h1>The Ultimate Shopping Solution</h1>
          <p>
            <Link to="/products">
              Click Here to Shop
            </Link>
          </p>
        </div>
        <div className={Styles.rightside}>
          <img src="https://static.tildacdn.com/tild6130-3635-4135-b733-356331316265/111_3.svg" alt="" />
        </div>
      </div>
    </>
  )
}
export default HomePage;