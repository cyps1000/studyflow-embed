import { BrowserRouter, Route, Routes as DomRoutes } from "react-router-dom";
import { React } from "./React";
import { Studyflow } from "./Studyflow";
import { Help } from "./Help";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/" element={<React />} />
        <Route path="/help" element={<Help />} />
        <Route path="/v2.0" element={<Studyflow />} />
        <Route path="/v2.0/*" element={<Studyflow />} />
      </DomRoutes>
    </BrowserRouter>
  );
};
