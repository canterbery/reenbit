import { GoogleButton } from "./GoogleButton";
import { useSession, signIn, signOut } from "next-auth/react";
import { useDispatch } from "react-redux";

export const LoginPanel = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        marginRight: "5px",
        marginTop: "5px",
      }}
    >
      <GoogleButton label="Logout" onClick={() => signOut()} />
    </div>
  );
};
