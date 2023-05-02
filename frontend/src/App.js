import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"


function App() {
  return (
    <>
      <div className="NavigationBar">
        <NavigationBar></NavigationBar>
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
