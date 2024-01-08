import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import "./bootstrap.min.css";
import "./Signup.css";

// ... (previous imports and styles)

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notice, setNotice] = useState("");

    const signupWithUsernameAndPassword = async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                navigate("/");
            } catch {
                setNotice("Sorry, something went wrong. Please try again.");
            }     
        } else {
            setNotice("Passwords don't match. Please try again.");
        }
    };

    const handleFormSubmit = (e) => {
        // Add any additional form-level logic here
        signupWithUsernameAndPassword(e);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <form className="col-md-4 mt-3 pt-3 pb-3" onSubmit={handleFormSubmit}>
                    {/* ... (previous form elements) */}
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary pt-3 pb-3">
                            Signup
                        </button>
                    </div>
                    <div className="mt-3 text-center">
                        <span>
                            Go back to login? <Link to="/">Click here.</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
