import React from 'react'
import { useState, useEffect } from 'react'
import { BiSolidBellRing } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';

const Fetch = ({ onDataFetched }) => {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  //To paginate
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  //----To Extract only month and date 
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const month = date.toLocaleString('default', { month: 'short' }); // Get short namw of the month
    const day = date.getDate().toString().padStart(2, '0'); // Get the day and add a 0 to front if its single digit
    return `${month} ${day}`; // Return formatted date
  };

  useEffect(() => {
    fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setTasks(data);
        setLoading(false);
        onDataFetched(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, [onDataFetched]);

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
          {currentPageData.map((task) => (
            <tr key={task.id}>
              <td>
                <span className="icon-box">
                  <BiSolidBellRing />
                </span>
              </td>

              <td>
                {task.todo}<br />
                {!task.completed && <button className='done-button'>Mark as done</button>}

              </td>

              <td className={task.completed ? 'Done' : 'In-Progress'}>
                {task.completed ? 'Done' : 'In-Progress'}
              </td>

              <td>
                {formatDate(task.createdAt)}
              </td> {/* Display formatted date */}

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