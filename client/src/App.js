import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </BrowserRouter>
    </div>
  );
};

export default App;
