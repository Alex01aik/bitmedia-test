import React from 'react'
import './Table.scss'
import { Link } from 'react-router-dom'

const Table = ({items}) => {

    let Td = ({link, value, classname}) => {
        return <td
            className={classname}>
            <Link
                to={'/user/'+ link}>
                {value}
            </Link>
        </td>
    }

    return <>
            <div
                className="tableTitle">
                Users statictic
            </div>
            <table>
                <thead>
                    <tr
                        className="toprow">
                        <td>Id</td>
                        <td
                            className="name">
                            First name
                        </td>
                        <td
                            className="name">
                            Last name
                        </td>
                        <td>Email</td>
                        <td>Gender</td>
                        <td>Ip address</td>
                        <td>Total clicks</td>
                        <td>Total page views</td>
                    </tr>
                </thead>
                <tbody>
                    {(items) 
                        ? items.map(user => (
                            <tr
                                key={user.id}>
                                <Td
                                    link={user.id}
                                    value={user.id}/>
                                <Td
                                    link={user.id}
                                    value={user.first_name}
                                    classname="name"/>
                                <Td
                                    link={user.id}
                                    value={user.last_name}
                                    classname="name"/>
                                <Td
                                    link={user.id}
                                    value={user.email}/>
                                <Td
                                    link={user.id}
                                    value={user.gender}/>
                                <Td
                                    link={user.id}
                                    value={user.ip_address}/>
                                <Td
                                    link={user.id}
                                    value={user.total_clicks}/>
                                <Td
                                    link={user.id}
                                    value={user.total_page_views}/>
                            </tr>))
                        : <tr
                            className="empty"/>
                    }
                </tbody>
            </table>
        </>
}

export default Table