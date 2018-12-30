import React,{Component} from 'react';
import { Link,NavLink } from 'react-router-dom';
class Page1 extends Component{
	constructor(props){
		super(props)
		console.log(this.props)
	}
	//render函数是写虚拟DOM的函数，原理是动态创建DOM片段
	render(){
		return (
			<div>Page1组件：
				<Link to="page2">page2</Link>
				{this.props.children}
			</div>
		)
	}
}
export default Page1;