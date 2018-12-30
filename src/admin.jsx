import React,{ Component } from 'react';
import { Link,NavLink } from 'react-router-dom';
class Admin extends Component{
	constructor(props,context){
		super(props,context)
		console.log(props,context)
	}
	render(){
		return (
			<div>
				admin组件
				<br/>
				<Link to="/">去Index</Link>
				<Link to="/page1">page1</Link>

				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}
class Home extends Component{
	constructor(props,context){
		super(props,context)
		console.log(props,context)
	}
	render(){
		return (
			<div>我是home组件</div>
		)
	}
}
export default Admin;