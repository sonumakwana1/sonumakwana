import { useState ,useEffect} from "react";
import Navbar from "../Components/Navbar"
import axios from "axios";
import { Link } from "react-router-dom";
import { __projectapiurl ,__contactapiurl, __userapiurl} from "../APP_URL";
const AdminHome =() => {

    const [project ,setProjectList] = useState([]);
    const [message ,setMessageList] = useState([]);
    const [user , setUserList] = useState([]);
    const [loading ,setLoading] = useState(false)
    const [error ,setError] = useState("");
      useEffect(() => {
    axios.get(__projectapiurl+ "fetch", {
     
    }).then((response) => {
      console.log(response.data)
      setProjectList(response.data);
      setLoading(false);
    })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to load user data");
        setLoading(false);
      });

      axios.get(__contactapiurl+"fetch",{

      }).then((response)=>{
        setMessageList(response.data)
        setLoading(false)
      })

         axios.get(__userapiurl+"fetch",{
             params: { role: "admin" }
      }).then((response)=>{
        console.log(response.data)
        setUserList(response.data)
        setLoading(false)
      })

  }, []);

    return (
        <>
        <Navbar/>
        <div className="main-box">
{
        user.map((row,index)=>(
               <div className="box" key={row._id}>
                <h2>{row.name}</h2>
                <h2>{row.email}</h2>
            </div>
            ))
}
           <Link to="/manageproject"> <div className="box">
                <h1>Total Projects</h1>
                <p>{project.length}</p>
            </div>
            </Link>

           <Link to="/message"> <div className="box">
                <h1>Total Messages</h1>
                <p>{message.length}</p>
            </div></Link>
        </div>
        </>
    )
}
export default AdminHome