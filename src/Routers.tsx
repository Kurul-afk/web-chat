import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";
import NotFoundPage from "./pages/NotFoundPage";

const Routers = () => {
  const user = false;
  const UserRoute = () => (user ? <Outlet /> : <Navigate to={"/sign-in"} />);

  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<UserRoute />}>
        <Route path="/" element={<Chat />} />
      </Route>
    </Routes>
  );
};

export default Routers;
