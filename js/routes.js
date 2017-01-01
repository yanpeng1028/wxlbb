import React from 'react'
import { Route } from 'react-router'

import app from './containers/app'// 本地服务
import salesgoods from './containers/salesgoods'// 一元夺宝


const routes = (
	<Route>
	    <Route path="/" component={app} />
	    <Route path="/salesgoods" component={salesgoods} />
	</Route>

	)
export default routes;