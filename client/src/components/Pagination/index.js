import React, { useState } from 'react'
import './Pagination.scss'

const Pagination = ({currentPage, users, changePage}) => {

    let pages = []
    let pagesCount = Math.ceil(users.all / users.items.length)
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)

    let portionCount = Math.ceil(pagesCount / 5)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftBorder = (portionNumber - 1) * 5 + 1
    let rightBorder = portionNumber * 5

    return <div className="pagination">
                {(portionNumber===1)
                    ? <div
                        className="arrow left"
                        />
                    : <div
                        className="arrow left activeArrow"
                        onClick={() =>
                            setPortionNumber(portionNumber-1)}
                    />}
                {pages
                .filter(page => page >= leftBorder
                                && page <= rightBorder)
                .map(page => {
                    let classname
                    (currentPage===page)
                    ? classname = "page activePage"
                    : classname = "page"
                    return (
                        <div
                            key={page}
                            className={classname}
                            onClick={() =>
                                changePage(page)}>
                            <span>{page}</span>
                        </div>
                        )
                })}
                {(portionNumber===portionCount)
                    ? <div
                        className="arrow right"/>
                    : <div
                        className="arrow right activeArrow"
                        onClick={() =>
                            setPortionNumber(portionNumber+1)}/>
                }
                
            </div>
}

export default Pagination