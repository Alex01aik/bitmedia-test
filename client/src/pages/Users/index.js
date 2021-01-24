import React, { useState, useEffect } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import Pagination from '../../components/Pagination'
import Table from '../../components/Table'
import { API } from '../../api/api'
import './Users.scss'

const Users = ({history, setHistory}) => {
    const [currentPage, setPage] = useState(1)
    const [users, setUsers] = useState({
        items: [],
        all: 0
    })
    let changePage = async(page) => {
        setPage(page)
        API.getUsers(page)
            .then(response =>
                setUsers(response))
    }
    useEffect(() => {
        changePage(1)
    }, [])
    
    return <>
        <div
            className="usersWrapper">
            <Breadcrumb
                pages={[
                    {
                        title: 'Users statistics',
                        link: window.location.pathname
                    }
                ]}
                history={history}
                setHistory={setHistory} />
            <Table
                items={users.items}/>
            <Pagination
                currentPage={currentPage}
                users={users}
                changePage={changePage}
            />
        </div>
        </>
}

export default Users