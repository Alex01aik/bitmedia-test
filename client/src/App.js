import Main from'./pages/Main'
import User from'./pages/User'
import Users from'./pages/Users'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  const [history, setHistory] =
    useState([{title: 'Main', link: '/'}])
  const currentPage =
    history[history.length-1].link
  return (
    <>
    <Header page={currentPage} />
    <BrowserRouter>
      <div className="App">
        <Route
          exact path='/' >
          <Main
            history={history}
            setHistory={setHistory}/>
        </Route>
        <Route
          path='/user/:id'>
          <User
            history={history}
            setHistory={setHistory}/>
        </Route>
        <Route
          path='/users'>
          <Users
            history={history}
            setHistory={setHistory}/>
        </Route>
      </div>
    </BrowserRouter>
    <Footer page={currentPage}/>
    </>
  )
}

export default App
