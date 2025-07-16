import  { useState } from 'react';
import styles from './CreateAccount.module.css';

const CreateAccount = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className={styles.container}>
      <h1>Create Account</h1>
      <p>Fill in your personal information.</p>

      <div className={styles.tabs}>
        <button
          className={isSignUp ? styles.activeTab : ''}
          onClick={() => setIsSignUp(true)}
        >
          Sign Up
        </button>
        <button
          className={!isSignUp ? styles.activeTab : ''}
          onClick={() => setIsSignUp(false)}
        >
          Sign In
        </button>
      </div>

      <form className={styles.form}>
        <div className={styles.row}>
          <input type="text" placeholder="Enter name" required />
          <input type="text" placeholder="Enter name" required />
        </div>

        <div className={styles.phoneGroup}>
          <div className={styles.flag}>
            🇨🇲 <span>+237</span>
          </div>
          <input type="tel" placeholder="Enter phone number" required />
        </div>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Enter password" required />

        <select>
          <option value="">Choose Native Language</option>
          <option value="english">English</option>
          <option value="french">French</option>
        </select>

        <label className={styles.checkbox}>
          <input type="checkbox" required />
          By signing up, you agree to our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
        </label>

        <button type="submit" className={styles.submitBtn}>
          Create Account
        </button>

        <div className={styles.altText}>or continue with</div>

        <div className={styles.socialIcons}>
          <button>Facebook</button>
          <button>Google</button>
          <button>Apple</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
