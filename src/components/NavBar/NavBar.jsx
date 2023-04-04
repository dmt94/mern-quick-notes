import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav className='flex-c'>
      <span>Welcome, {user.name}!</span>
      <div>
        <Link to="/notes/new" className="nav-link">Add note</Link>
        &nbsp; | &nbsp; 
        <Link to="/" className="nav-link">View All Notes</Link>
        &nbsp; | &nbsp; 
        <Link to="" onClick={ handleLogOut } className="nav-link">Log out</Link>
      </div>
    </nav>
  );
}