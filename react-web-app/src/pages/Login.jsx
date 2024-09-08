import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.svg";
import Bar from "../Components/Bar";
import Footer from "../Components/Footer";
import styles from './Login.module.css'; 

function Login() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    if (token) {
        navigate("/");
    }

    const handleGoogle = () => {
        window.location.href =
            "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173/";
    };

    return (
        <div>
            <Bar />
            <div className={styles.pageLayout}> 
                <div className={styles.loginContainer}> 
                    <div className={styles.loginTitle}> 
                        Create a new account
                    </div>
                    <div
                        className={styles.googleLoginBtn}  
                        onClick={handleGoogle}
                    >
                        <img src={google} alt="google" className={styles.googleIcon} /> 
                        Sign Up with Google
                    </div>
                    <div>
                        <Link to="/login" className={styles.createAccountBtn}>  
                            Create an Account
                        </Link>
                        <div className={styles.alreadyAccountText}> 
                            Already have an account?{" "}
                            <Link to="/signin" className={styles.signinLink}>  
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
