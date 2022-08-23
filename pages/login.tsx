import { signIn } from "next-auth/react";
import { useState } from "react";
import useWindowDimensions from "../helpers/useWindowDimensions";
import styles from "../styles/login/Login.module.css";

const Login = () => {
  const { height, width } = useWindowDimensions();
  const [name, setName] = useState<string>("");
  return (
    <div className={styles.container}>
      <div
        className={styles.loginForm}
        style={{ width: width <= 375 ? width - 5 + "px" : "400px" }}
      >
        <h3>Login Here</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Your name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className={styles.logInButton}
          onClick={() =>
            signIn("credentials", {
              name,
              callbackUrl: `${window.location.origin}/`,
            })
          }
          disabled={name.trim().length < 1}
        >
          Log In
        </button>
        <button
          className={styles.logInGoogleButton}
          onClick={() =>
            signIn("google", { callbackUrl: `${window.location.origin}/` })
          }
        >
          Log In with Google
        </button>
        <div className={styles.socal}></div>
      </div>
    </div>
  );
};

export default Login;
