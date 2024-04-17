import { Outlet, useNavigate, redirect } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
function LayoutPrivate() {
  const cookies = new Cookies();

  const token = cookies.get("x-access-user");

  const { email } = useUserContext();
  const [user, setUser] = useState(false);
  const [isToken, setIsTooken] = useState(false);
  const redirectPage = useNavigate();

  useEffect(() => {
    if (email) {
      setUser(true);
    } else {
      redirectPage("/");
    }
  });

  return <Outlet />;
}

export default LayoutPrivate;
