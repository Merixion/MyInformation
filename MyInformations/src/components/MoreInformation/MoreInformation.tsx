import { Link } from 'react-router-dom';
import styles from './MoreInformation.module.css';
export function MoreInformation() {
	return (
		<div className={styles.InformationMore}>
			<Link to='/' className={`StandardLink ${styles.LinkBack}`}>
				Back
			</Link>
			<p>Languages</p>
			<ul>
				<li>Russian(Native)</li>
				<li>Hebrew(Beginner)</li>
			</ul>
			<p>Place of residence: </p>
			<h1>Israel, Haifa</h1>
			<p>React Skills:</p>
			<ul>
				<li>Creating functional components</li>
				<li>JSX syntax and elements</li>
				<li>Component export and import</li>
				<li>React project structure</li>
				<li>Passing props between components</li>
				<li>Props destructuring</li>
				<li>TypeScript props typing</li>
				<li>useState hook</li>
				<li>Component state management</li>
				<li>Array filtering through state</li>
				<li>onClick event handlers</li>
				<li>onChange for input elements</li>
				<li>onKeyDown events (Enter, Escape)</li>
				<li>Setting up routes (Routes, Route)</li>
				<li>Navigation with Link component</li>
				<li>CSS Modules</li>
				<li>Inline styles in JSX</li>
				<li>Conditional class styling</li>
				<li>Real-time search and filtering</li>
				<li>Product catalog with grid layout</li>
				<li>Responsive component design</li>
				<li>Working with data arrays (map, filter, includes)</li>
				<li>Creating reusable components</li>
			</ul>
		</div>
	);
}
