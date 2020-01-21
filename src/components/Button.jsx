import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getNews} from '../redux/actions/index'

const containerStyle = {
    textAlign:"center"
  };
  const btnStyle = {
  padding:"10px 15px",
  backgroundColor:"none",
  border:"none",
  fontSize: "18px",
  outline:"none"
  }


class Button extends Component {
    render() {
        return (
            <div  style={containerStyle}>
                <button 
                 style={btnStyle}
                onClick={this.props.getNews}>Press to see news</button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    getNews: getNews,
};


export default connect(null, mapDispatchToProps)(Button);