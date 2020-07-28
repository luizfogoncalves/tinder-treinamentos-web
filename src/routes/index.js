import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Courses from '../pages/Courses'

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/course" component={Courses} />
        </Switch>
    )
}