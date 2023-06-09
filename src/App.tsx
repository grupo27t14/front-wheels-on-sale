import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes";
import { UserContextProvider } from "./contexts/UserContext";
import { AuthProvider } from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CarContextProvider } from "./contexts/CarContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <AuthProvider>
          <CarContextProvider>
            <RoutesMain />
          </CarContextProvider>
        </AuthProvider>
      </UserContextProvider>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
