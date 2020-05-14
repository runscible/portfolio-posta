import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import About from '../routes/about'
import Works from '../routes/works'
import Blog from '../routes/blog'
import NotFound from '../routes/404'

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<About path="/" />
					<Works path='/works'/>
					<Blog path='/blog'/>
					<NotFound default />
				</Router>
			</div>
		);
	}
}
