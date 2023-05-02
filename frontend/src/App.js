import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Header from "./components/layout/Header";

function App() {
  return (
    <>
      <div className="NavigationBar">
        <NavigationBar></NavigationBar>
        <Header />
      </div>
    </>
  );
}

export default App;
