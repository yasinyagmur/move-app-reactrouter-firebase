import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
