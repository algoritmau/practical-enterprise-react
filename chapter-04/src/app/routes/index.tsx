import { About, Home } from 'app/views/pages'
import { Route, Switch } from 'react-router-dom'

export const Routes = () => (
  <Switch>
    <Route exact path="/about" component={About} />
    <Route exact path="/" component={Home} />
  </Switch>
)
