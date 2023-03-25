import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoutes({ children }: Props) {
  if (localStorage.getItem("accessToken")) {
    return <>{children}</>;
  }
  return <Navigate to="/signin" />;
}