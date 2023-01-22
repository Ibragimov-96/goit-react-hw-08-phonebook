import React, { Component } from 'react';
import { nanoid } from 'nanoid';
class Components extends Component{
    
    render(){
    return (<><div key={nanoid()}>{this.props.children}</div></>)}
}
export default Components