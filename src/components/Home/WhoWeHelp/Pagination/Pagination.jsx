import React from 'react';


function Pagination({postsPerPage, totalPosts}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage) ; i++) {
        pageNumbers.push(i);
    }


    return (
        <>
            {pageNumbers.map(number=>(
                <button key={number}>{number}</button>
            ))}
        </>
    );
}

export default Pagination;