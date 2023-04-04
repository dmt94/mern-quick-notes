import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={ user } setUser={ setUser } />
      { user ?
          <>
            <Routes>
              {/* Route components in here */}
              <Route path="/notes/new" element={<NewNotesPage />} />
            </Routes>
          </>
          : <AuthPage user={user} setUser={setUser} />
      }
    </main>
  );
}
