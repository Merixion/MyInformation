import { Maxim } from './data/MaximBykoIanko';
import { HomePage } from './components/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { MoreInformation } from './components/MoreInformation/MoreInformation';
import './App.css';

function App() {


  return (
		<>
			<Routes>
				<Route path='/' element={<HomePage User={Maxim} />}></Route>
				<Route path='/MoreInformation' element={<MoreInformation/>}></Route>
			</Routes>
		</>
	);
}

export default App
