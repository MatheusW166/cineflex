import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Sessions from "./pages/Sessions";
import Seats from "./pages/Seats";
import Success from "./pages/Success";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/sessoes/:id" element={<Sessions />} />
      <Route path="/assentos/:id" element={<Seats />} />
      <Route path="/sucesso" element={<Success />} />
    </Routes>
  );
}
