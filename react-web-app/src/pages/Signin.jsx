import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Bar from "../Components/Bar";
import styles from "./Login.module.css";

function Signin() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    if (token) {
        navigate("/");
    }
    if (!token) {
        navigate("/signin");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <div>
            <Bar />
            <div className={styles.pageLayout}>
                <div className={styles.loginContainer}>
                    <div className={styles.loginTitle}>
                        Sign in to your account
                    </div>


                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className={styles.inputMainBox}>
                            <label className="block text-[#CCCCCC] text-sm mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className={styles.inputField}
                                required
                            />
                        </div>

                        <div className={styles.inputMainBox}>
                            <label className="block text-[#CCCCCC] text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className={styles.inputField}
                                required
                            />
                        </div>



                        <button
                            type="submit"
                            className={styles.createAccountBtn}
                        >
                            Proceed to Sign In
                        </button>
                    </form>


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signin;
