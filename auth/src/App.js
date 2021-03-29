import axios from 'axios';
import { AuthContextProvider } from './component/context/AuthContext';
import Router from './Route';

axios.defaults.withCredentials = true;
function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
