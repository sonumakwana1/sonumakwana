import Navbar from "../Components/Navbar";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { __projectapiurl } from "../APP_URL";
import axios from "axios";
const ManageProject = () => {

    const [file, setFile] = useState("");
    const [gitlink, setGitLink] = useState("");
    const [livelink, setLiveLink] = useState("");
    const [ pList , setProjectList ] = useState([]);  
    const [output, setOutput] = useState();
    const [loading, setLoading] = useState(false);



    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };
 



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
  }, []);

    const handleSubmit = async (event) => {
        if (!gitlink|| !file || !livelink) {
            setOutput("Please fill all  field");
            return;
        }
  setLoading(true);

        event.preventDefault();
        var formData = new FormData();
        formData.append('gitlink', gitlink);
        formData.append('livelink', livelink);
        formData.append('caticon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };
       await axios.post(__projectapiurl + "save", formData, config).then((response) => {
            setGitLink("");
            setLiveLink("");
            setFile("");
            setOutput("✅Project Added Successfully....");
        });
          setLoading(false)
    };

const ManageProject = (_id,action) => {
  if(action=='delete'){
      axios.delete(__projectapiurl + "delete", {
                data: { _id }
            })
                .then(() => {
                    setProjectList(prev => prev.filter(pList => pList._id !== _id));
                })
                .catch(err => console.error("Error deleting user:", err));
    }
}
    return (
        <>
            <Navbar />
            <h1 className="heading">{output}</h1>
            <div className="form-section">
                <form className="form">

                    <p>Project Image</p>
                    <input type="file" className="file" onChange={handleChange} />
                    <p>Github Link</p>
                    <input type="text" value={gitlink} onChange={(e) => setGitLink(e.target.value)} placeholder="Project Github Link"/>
                    <p>Live Link</p>
                    <input type="text" value={livelink} onChange={(e) => setLiveLink(e.target.value)}
                    placeholder="Project Live Link" />
                    <button type="button" onClick={handleSubmit} disabled={loading}>Add Project</button>
                </form>
            </div>

            <h1 className="heading">Manage Project (Update and Delete Project)</h1>
        <div className="project-section">
            {
                 pList.map((row ,index)=>(
            <div className="projects" key={row._id}>
                <img src={row.caticonnm}/>
            
               <div className="actions">
                <a><Link to="/updateproject"><i class="fa-solid fa-pencil"></i></Link></a>
                <a  onClick={() => ManageProject(row._id, 'delete')}><i class="fa-solid fa-trash"></i></a>
              </div>
            </div>
                 ))}
            
        </div>
        </>
    )
}
export default ManageProject;