import Form from "./component/Form";
import Jobs from "./component/Jobs";
import Header from "./component/Header";
import React from "react";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <div className="">
      <Header />

      <DataProvider>
        <Form />

        <Jobs />
      </DataProvider>
    </div>
  );
}

export default App;
