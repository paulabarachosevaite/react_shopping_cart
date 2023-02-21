import "./success.css";
import {Link} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
function Success() {
  return (
    <div>
      <Navbar />
      <p>Your order has been completed!</p>
      <Link to="/">Back to browsing</Link>
    </div>
  );
}
export default Success;
