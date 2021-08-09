import LoginButton from './components/loginButton';
import LogoutButton from './components/logoutButton';
import Profile from './components/profile';

import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      {
        isAuthenticated ? <LogoutButton /> : <LoginButton />
      }
      <Profile />
    </div>
  );
}

export default App;
