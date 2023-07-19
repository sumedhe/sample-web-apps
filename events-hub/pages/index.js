import { useEffect, useState } from 'react';
import { UserManager } from 'oidc-client';
import oidcConfig from '../oidcConfig';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userManager = new UserManager(oidcConfig);

    // Check if the user is authenticated
    userManager.getUser().then((user) => {
      if (user && !user.expired) {
        setUser(user);
      }
    });

    // Handle callback after authentication
    userManager.signinRedirectCallback().then((user) => {
      if (user) {
        console.log(user)
        setUser(user);
      }
    });
  }, []);

  const handleLogin = () => {
    const userManager = new UserManager(oidcConfig);
    userManager.signinRedirect();
  };

  const handleLogout = () => {
    const userManager = new UserManager(oidcConfig);
    userManager.signoutRedirect();
  };

  return (
    <div>
      <h1>OIDC Sample Application</h1>
      {user ? (
        <div>
          <p>Welcome, {user.profile.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.profile.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default HomePage;