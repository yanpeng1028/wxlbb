import React, {Component, PropTypes}from 'react';

class app extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'index';
        this.id = props.id || 'allmap';
    }
    componentWillMount() {
       document.title = "优惠券说明"
    }
    componentDidMount() {
      this._map = new BMap.Map(this.id);
      this._map.centerAndZoom(new BMap.Point(120.19, 30.30), 16);
      this._local = new BMap.LocalSearch(this._map, {
      renderOptions: { map: this._map },
      onInfoHtmlSet: poi => {
        if (typeof this.props.onSelect === 'function') {
          this.props.onSelect(poi.marker.getPosition());
        }
      }
    });
    }

    render() {
        return(
        <div>
          <input onChange={this.search.bind(this)} />
          <div id={this.id} style={{width:"100%", height:300}}></div>
         </div>
        );
    }
    search(event) {
      this._local.search(event.target.value);
    }
}

app.proTypes = {

  id: React.PropTypes.string,

  onSelect: React.PropTypes.func
}

export default app;
