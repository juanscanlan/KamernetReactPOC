import { AuthContext } from "./AuthContext";
import { Modal } from "@utilities/Modals/Modals";
import { useState } from "react";

export const AuthProvider = ({ userId, children }) => {
  const login = (username, password) => {
    fetch(process.env.NEXT_PUBLIC_APP_SERVICES_URL + "/customer/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        useremail: username,
        userpassword: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          Modal.hideAllModals();
          setAuthState((pre) => ({ ...pre, isLoggedIn: true }));
        } else {
          alert("wrong credentials");
        }
      })
      .catch(() => alert("wrong credentials"));
  };

  const register = (firstName, email, password) => {
    fetch(process.env.NEXT_PUBLIC_APP_SERVICES_URL + "/customer/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        UserFirstName: firstName,
        UserEmail: email,
        UserPassword: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          Modal.hideAllModals();
          setAuthState((pre) => ({ ...pre, isLoggedIn: true }));
        } else {
          alert("register failed");
        }
      })
      .catch(() => alert("register failed"));
  };

  const logout = () => {
    console.log("log out");
    fetch(process.env.NEXT_PUBLIC_APP_SERVICES_URL + "/customer/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        if (response.ok) {
          Modal.hideAllModals();
          setAuthState((pre) => ({ ...pre, isLoggedIn: false }));
        } else {
          alert("something wrong happened trying to log you out");
        }
      })
      .catch((error) => console.log(error));
  };

  const [authState, setAuthState] = useState({
    isLoggedIn: userId != null,
    login,
    register,
    logout,
  });
  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
