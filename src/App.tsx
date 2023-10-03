import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginAdmin from './page/Admin/loginAdmin';
import LayoutAdmin from './component/layoutAdmin';
import DashboardAdmin from './page/Admin/dashboardAdmin';
import ListBuyer from './page/Admin/listBuyer';
import ListPartner from './page/Admin/listPartner';
import ListEventAdmin from './page/Admin/listEvent';
import ValidationAdmin from './page/Admin/validationAdmin';
import ListTicket from './page/Admin/listTicket';
import ChatAdmin from './page/Admin/chatAdmin';
import Layoutpartner from './component/layoutPartner';
import Dashboard from './page/Partner/dashboard';
import Event from './page/Partner/event';
import Eventdetail from './page/Partner/eventdetail';
import Transaksi from './page/Partner/transaksi';
import Ticket from './page/Partner/ticket';
import Volunteer from './page/Partner/volunteer';
import LoginBuyer from './page/Buyer/loginBuyer';
import RegisBuyer from './page/Buyer/regisBuyer';
import DashboardBuyer from './page/Buyer/dashboardBuyer';
import EventBuyer from './page/Buyer/eventBuyer';
import DetailEvent from './page/Buyer/detailEvent';
import DetailPemesanan from './page/Buyer/detailPemesanan';
import Checkout from './page/Buyer/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Buyer */}
          <Route path="/" element={<DashboardBuyer />} />
          <Route path="/login-buyer" element={<LoginBuyer />} />
          <Route path="/regis-buyer" element={<RegisBuyer />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/event-buyer" element={<EventBuyer />} />
          <Route path="/detail-event" element={<DetailEvent />} />
          <Route path="/detail-pemesanan" element={<DetailPemesanan />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Admin */}
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/" element={<LayoutAdmin />}>
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            <Route path="/list-buyer" element={<ListBuyer />} />
            <Route path="/list-partner" element={<ListPartner />} />
            <Route path="/list-event-admin" element={<ListEventAdmin />} />
            <Route path="/validation-admin" element={<ValidationAdmin />} />
            <Route path="/list-ticket-admin" element={<ListTicket />} />
            <Route path="/chat-admin" element={<ChatAdmin />} />
          </Route>
          {/* Partner */}
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
