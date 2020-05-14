import preact  from 'preact';
import Card from 'preact-material-components/Card'
import 'preact-material-components/Card/style.css'
import 'preact-material-components/Button/style.css'
import style from './style'

const  About  = () => (
			<div class={`${style.home} page`}>
				<Card>
					<div class={style.cardBody}>
						this is the about page 		
					</div>
				</Card>
			</div>
		)
	
export default About
