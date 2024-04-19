import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Back.scss";

export const Back = () => {
    const location = useLocation();
    
    if (location.pathname === "/") {
        return null;
      }

    return (
    <div className="back-container">
      <Link to="/"><h3 className="back-title">Back to HOME page</h3></Link>
    </div>
    )
}
