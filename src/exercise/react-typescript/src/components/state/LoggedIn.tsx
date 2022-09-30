import React from 'react';

type IAuthUser = {
  username: string;
  password: string;
  user: {
    firstName: string;
    lastName: string;
  };
};

type IAuthState = {
  isLoggedIn: boolean;
  user: IAuthUser | null;
};

const LoggedIn: React.FC = () => {
  const [authState, setAuthState] = React.useState<IAuthState | null>({
    isLoggedIn: false,
    user: null
  });

  const login = () => {
    setAuthState({
      isLoggedIn: true,
      user: {
        username: 'johndoe',
        password: 'password',
        user: {
          firstName: 'John',
          lastName: 'Doe'
        }
      }
    });
  };

  const logout = () => {
    setAuthState({
      isLoggedIn: false,
      user: null
    });
  };

  return (
    <div>
      <h1>Is logged in: {authState?.isLoggedIn ? 'Yes' : 'No'}</h1>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default LoggedIn;
