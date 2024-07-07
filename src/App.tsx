import { Route, Routes } from "react-router-dom";
import AppHome from "./components/pages/AppHome";
import AppLayout from "./components/atoms/layouts/AppLayout";
import AppNotFound from "./components/pages/error/AppNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<AppHome />} />
        <Route path="*" element={<AppNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
