import React, { useState, useEffect } from "react";
import styles from "../styles/LoginPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../actions";
import { setUser } from "../redux/userSlice";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState({ error: false, value: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg({ error: false, value: "Gathering milk data..." });
    const data = await login({ username, password });
    if (data.error) {
      setMsg({ error: true, value: data.error });
      setLoading(false);
      return;
    }
    dispatch(setUser({ username, password, name: data.storeInfo }));
  };

  useEffect(() => {
    if (user.name.length > 0) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBanner}>
        <h1>Milk Manager</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.loginForm}>
        {msg.value.length > 0 && (
          <div
            className={`${styles.loginMsg} ${
              msg.error === true ? styles.loginError : undefined
            }`}
          >
            {msg.value}
          </div>
        )}
        <div className={styles.loginFormControl}>
          <input
            required
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Dean's Username</label>
        </div>
        <div className={styles.loginFormControl}>
          <input
            required
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Dean's Password</label>
        </div>
        <button disabled={loading} className={styles.loginBtn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
