import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
function App() {
  return (
    <>
      <Toaster />
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
