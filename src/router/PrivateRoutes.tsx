import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import { useStore } from "../store/store";
import { Container } from "../components/Container";
import { PrivateHeader } from "../components/PrivateHeader";

const PrivateRoutes = () => {
  const { user } = useStore();
  if (!user) return <Navigate to="/auth" />;
  return (
    <Container>
      <PrivateHeader />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Container>
  );
};

export default PrivateRoutes;
