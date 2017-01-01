import React, {Component, PropTypes}from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router'
import Swiper from 'react-id-swiper';


class salesgoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true
        }
    }
    componentWillMount() {
        document.title="一元夺宝";
    }
    componentDidMount() {
        const header= { "X-Client-Agent":"weixin", "X-APIVersion":"2.0", "X-Client-ID":'123456'}
        this.props.dispatch(fetchPosts("querySaleGoodsBannerInfo",header))
    }
    componentWillReceiveProps(nextProps) {

      if(nextProps.posts.errorCode === 0){
        this.setState({
            loading:false
        })
      }
    }


    render() {
        if(this.state.loading){
            return(<div>loading</div>)
        }else{
            const {posts} = this.props;
            const params = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop:true,
          };
          return(
        	<div >
                <Swiper {...params} >
                {posts.data.banners.map((item)=>(
                        <div key={item.recordId} style = {{backgroundImage:`url(${item.imageUrl})`}}></div>
                    ))
            }
                </Swiper>

          <Link to="#" className="notice-bar">
            <i></i>
            <span>恭喜张三刚刚获得 <em>周六福3D皇冠金戒指</em></span>
          </Link>
  <Link  className="treasure-box"> 
    <div className="photo"><img src="../../public/images/treasure01.jpg" alt=""/></div>
    <div className="content">
      <div className="title">iMac 21.5 英寸一体机</div>
      <div className="intor">Core i5 处理器/8GB内存/1TB存储MK142CH/A</div>
      <div className="progress" data-total="10800" data-surplus="6006"><i style={{width:"80%"}}></i></div>
      <div className="total">总量 <i>10800</i></div>
      <div className="surplus">剩余 <i>6006</i></div>
      <div className="join">立即参与</div>
    </div>
  </Link>

  <Link className="treasure-box"> 
    <div className="photo"><img src="../../public/images/treasure02.jpg" alt=""/></div>
    <div className="content">
      <div className="title">iMac 21.5 英寸一体机</div>
      <div className="intor">Core i5 处理器/8GB内存/1TB存储MK142CH/A</div>
      <div className="progress" data-total="10" data-surplus="2"><i style={{width:"30%"}}></i></div>
      <div className="total">总量 <i>10</i></div>
      <div className="surplus">剩余 <i>2</i></div>
      <div className="join">立即参与</div>
    </div>
  </Link>
             </div>
        	)
        }
    }
}
salesgoods.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
  const { postsByApi } = state
  const {
    isFetching,
    items: posts
  } = postsByApi["querySaleGoodsBannerInfo"] || {
    isFetching: false,
    items: []
  }
  return {
    posts,
    isFetching
  }
}


export default connect(mapStateToProps)(salesgoods);

