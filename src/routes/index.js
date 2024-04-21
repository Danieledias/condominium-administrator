import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../../src/pages/Home";
import Services from "../../src/pages/Services";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/servicos" exact component={Services} />
          {/* <Route path='/sobre' exact component={About} />
          <Route path='/contato' exact component={Contact} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routers;
