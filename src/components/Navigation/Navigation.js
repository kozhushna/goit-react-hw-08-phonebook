import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = false;

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
