import { __contactapiurl } from "../APP_URL";
import Navbar from "../Components/Navbar";
import { useState ,useEffect } from "react";
import axios from "axios";


const Messages = () => {
    
  const [message, setMessage] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios.get(__contactapiurl+ "fetch", {
     
    }).then((response) => {
      console.log(response.data)
      setMessage(response.data);
      setLoading(false);
    })
      .catch((error) => {
        console.error("Error fetching messages:", error);
        setError("Failed to load messages data");
        setLoading(false);
      });
  }, []);

  const manageMessage = (_id,action) =>{
    if(action=='delete'){
      axios.delete(__contactapiurl + "delete", {
                data: { _id }
            })
                .then(() => {
                    setMessage(prev => prev.filter(message => message._id !== _id));
                })
                .catch(err => console.error("Error deleting user:", err));
    }
  }

    return (
        <>
        <Navbar/>
        <div className="message-section">
            {
                 message.map((row ,index)=>(
            <div className="message" key={row._id}>
                <h5>{row.name}</h5>
                <h5>{row.email}</h5>
                <h5>{row.number}</h5>
                <p>{row.message}</p>
                <p><a  onClick={() => manageMessage(row._id, 'delete')}><i class="fa-solid fa-trash"></i></a></p>
            </div>
          ))  }
        </div>
        </>
    )
}
export default Messages;