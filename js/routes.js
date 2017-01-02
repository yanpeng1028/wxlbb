import React from 'react'
import { Route } from 'react-router'

import app from './containers/app'// 本地服务
import salesgoods from './containers/salesgoods'// 一元夺宝
import GoodsInfo from './containers/GoodsInfo'// 详情页
import address from './containers/address'// 收货地址
import addressAdd from './containers/addressAdd'// 新增收货地址
import addressModify from './containers/addressModify'// 修改收货地址


const routes = (
	<Route>
	    <Route path="/" component={app} />
	    <Route path="/salesgoods" component={salesgoods} />
	    <Route path="/GoodsInfo" component={GoodsInfo} />
	    <Route path="/address" component={address} />
	    <Route path="/addressAdd" component={addressAdd} />
	    <Route path="/addressModify" component={addressModify} />
	</Route>

	)
export default routes;
