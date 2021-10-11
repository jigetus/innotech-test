import { useState } from "react";
import About from "./Screen2/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Screen1 from "./Screen1/Screen1";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Screen1 />}></Route>
        <Route
          path="/character/:id"
          key={window.location.pathname}
          component={() => <About />}
        />
      </Switch>
      {/* <Redirect from="/character" to="/" /> */}
    </Router>
  );
}

export default App;
