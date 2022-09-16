import ReactDOM from "react-dom";
import Container from "./Container";
import Menu from "./Menu";


function App() {
  return (
    <div>
      <Menu />
      <Container />
    </div>
  );
}

ReactDOM.render(App(), document.querySelector(".root"));
