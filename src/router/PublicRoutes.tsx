import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import { useStore } from "../store/store";
import Privacy from "../pages/privacy/Privacy";
import { Container } from "../components/Container";
const PublicRoutes = () => {
  const { user } = useStore();
  if (user) return <Navigate to="/" />;
  return (
    <Container>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </Container>
  );
};

export default PublicRoutes;
