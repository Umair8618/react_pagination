import React, { useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [active, setActive] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-end'>
        {pageNumbers.map((number, index) => (
          <li key={index} className='page-item'>
            <div 
              onClick={() => {
                paginate(number);
                setActive(number);
              }} 
              className={active === number ? 'page-link active': 'page-link'}
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;