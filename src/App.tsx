import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
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
import Volunteer from './page/Partner/volunteer';
import LoginBuyer from './page/Buyer/loginBuyer';
import RegisBuyer from './page/Buyer/regisBuyer';
import DashboardBuyer from './page/Buyer/dashboardBuyer';
import EventBuyer from './page/Buyer/eventBuyer';
import DetailEvent from './page/Buyer/detailEvent';
import DetailPemesanan from './page/Buyer/detailPemesanan';
import Checkout from './page/Buyer/Checkout';
import LoginPartner from './page/Partner/loginPartner';
import RegisterPartner from './page/Partner/registerPartner';
import ProfilePartner from './page/Partner/profilePartner';
import BuatEvent from './page/Partner/buatEvent';
import TiketBuyer from './page/Buyer/profile/tiket';
import RefundBuyer from './page/Buyer/profile/refund';
import PersonalData from './page/Buyer/profile/personalData';
import LayoutBuyer from './component/layoutBuyer';
import TicketDetail from './page/Partner/ticketDetail';
import Ticket from './page/Partner/ticket';
import Listrefund from './page/Partner/listrefund';
import Validation from './page/Partner/validation';
import Promo from './page/Partner/promo';
import ListPromo from './page/Partner/listPromo';
import BuatPromo from './page/Partner/buatPromo';
import Checkin from './page/Partner/checkin';
import ChatPartner from './page/Partner/chatPartner';
import LayoutVolunteer from './component/layoutVolunteer';
import CheckinVolunteer from './page/Volunteer/checkinVolunteer';
import LoginVolunteer from './page/Volunteer/loginVolunteer';
import About from './page/Buyer/About';
import ProfileAdmin from './page/Admin/profileAdmin';
import ListAdmin from './page/Admin/listAdmin';


function App() {
  axios.defaults.baseURL = "https://backendlagi.online";
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          {/* Buyer */}
          <Route path="/" element={<DashboardBuyer />} />
          <Route path="/login-buyer" element={<LoginBuyer />} />
          <Route path="/regis-buyer" element={<RegisBuyer />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/event-buyer" element={<EventBuyer />} />
          <Route path="/detail-event/:id" element={<DetailEvent />} />
          <Route path="/detail-pemesanan/:id" element={<DetailPemesanan />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<LayoutBuyer />}>
            <Route path="/profile-personal" element={<PersonalData />} />
            <Route path="/profile-tiket" element={<TiketBuyer />} />
            <Route path="/profile-refund" element={<RefundBuyer />} />
          </Route>

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
            <Route path="/profile-admin" element={<ProfileAdmin />} />
            <Route path="/list-admin" element={<ListAdmin />} />
          </Route>
          {/* Partner */}
          <Route path="/login-partner" element={<LoginPartner />} />
          <Route path="/register-partner" element={<RegisterPartner />} />
          <Route path="/buat-event-partner" element={<BuatEvent />} />
          <Route path="/" element={<Layoutpartner />}>
            <Route path="/dashboard-partner" element={<Dashboard />} />
            <Route path="/profil-partner" element={<ProfilePartner />} />
            <Route path="/myevents" element={<Event />} />
            <Route path="/myevents/:id" element={<Eventdetail />} />
            <Route path="/myevents/:id/transaksi" element={<Transaksi />} />
            <Route path="/myevents/:id/ticket" element={<TicketDetail />} />
            <Route path="/myevents/:id/volunteer" element={<Volunteer />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/ticket-refund" element={<Listrefund />} />
            <Route path="/validation" element={<Validation />} />
            <Route path="/validation-checkin" element={<Checkin />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/promo-list" element={<ListPromo />} />
            <Route path="/buat-promo" element={<BuatPromo />} />
            <Route path="/chat-partner" element={<ChatPartner />} />
          </Route>
          {/* Volunteer */}
          <Route path="/login-volunteer" element={<LoginVolunteer />} />
          <Route path="/" element={<LayoutVolunteer />}>
            <Route path="/checkin-volunteer" element={<CheckinVolunteer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
