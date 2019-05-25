
//1.创建reducer
function reducer(preState,action)
{
	switch (action.type) {
		case "increment":
			return {
				counter:preState.counter + 1
			};
		default:
			return preState;
	}
}
//2.创建store
var store = createStore(reducer);
//3.注入store
ReactDOM.render(
	<Provider store= {store} >
		<BrowserRouter>
			<App />	
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));
//4.connect 容器组件
//counter.js

var counter = (props)=>{
	return (
		<span>{props.counter}</span>
	)
}

export default connect(mapStateToProps,mapDispatchToProps)(counter);