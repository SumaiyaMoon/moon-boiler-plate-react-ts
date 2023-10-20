import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SMLogin from "../../components/SMLayouts/SMLogin";
import SMSignUp from "../../components/SMLayouts/SMSignUp";
import Home from "../../pages/SMHome";
import NotFound from "../../pages/SMNotFound";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes
          <Route path="/" element={<Home />} /> */}

          <Route path="/login" element={<SMLogin />} />
          <Route path="/signup" element={<SMSignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          {/* Protected Routes
          <Route
            path="admindashboard/*"
            element={<Protected Screen={AdminDashboard} />}
          /> */}
        </Routes>
      </Router>
    </>
  );
}
