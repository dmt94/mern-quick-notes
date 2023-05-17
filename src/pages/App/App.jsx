import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import Homepage from '../Homepage/Homepage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">      
      { user ?
          <>
            <NavBar user={ user } setUser={ setUser } />
            <Routes>
              <Route path="/notes/new" element={<NewNotesPage />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
            <Footer />
          </>
          : <AuthPage user={user} setUser={setUser} />
      }
    </main>
  );
}
