import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/registration";
import Thankyou from "./pages/thankyou";

function App() {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70" style={{ backgroundImage: "url('/webBackground.png')" }}></div>
      <div className="relative z-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
