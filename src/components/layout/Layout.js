import Navigation from 'components/navigation/Navigation';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <header>
        {!location.pathname.includes('details') && <Navigation />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
