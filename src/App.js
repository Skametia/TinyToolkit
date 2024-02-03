import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input_field from "./Componant/Input_field/Input_field";
import Input_field2 from "./Componant/Input_field2/Input_field2";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Input_field />} />
          <Route path="/Input_field2" element={<Input_field2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
