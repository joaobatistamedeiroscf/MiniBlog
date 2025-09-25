import styles from "./Login.module.css";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Fazendo login...");
    console.log(email);
    console.log(password);
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <p>Faça seu login para começar a usar.</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <MdEmail className={styles.icon} />
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <FaLock className={styles.icon} />
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      

        <div className={styles.buttonContainer}>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
