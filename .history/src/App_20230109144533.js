import { BrowserRouter as Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contact}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
