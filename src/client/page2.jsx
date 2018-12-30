import React,{ Component } from 'react';
class Page2 extends Component{
	constructor(props){
		super(props)
	}
	//render函数是写虚拟DOM的函数，原理是动态创建DOM片段
	render(){
		return (
			<div>Page2</div>
		)
	}
}
export default Page2;