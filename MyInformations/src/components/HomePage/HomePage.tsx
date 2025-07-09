import type { Information } from "../../data/MaximBykoIanko"
import styles from './HomePage.module.css'
import { Link } from "react-router-dom"
import '../../App.css'
export function HomePage({User}: {User: Information}){


  return (
		<div className={styles.AllHomePage}>
			<div className={styles.UserInformation}>
				<div className={styles.ImageInfo}>
					<img src={User.image} alt={User.name} />
				</div>

				<div className={styles.textInfo}>
					<p>Name: {User.name}</p>
					<p>Age: {User.age}</p>
					<p>About Me: {User.description}</p>
					<Link to='/MoreInformation' className='StandardLink'>
						more details
					</Link>
				</div>
			</div>
		</div>
	);
}