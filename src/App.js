import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import M from "materialize-css";
import Login from "./Component/Login";
import Home from "./Pages/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import UserDashboard from "./Component/UserDashboard";
import UserRegister from "./Component/UserRegister";
import UserProfile from "./Component/UserProfile"
import CompanyDashboard from "./Component/CompanyDashboard";
import Dashboard from "./Component/dashboard/dashboard";
import CalendarComp from './Component/calander/Calendar';
import Chat from "./Component/chat/chat";

function App() {
  // const [user, setUser] = useState(JSON.stringify(localStorage.getItem('user')));
  // useEffect(() => {
  //   if (window.location.pathname !== "/checkout")
  //     localStorage.removeItem("purchase");
  //   if (user === null) {
  //     lookup("GET", null, "/api/auth/get").then((data) => {
  //       if (data[0].user) {
  //         localStorage.setItem("user", JSON.stringify(data[0].user));
  //         setUser(data[0].user);
  //       } else {
  //         localStorage.setItem("user", null);
  //         setUser(null);
  //       }
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/calendar" element={<CalendarComp />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sample" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<UserDashboard />}></Route>
          <Route path='/dummy' element={<CompanyDashboard/>}></Route>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path='/userid' element={<UserProfile/>}></Route>
          <Route path="*" element={<div>Page not found</div>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
