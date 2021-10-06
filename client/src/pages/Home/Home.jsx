import homeCSS from "./Home.module.css";
import jmRenCar from "../../assets/img/jmRentCar.png";
import { getCurrentUser } from "../../services/authServices";

function Home() {
  console.log("current user", getCurrentUser());
  return (
    <section className={homeCSS.hero}>
      <div className="container">
        <img src={jmRenCar} alt="Rent car logo" />
        <h1 className="display-1 text-bold" style={{ fontWeight: 500 }}>
          Rent Car JM
        </h1>
        <h5 className="text-gray-soft text-regular">
          Bienvenido al mejor sistema para tu rent car.
        </h5>
      </div>
    </section>
  );
}

export default Home;
