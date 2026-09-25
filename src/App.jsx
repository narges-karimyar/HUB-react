import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Nav";
import Dashboard from "./Components/Dashboard";
import product from "./Data/Products";
import Login from "./Components/Account";
import FindDoctor from "./Components/Find";
import FindClinic from "./Components/Clinic";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/appointments" element={<h1>Appointments</h1>} />
          <Route path="/find-doctor" element={<FindDoctor />} />
          <Route path="/find-clinic" element={<FindClinic />} />
          <Route path="/chat" element={<h1>Chat</h1>} />
          <Route path="/marketplace" element={<h1>Find Marketplace</h1>} />
          <Route path="/pharmacy" element={<h1>Find Pharmacy</h1>} />
          <Route path="/dependents" element={<h1>My Dependents</h1>} />
          <Route path="/account" element={<Login />} />
          <Route path="/settings" element={<h1>Settings</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
