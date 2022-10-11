import * as React from "react";
//Components
import { MainPage } from "./components/MainPage";
//Context
import { SortingDataProvider } from "./context/SortingData";

function App() {
  return (
    <>
      <SortingDataProvider>
        <MainPage />
      </SortingDataProvider>
    </>
  );
}

export default App;
