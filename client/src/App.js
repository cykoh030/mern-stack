import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </BrowserRouter>
    </div>
  );
};

export default App;
