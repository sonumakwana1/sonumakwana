import Navbar from "./Navbar";
import { useState } from "react";
import axios from 'axios';
import { __contactapiurl } from "../APP_URL";

const ContactSection = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("")
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        if (!name || !email || !message) {
            setOutput("Please fill all  field");
            return;
        }

        const contactDetails = { name, email, number, message };
        setLoading(true);

        await axios.post(__contactapiurl + 'save', contactDetails).then(() => {
            setName("");
            setEmail("")
            setMessage("")
            setOutput("✅ Message Sent Succesfully")
        }).catch((error) => {
            setOutput("✖️ Message Sent Failed")
        })
        setLoading(false)
    }
    return (
        <>
            <h1 className="heading">Contact Me</h1>
            <div className="form-section">
                <div className="skills">
                    <h1>Contact Details</h1>
                    <p><a href="telto:7471161211">7471161211</a></p>
                    <p><a href="mailto:sonumakwana1211@gmail.com">sonumakwana1211@gmail.com</a></p>
                </div>
                <form className="form">
                    <h1>{output}</h1>
                    <p>Name</p>
                    <input type="text" placeholder="Enter Name . . ." value={name} onChange={(e) => setName(e.target.value)} />
                    <p>Email</p>
                    <input type="email" placeholder="Enter Email . . ." value={email} onChange={(e) => setEmail(e.target.value)} />
                    <p>Number</p>
                    <input type="text" placeholder="Enter Number . . ." value={number} onChange={(e) => setNumber(e.target.value)} />
                    <p>Message</p>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message . . ."></textarea>
                    <br />
                    <button type="button" onClick={handleSubmit} disabled={loading}>Contact Now</button>
                </form>
            </div>
        </>
    )
}
export default ContactSection;