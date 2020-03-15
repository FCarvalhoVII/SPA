import React from 'react'
import Home from './components/Home'
import Search from './components/pages/Search'
import Library from './components/pages/Library'
import { Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={Search} />
            <Route path="/library" component={Library} />
            <Route component={() => <h2>Page 404! Not found.</h2>} />
        </Switch>
    )
}

export default Routes