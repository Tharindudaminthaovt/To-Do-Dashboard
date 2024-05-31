import React from 'react'
import { useState,useEffect } from 'react'
import { BiSolidBellRing } from 'react-icons/bi';


const Fetch = () => {

    const [tasks,setTasks]=useState([]);
    const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

    useEffect(()=>{
        fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
        .then((res)=>{
            if (!res.ok) {
                throw new Error('Network response was not ok');
              }
            return res.json();
        })
        .then((data)=>{
            // console.log(data);
            setTasks(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false); // Set loading to false if there's an error
          });
    },[]);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
  return (
    <table className="task-table">
        
        <tbody>
            {tasks.map((task)=>(
                <tr key={task.id}>
                    <td><button><BiSolidBellRing/></button></td>
                    <td>{task.todo}</td>
                    <td><button>Done</button></td>
                    <td>{task.createdAt}</td>
                </tr>
            ))}
        </tbody>
    </table>
  );
};

export default Fetch