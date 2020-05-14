import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import style from './style';

export default class NotFound extends Component {
	render() {
		return (
			<div class={`${style.home} page`}>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">404! Page not found.</h2>
					</div>
				</Card>
			</div>
		);
	}
}
