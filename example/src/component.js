import React, {
	Component
} from 'react'

import {
	AppLoader
} from 'xr-app-loader'

export default class ExampleComponent extends Component {

	render() {
		let currentAppPath = this.props.payload.get('currentAppPath')
		return (
			<div>
				<a 
					style={{textDecoration:"underline", marginRight:40}} 
					onClick={this.props.helloWorldClick}>
					hello world
				</a>
				<a 
					style={{textDecoration:"underline"}} 
					onClick={this.props.aboutClick}>
					about
				</a>
				{currentAppPath?<AppLoader name={currentAppPath} /> : null}
			</div>
		)
	}
}