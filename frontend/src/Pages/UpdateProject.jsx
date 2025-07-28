import { useState,useEffect } from "react";
import axios from "axios";
import { __projectapiurl} from "../APP_URL";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
const UpdateProject =() => {

    const [project ,setProject] =useState();
    const [gitlink ,setGitLink] = useState();
    const [livelink ,setLiveLink] = useState();
    const [file ,setFile] =useState();
    const [output ,setOutput] = useState();
    const [loading ,setLoading] = useState(false);
    useEffect (()=>{
        axios.get(__projectapiurl+"fetch",{
            
        }).then((response)=>{
            const project = response.data[0];
            setGitLink(project.gitlink);
            setLiveLink(project.livelink);
            
    const handleChange = (event) => {
        setFile(project.caticonnm);
    };
 
        })
        

   
        
        
        
  setLoading(true);

    })



    
    return (
        <>
       <Navbar/>
            <h1 className="heading">{output}</h1>
            <div className="form-section">
                <form className="form">

                    <p>Project Image</p>
                    <input type="file" className="file"  />
                    <p>Github Link</p>
                    <input type="text" value={gitlink} onChange={(e) => setGitLink(e.target.value)} placeholder="Project Github Link"/>
                    <p>Live Link</p>
                    <input type="text" value={livelink} onChange={(e) => setLiveLink(e.target.value)}
                    placeholder="Project Live Link" />
                    <button type="button" >Update Project</button>
                </form>
            </div>

        </>
    )
}
export default UpdateProject;