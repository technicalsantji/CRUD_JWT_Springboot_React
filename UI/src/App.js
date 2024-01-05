import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListCustomerComponent from './components/ListCustomerComponent';
import AddCustomerComponent from './components/AddCustomerComponent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={ListCustomerComponent}></Route>
        <Route path="/customers" component={ListCustomerComponent}></Route>
        <Route path="/add-customer" component={AddCustomerComponent}></Route>
        <Route
          path="/edit-customer/:id"
          component={AddCustomerComponent}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
