import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginAdmin from './page/Admin/loginAdmin';
import LayoutAdmin from './component/layoutAdmin';
import DashboardAdmin from './page/Admin/dashboardAdmin';
import ListBuyer from './page/Admin/listBuyer';
import ListPartner from './page/Admin/listPartner';
import ListEventAdmin from './page/Admin/listEvent';
import Layoutpartner from './component/layoutPartner';
import Dashboard from './page/Partner/dashboard';
// import LoginBuyer from './page/Buyer/loginBuyer';
// import RegisBuyer from './page/Buyer/regisBuyer';
import DashboardBuyer from './page/Buyer/dashboardBuyer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Buyer */}
          <Route path="/" element={<DashboardBuyer />}>
            {/* <Route path="/dashboard-buyer" element={<DashboardBuyer />} /> */}
          </Route>
          {/* Admin */}
          <Route path="/" element={<LayoutAdmin />}>
            <Route path="/login-admin" element={<LoginAdmin />} />
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            <Route path="/list-buyer" element={<ListBuyer />} />
            <Route path="/list-partner" element={<ListPartner />} />
            <Route path="/list-event-admin" element={<ListEventAdmin />} />
          </Route>
          {/* Partner */}
          <Route path="/" element={<Layoutpartner />}>
            <Route path="/dashboard-partner" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
