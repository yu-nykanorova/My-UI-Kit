import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home"; 
import { Buttons } from "./pages/Buttons/Buttons";
import { Tabs } from "./pages/Tabs/Tabs";
import { Forms } from "./pages/Forms/Forms";
import { NotFound } from "./pages/NotFound/NotFound";
import { Back } from "./shared/Back";


export const App = () => {

  return (
    <Router>
      <Back />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  )
}