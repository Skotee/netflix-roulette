import { React } from 'react';
import './App.css';
import Greeting from './Greeting/Greeting';
import SecondCounter from './SecondCounter/SecondCounter';
import Counter from './Counter/Counter';
import Count from './Count/Count';

function App() {
	return (
		<div className="App">
			<h1>React.createElement</h1>
			<Greeting name={'Andrzej'} />
			<br></br>
			<h1>React.Component</h1>
			<Counter />
			<br></br>
			<h1>React.PureComponent</h1>
			<Count />
			<br></br>
			<h1>Functional component</h1>
			<SecondCounter/>
		</div>
	);
}

export default App;
