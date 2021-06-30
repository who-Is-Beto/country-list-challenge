import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import CountryPage from '../pages/CountryPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/country/:id' component={CountryPage} />
        <Route exact path='/' component={HomePage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter
