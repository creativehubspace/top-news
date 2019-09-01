import React from 'react';
import styled from 'styled-components';

const PagStyles = styled.ul`
  display: flex;
  justify-content: center;
  li {
    list-style-type: none;
    margin-right: 10px;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PagStyles>
        {pageNumbers.map(number => (
            <li key={number} className='page-item'>
                <button onClick={() => paginate(number)} className='page-link'>
                    {number}
                </button>
            </li>
        ))}
      </PagStyles>
    </nav>
  );
};

export default Pagination;