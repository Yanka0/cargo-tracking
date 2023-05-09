import NavBar from './components/UI/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';

import UsersTable from './components/allForms/forms/table/UsersTable';
import ClientsTable from './components/allForms/forms/table/ClientsTable';

function App() {

  return (
    <div className="">
        <NavBar/>
        <Home/>
        <UsersTable/>
        <ClientsTable/>
    </div>
  );
}

export default App;
