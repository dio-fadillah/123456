import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/header.css';
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'

import { UserProvider } from '../context/user';
import AuthStateChangeProvider from '../context/auth';


function MyApp({ Component, pageProps }) {
  return (
  <>
  <UserProvider>
    <AuthStateChangeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthStateChangeProvider>
  </UserProvider>
  </>
  
  )
}

// initialize store and wrapper store
const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)