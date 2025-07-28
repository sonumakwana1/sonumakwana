import { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { __userapiurl } from "../APP_URL";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FooterSection from "../Components/FooterSection";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!email || !password) {
            setOutput("Please enter both email and password.");
            return;
        }

        const userDetails = { email, password };
        setLoading(true);
        try {
            const response = await axios.post(__userapiurl + "login", userDetails);
            const user = response.data.userDetails;

            // Store only safe public values
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("name", user.name);
            localStorage.setItem("email", user.email);
            localStorage.setItem("number", user.number);
            localStorage.setItem("role", user.role);
            localStorage.setItem("info", user.info);

            setOutput("Login successful!");
            if (user.role === "admin") {
                navigate("/adminhome");
            } else { 
                navigate("/");
            }
        } catch (error) {
            setOutput("❌ Invalid email or password.");
            setEmail("");
            setPassword("");
        }
        setLoading(false);
    };

    return (
        <>
   <Navbar/>
      <h1 className="heading">Login Here</h1>
            <div className="form-section">
                <form className="form">
                 <h1 className="heading">{output}</h1>
                 <p>Email Address</p>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                 <p>Password</p>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  
                    <button
                        type="button"
                        className="r-btn"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login Now"}
                    </button>
                    <br />
                    <br />
                       <p> <Link to="/register">Click Here to Create a new account</Link></p>
                </form>
            
            </div>
            <FooterSection/>
        </>
    );
}

export default Login;
