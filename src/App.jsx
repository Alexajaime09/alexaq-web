import Nav from "./components/Nav";
import { Works, AboutMe, Services, Contact } from "./sections";
import Infographics from "./sections/Infographics";

import Logos from "./sections/Logos";
import Products from "./sections/Products";
import Illustration from "./sections/Illustration";
import SocialMedia from "./sections/SocialMedia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => (
  <Router>
    <main className="relative ">
      <Nav />

      <section>
        <AboutMe />
      </section>

      <section>
        <Works />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Contact />
      </section>

      <Routes>
        <Route path="/info-section" element={<Infographics />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/products" element={<Products />} />
        <Route path="/illustration" element={<Illustration />} />
        <Route path="/media-section" element={<SocialMedia />} />
      </Routes>
    </main>
  </Router>
);

export default App;
