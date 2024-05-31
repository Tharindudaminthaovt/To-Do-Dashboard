import React from 'react'
import { useState,useEffect } from 'react'
import { BiSolidBellRing } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';

const Fetch = ({onDataFetched}) => {

    const [tasks,setTasks]=useState([]);
    const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  //To paginate
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  

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
            onDataFetched(data);
        })
        .catch((error) => {
            setError(error);
            setLoading(false); // Set loading to false if there's an error
          });
    },[onDataFetched]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
      };

      const offset = currentPage * itemsPerPage;
      const currentPageData = tasks.slice(offset, offset + itemsPerPage);
      const pageCount = Math.ceil(tasks.length / itemsPerPage);

    if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
  return (
    <div>
    <table className="task-table">
        
        <tbody>
            {currentPageData.map((task)=>(
                <tr key={task.id}>
                    <td><button><BiSolidBellRing/></button></td>
                    <td>{task.todo}</td>
                    <td><button>Done</button></td>
                    <td>{task.createdAt}</td>
                </tr>
            ))}
        </tbody>
    </table>
    <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
      </div>
  );
};

export default Fetch