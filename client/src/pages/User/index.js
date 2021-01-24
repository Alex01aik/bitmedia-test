import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../api/api'
import Breadcrumb from '../../components/Breadcrumb'
import Chart from '../../components/Chart'
import './User.scss'

const User = ({history, setHistory}) => {
    const pageId = useParams().id
    const [userinfo, setUserinfo] = useState()
    const [period, setPeriod] = useState({
        start: 1,
        end: 30
    })
    const [chartprops, setChartProps] = useState({
        dates: [],
        clicks: [],
        views: []
    })
    const allvalues = (values) => 
        values
            .slice(chartprops.dates
                                .indexOf(period.start), 
                    chartprops.dates
                                .indexOf(period.end)+1)
    
    useEffect(() => {
        API.getUserStatistics(pageId)
            .then(res => {
                setUserinfo(res.user)
                const respDates = [...res.stats.map(stat => 
                    parseInt(stat.date.split('-')[2]))]
                setChartProps({
                        dates: respDates,
                        clicks: [...res.stats.map(stat => stat.clicks)],
                        views: [...res.stats.map(stat => stat.page_views)]     
                })
                setPeriod({
                    start: respDates[respDates.length-1]-7,
                    end:  respDates[respDates.length-1] 
                })
            })
    }, [pageId])

    if(period.start < chartprops.dates[0]){
        setChartProps({
            dates: [
                chartprops.dates[0]-1, 
                ...chartprops.dates],
            clicks: [
                0, 
                ...chartprops.clicks],
            views: [
                0, 
                ...chartprops.views]        
        })
    }
    if(period.end > chartprops.dates[chartprops.dates.length-1]){
        setChartProps({
            dates: [
                ...chartprops.dates, 
                chartprops.dates[chartprops.dates.length-1]+1],
            clicks: [
                ...chartprops.clicks, 0],
            views: [
                ...chartprops.views, 0]        
        })
    }
    return (userinfo)
    ? <div className="userWrapper">
        <Breadcrumb
            history={history}
            setHistory={setHistory}
            pages={[
                {
                    title: 'Users statistics', 
                    link: '/users'
                },
                {
                    title: userinfo.first_name + ' ' + userinfo.last_name, 
                    link: window.location.pathname
                }
            ]}/>
        <div
            className="panel">
        <h3
            className="fullname">
            {userinfo.first_name}
            &ensp;
            {userinfo.last_name}
        </h3>
        <div
            className="period">
            <div>
                <span>
                    From
                </span>
                <input
                    type="number"
                    min='1'
                    max='30'
                    value={period.start}
                    onChange={
                        (e) =>
                        setPeriod(
                            {
                                ...period, 
                                start: parseInt(e.target.value)
                            }
                        )}/>
            </div>
            <div>
                <span>
                    To
                </span>
                <input
                    type="number"
                    min='1'
                    max='30'
                    value={period.end}
                    onChange={
                        (e) =>
                        setPeriod(
                            {
                                ...period, 
                                end: parseInt(e.target.value)
                            }
                        )}/>
            </div>
        </div>
        </div>
        <div
            className="chart">
            <h4
                className="chartTitle">
                Clicks
            </h4>
            <Chart
                x={allvalues(chartprops.dates)}
                y={allvalues(chartprops.clicks)} />
        </div>
        <div
            className="chart">
            <h4
                className="chartTitle">
                Views
            </h4>
            <Chart
            x={allvalues(chartprops.dates)}
            y={allvalues(chartprops.views)} />
        </div>
    </div>
    : <></>
}

export default User