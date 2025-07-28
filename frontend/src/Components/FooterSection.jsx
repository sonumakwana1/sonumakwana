import { Link } from "react-router-dom";
const FooterSection = () => {
    return (
        <>
        <footer>
            <div className="footer">
                <h3><img src="assets/images/logo.png" alt="" /></h3>
                <p><a href="telto:7471161211" target="_blank">7471161211</a></p>
                <p><a href="mailto:sonumakwana1211@gmail.com"target="_blank">sonumakwana1211@gmail.com</a></p>
                <p><a href="https://github.com/sonumakwana1" target="_blank"><i className="fa-brands fa-github"></i></a> 
                <a href="https://www.linkedin.com/in/sonu-makwana-151451330" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/makwana_sonu004?igsh=MWo0cGRnbWxremN6Zg==" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="mailto:sonumakwana1211@gmail.com" target="_blank"><i className="fa-regular fa-envelope"></i></a>
                </p>
            </div>
            <div className="footer">
                <h3>Quick Links</h3>
                <p><Link to="/">Home </Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/project">Project</Link></p>
                <p><Link to="/contact">Contact</Link></p>
                <p><Link to="/login">Login</Link></p>
            </div>
           <div className="footer">
                <h3>Quick Links</h3>
                <p><Link to="/">Home </Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/project">Project</Link></p>
                <p><Link to="/contact">Contact</Link></p>
                <p><Link to="/login">Login</Link></p>
            </div>
        </footer>
        </>
    )
}
export default FooterSection;