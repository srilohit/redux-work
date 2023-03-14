import { Provider } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div style={{backgroundImage: "url('http://scottsfortcollinsauto.com/wp-content/uploads/6-Auto-Repair-Tasks-You-Should-Leave-to-a-Professional_resized.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover', height:'100vh'}}>
        <div className='mx-auto p-3' style={{width:'90%'}}>
          <h4 className='p-3 d-flex' style={{ borderRadius:'3rem',backgroundColor:'rgb(160,175,183)',position:'relative'}}>
            <Link to="/dashboard" className='text-decoration-none text-dark '>DashBoard</Link>
            <Link to="/booking" className='text-decoration-none ms-3 text-dark'>Booking</Link>
            <Link to="/login"  className='text-decoration-none d-flex ms-auto text-dark'>Login</Link>
          </h4>
          <Outlet></Outlet>
        </div>
      </div>
    </Provider>
  );
}

export default App;
