import "./App.css";
import UserPage from "./page/UserPage";

import UserContextProvider from "./context/UserContext";
import UserDetailContextProvider from "./context/UserDetailContext";
import GetDigimonContextProvider from "./context/GetDigimonContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <UserDetailContextProvider>
          <GetDigimonContextProvider>
            <UserPage />
          </GetDigimonContextProvider>
        </UserDetailContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;

// ambil data ke api digimon https://digimon-api.vercel.app/api/digimon menggunakan context
