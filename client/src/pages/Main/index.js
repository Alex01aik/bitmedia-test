import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import './Main.scss'
import phone from '../../assets/phone.png'
import design from '../../assets/design.svg'
import retina from '../../assets/retina.svg'
import secure from '../../assets/secure.svg'
import {ReactComponent as BottomCurve } from '../../assets/bottom.svg'
import {ReactComponent as TopCurve } from '../../assets/top.svg'
import Card from '../../components/Card'

const Main = ({setHistory}) => {
    useEffect(() => {
        setHistory(
            [{title: 'Main', link: window.location.pathname}]
        )
    }, [setHistory])
    
    return <>
        <TopCurve
            className="topBackground"
            width="100%" />
        <div
            className="wrapper">
            <div
                className="top">
                <div
                    className="topic">
                    <h1
                        className="mainTitle">
                        <b>Brainstorming</b> for
                        <br />desired perfect Usability
                    </h1>
                    <p className="subtitle">
                        Our design projects are fresh and simple 
                        and will benefit your business greatly. 
                        Learn more about our work!
                    </p>
                    <NavLink
                        to='/users'>
                        <button
                            className="mainpageTopButton">
                            Views Stats
                        </button>
                    </NavLink>
                </div>
                <img
                    className="mobileApp"
                    src={phone}
                    alt="mobile"
                    width="267"
                    height="500"/>

            </div>
        <div
            className="main">
            <h2>
                Why <b>small business owners<br /> love</b> AppCo?
            </h2>
            <p
                className="subtitle">
                Our design projects are fresh and simple and will benefit 
                your business greatly. Learn more about our work!
            </p>
            <div
                className="cards">
                <Card
                    image={design}
                    title="Clean Design"
                    description="Increase sales by showing true dynamics of your website." />
                <Card
                    image={secure}
                    title="Secure Data"
                    description="Build your online store’s trust using Social Proof & Urgency." />
                <Card
                    image={retina}
                    title="Retina Ready"
                    description="Realize importance of social proof in customer’s purchase decision." />
            </div>
            <form
                className="subscribeBlock">
                <input
                    className="subscribeInput"
                    type="email"
                    placeholder=" Enter your email">
                </input>
                <button
                    className="subscribeButton">
                    Subscribe
                </button>
            </form>
        </div>
        </div>
        <BottomCurve
            width="100%"
            className="bottomBackground"/>
    </>
}

export default Main