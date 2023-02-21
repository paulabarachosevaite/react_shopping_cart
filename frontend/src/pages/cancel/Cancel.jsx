import "./cancel.css";
import {Link} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Cancel() {
  return (
    <div>
      <Navbar />
      <p>Your order has been canceled</p>
      <Link to="/">Back to browsing</Link>
    </div>
  );
}
export default Cancel;
