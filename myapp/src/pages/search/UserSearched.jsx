import React, { useState , useEffect } from 'react';
import './StyleUserSearched.css';
import Spinner from '../spinner/Spinner';

function UserSearched({ searchData, isLoading, isError , key }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);

  const handleOpenUser = (url) => {
    window.open(url, '_blank');
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    if (currentPage === 1) {
      setUsers(searchData?.items || []);
    } else if (searchData) {
      setUsers((prevUsers) => [...prevUsers, ...searchData.items]);
    }
  }, [searchData, currentPage]);

  return (
    <>
      {isLoading && !users && <Spinner />}
      {isError && !users && (
        <p className='no-users'>Unknown Error occurred. Please try again later</p>
      )}
      {users?.length > 0 && (
        <ul className='user-container'>
          {users?.map((item, index) => (
            <li className='user-list' key={index}>
              <img
                className='user-image'
                src={item?.avatar_url}
                alt={item?.login}
                onClick={() => handleOpenUser(item?.html_url)}
              />
              <p className='user-name' onClick={() => handleOpenUser(item?.html_url)}>
                {item?.login}
              </p>
            </li>
          ))}
        </ul>
      )}
      {users.length < searchData?.total_count && (
        <button className='load-more-btn' onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  );
}

export default UserSearched;

