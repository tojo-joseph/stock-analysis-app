"use client";

import Image from "next/image";
import DashboardMain from "./dashboard/page";
import { useAuth } from "./context/AuthContext";
import LoginPage from "./login/page";

export default function Home() {
  const { accessToken, setAccessToken } = useAuth();

  if (!accessToken) {
    return <LoginPage />;
  } else {
    return <DashboardMain />;
  }
}
