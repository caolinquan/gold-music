import React,{ Component } from 'react'

/* props:
	1.title
	2.more
	3.appList
*/

class AppBox extends Component
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		const { title,more,appList } = this.props;
		
		return (
				<div className="appBox">
					<a href={ more }>
						<h2>{ title }</h2>
					</a>
					<div className="entry-body">
						{
							appList.map( app =>(
								<div className="app-box">
									<a href={ app.url }>
										<img src={ app.icon } alt=""/>
										<p>{ app.name }</p>
									</a>
								</div>
							))
						}
					</div>
				</div>
			)
	}
}

export default AppBox;