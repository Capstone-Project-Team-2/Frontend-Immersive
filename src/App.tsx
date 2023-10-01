import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginAdmin from "./page/Admin/loginAdmin";
import LayoutAdmin from "./component/layoutAdmin";
import DashboardAdmin from "./page/Admin/dashboardAdmin";
import ListBuyer from "./page/Admin/listBuyer";
import Layoutpartner from "./component/layoutPartner";
import Dashboard from "./page/Partner/dashboard";
import Event from "./page/Partner/event";
import Eventdetail from "./page/Partner/eventdetail";
import Transaksi from "./page/Partner/transaksi";
import Ticket from "./page/Partner/ticket";
import Volunteer from "./page/Partner/volunteer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/" element={<LayoutAdmin />}>
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            <Route path="/list-buyer" element={<ListBuyer />} />
          </Route>
          <Route path="/" element={<Layoutpartner />}>
            <Route path="/dashboard-partner" element={<Dashboard />} />
            <Route path="/myevents" element={<Event />} />
            <Route path="/myevents/:id" element={<Eventdetail />} />
            <Route path="/myevents/:id/transaksi" element={<Transaksi />} />
            <Route path="/myevents/:id/ticket" element={<Ticket />} />
            <Route path="/myevents/:id/volunteer" element={<Volunteer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
