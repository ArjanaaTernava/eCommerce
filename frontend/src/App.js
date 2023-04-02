import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";

function App() {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="NavigationBar"
      >
        <NavigationBar></NavigationBar>
      </div>
    </>
  );
}

export default App;
