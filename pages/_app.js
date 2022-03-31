import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/header.css';

import { UserProvider } from '../context/user';
import AuthStateChangeProvider from '../context/auth';



function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
    <AuthStateChangeProvider>
      <Component {...pageProps} />
    </AuthStateChangeProvider>
  </UserProvider>
  
  )
}
export default MyApp