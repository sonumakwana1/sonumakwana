import { __projectapiurl } from "../APP_URL";
import { useState ,useEffect } from "react";
import axios from "axios";

const ProjectSection = () => {
        
const [ pList , setProjectList ] = useState([]);   
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    axios.get(__projectapiurl+ "fetch", {
     
    }).then((response) => {
      setProjectList(response.data);
      setLoading(false);
    })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load project data");
        setLoading(false);
      });
  }, []);
    return (
        <>
        <h1 className="heading">Project Section</h1>
        <div className="project-section">
            {
                 pList.map((row ,index)=>(
            <div className="projects" key={row._id}>
                <img src={row.caticonnm}/>
            
               <div className="actions">
                <a href={row.gitlink} target="_blank">github</a>
                <a href={row.livelink} target="_blank">Live</a>
              </div>
            </div>
                 ))}
            
        </div>
        </>
    )
}
export default ProjectSection;