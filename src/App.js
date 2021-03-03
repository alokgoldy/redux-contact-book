
import './styles/App.scss';
import Navbar from './componenets/Navbar';
import Contacts from './componenets/Contacts';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './componenets/AddContact';
import store from './store';
import EditContact from './componenets/EditContacts';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/contacts/edit/:id" component={EditContact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
