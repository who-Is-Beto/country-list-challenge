import { useContext } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import CountryPage from '../pages/CountryPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'
import { StoreContext } from '../store/StoreProvider'

const AppRouter = () => {
  const [store] = useContext(StoreContext)
  const mainClass = store.darkMode ? 'is-dark-mode' : 'is-light-mode'
  return (
    <main className={mainClass}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/country/:id' component={CountryPage} />
          <Route exact path='/' component={HomePage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </Router>
    </main>
  )
}

export default AppRouter
