import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginAdmin from './page/Admin/loginAdmin';
import LayoutAdmin from './component/layoutAdmin';
import DashboardAdmin from './page/Admin/dashboardAdmin';
import ListBuyer from './page/Admin/listBuyer';

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
