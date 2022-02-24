import "./App.css";
import UserPage from "./page/UserPage";

import UserContextProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <UserPage />
      </UserContextProvider>
    </div>
  );
}

export default App;
