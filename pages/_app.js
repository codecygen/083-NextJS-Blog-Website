import NavBarInLayout from '../components/navbar/NavBarInLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NavBarInLayout>
      <Component {...pageProps} />
    </NavBarInLayout>
  );
};

export default MyApp;
