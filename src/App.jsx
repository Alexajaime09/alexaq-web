import Nav from "./components/Nav";
import { Works, AboutMe, Services, Contact } from "./sections";

const App = () => (
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
  </main>
);

export default App;
