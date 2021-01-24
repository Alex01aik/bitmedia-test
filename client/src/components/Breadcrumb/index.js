import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Breadcrumb.scss'

const Breadcrumb = ({pages, history, setHistory}) => {

    const currentPage = history[history.length-1].link
    
    useEffect(()=>{
        setHistory([
            {title: 'Main', link: '/'},
            ...pages
        ])
    }, [setHistory])

    const changeHistory = (page) => {
        if(page==='/'){
            setHistory([
                {title: 'Main', link: '/'}
            ])
        }else if(page!==window.location.pathname){
            setHistory([
                ...history
                    .slice(history
                        .findIndex(p=>p.link===page)-1,
                history.length-1)
            ])
        }  
    }
    return <div className="breadcrumb">
        {history.map(p =>
            (p.link === currentPage)
                ? <NavLink
                    className="active"
                    key={p.title}
                    to={p.link}
                    onClick={()=>changeHistory(p.link)}>
                        {p.title}
                </NavLink>
                : <NavLink
                    className="parent"
                    key={p.title}
                    to={p.link}
                    onClick={()=>changeHistory(p.link)}>
                        {p.title + " > "}
                </NavLink>
        )}
    </div>
}

export default Breadcrumb