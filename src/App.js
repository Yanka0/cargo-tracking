import NavBar from './components/UI/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';

import UsersTable from './components/allForms/forms/table/UsersTable';

function App() {

  return (
    <div className="">
        <NavBar/>
        <Home/>
        <UsersTable/>
    </div>
  );
}

export default App;
