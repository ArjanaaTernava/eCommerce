import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="NavigationBar">
        <Header />
        <NavigationBar></NavigationBar>
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
