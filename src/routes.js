import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Sessions from "./pages/Sessions";
import Seats from "./pages/Seats";
import Success from "./pages/Success";

export const ROUTES = {
  home: "/",
  seats: "/assentos",
  sessions: "/sessoes",
  success: "/sucesso",
};

export default function MyRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<Movies />} />
      <Route path={`${ROUTES.sessions}/:id`} element={<Sessions />} />
      <Route path={`${ROUTES.seats}/:id`} element={<Seats />} />
      <Route path={ROUTES.success} element={<Success />} />
    </Routes>
  );
}
