import React from 'react'
import { Route } from 'react-router'

import app from './containers/app'// 本地服务
import salesgoods from './containers/salesgoods'// 一元夺宝
import GoodsInfo from './containers/GoodsInfo'// 详情页


const routes = (
	<Route>
	    <Route path="/" component={app} />
	    <Route path="/salesgoods" component={salesgoods} />
	    <Route path="/GoodsInfo" component={GoodsInfo} />
	</Route>

	)
export default routes;