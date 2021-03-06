import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withSuspense } from './hoc/withSuspense'

const MainRouter = () => {
	return (
		<Switch>
			<Route render={() => <Redirect to='/' />} />
		</Switch>
	)
}

export default MainRouter
