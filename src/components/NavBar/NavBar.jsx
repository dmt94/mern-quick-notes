import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {
        user ? 
        <>
          <span>Welcome, {user.name}!</span>
          &nbsp; | &nbsp;
          <Link to="/notes/new">Add note</Link>
          &nbsp; | &nbsp; 
          <Link to="" onClick={ handleLogOut }>Log out</Link>
        </> :
        <></>
      }
    </nav>
  );
}