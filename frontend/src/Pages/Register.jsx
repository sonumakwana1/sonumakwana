import { useState } from "react";
import axios from 'axios';
import { __userapiurl } from "../APP_URL";
import Navbar from "../Components/Navbar";
import FooterSection from "../Components/FooterSection";
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!name || !email || !number || !password) {
            setOutput("Please fill in all fields.");
            return;
        }

        const userDetails = { name, email, number, password };
        setLoading(true);
        try {
            await axios.post(__userapiurl + 'save', userDetails);
            setName("");
            setEmail("");
            setNumber("");
            setPassword("");
            setOutput("✅ Registered successfully!");
        } catch (error) {
            console.error(error);
            setOutput("❌ Registration failed.");
        }
        setLoading(false);
    };

    return (
        <>
            <Navbar />
            
                    <h1 className="heading">Register Here!</h1>
            <div className="form-section">
                <form className="form">
                    <h1 className="heading">{output}</h1>
                    <p>Full Name</p>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <p>Email Address</p>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p>Mobile Number</p>
                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
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
                        {loading ? "Registering..." : "Register Now"}
                    </button>
                </form>
            </div>
            <FooterSection/>
        </>
    );
}

export default Register;
