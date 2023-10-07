import '@/styles/globals.css'
import '@/styles/registerstyle.css'; // Import the CSS module
import 'bootstrap/dist/css/bootstrap.min.css';

/*
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}*/


import { UserProvider } from '../context/UserContext';

function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;