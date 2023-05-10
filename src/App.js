import NavBar from './components/UI/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs'
import UsersTable from './components/allForms/forms/table/UsersTable';
import ClientsTable from './components/allForms/forms/table/ClientsTable';
import Footer from './components/UI/footer/Footer';

function App() {

  return (
    <div className="">
        <NavBar/>
       <Home/>
        <Footer/>
    </div>
  );
}

export default App;
