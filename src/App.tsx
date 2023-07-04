import { GlobalStyle } from "./styles/global";
import { RoutesMain } from "./routes";
import { UserContextProvider } from "./contexts/UserContext";
import { AuthProvider } from "./contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CarContextProvider } from "./contexts/CarContext";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/theme";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false)

  const handleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>   
      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyle />
        <UserContextProvider>
          <AuthProvider>
            <CarContextProvider>
              <RoutesMain handleTheme={() => handleTheme()} isDark={ isDark }/>
            </CarContextProvider>
          </AuthProvider>
        </UserContextProvider>
        <ToastContainer position="bottom-right" />
      </ThemeProvider>
    </>
  );
}

export default App;
