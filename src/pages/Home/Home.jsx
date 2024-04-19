import "./Home.scss"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="home-container">

      <div className="links-container">
        <Link to="/buttons" className="link-item to-buttons-page">Go to Buttons Page</Link>
        <Link to="/tabs" className="link-item to-tabs-page">Go to Tabs Page</Link>
        <Link to="/forms" className="link-item to-forms-page">Go to Forms Page</Link>
      </div>

    </div>
  )
}

