import React, {Component, PropTypes}from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router'
import Swiper from 'react-id-swiper';

import BuyPop from '../components/BuyPop';
import { getPrecent } from '../utils';


class GoodsInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            isShow:false,
            item:{},
        }
    }
    componentWillMount() {
        document.title="一元夺宝";
        console.log(this.props.location);
    }
    componentDidMount() {
        const header= {"X-Client-ID":'123456'}
        this.props.dispatch(fetchPosts("querySaleGoodsBannerInfo",header))
        this.props.dispatch(fetchPosts("querySaleGoodsList",header,{"pageindex":1,"pagesize":10}))
    }
    componentWillReceiveProps(nextProps) {
    }


    render() {
    	return(
    		    	<div>11</div> 
    		)
    }

  join(item){
    //弹出购买框
        const header= {"X-Client-ID":'123456'}
        const params = {"goodsno":item.goodsNo}
        this.setState({
          item:item
        })
        this.props.dispatch(fetchPosts("buyNumConfig",header,params));

  }
  buy(e){//提交表单
    console.log(e);
  }

}
GoodsInfo.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
  const { postsByApi } = state
  const {
    isFetching,
    items: BannerInfo
  } = postsByApi["querySaleGoodsBannerInfo"] || {
    isFetching: false,
    items: {}
  }
  const {
    items: GoodsList
  } = postsByApi["querySaleGoodsList"] || {
    items: {}
  }
  const {
    items: Config
  } = postsByApi["buyNumConfig"] || {
    items: {}
  }
  return {
    BannerInfo,
    GoodsList,
    Config,
    isFetching
  }
}


export default connect(mapStateToProps)(GoodsInfo);

