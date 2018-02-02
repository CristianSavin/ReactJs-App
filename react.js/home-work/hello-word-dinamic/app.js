class Word extends React.Component {
	constructor(props) {
		super(props);
		this.state = { text: 'stranger !'}
	};

	handleChange(input) {
		(input.target.value == '') ? 
		this.setState({text: 'stranger!'}) : 
		this.setState({text: input.target.value})
	};

	render(){
		return (
			<div>
				<span>Hello, </span>
				<span>{this.state.text}</span>
				<div>
					<input type="text" onChange={(input) => {this.handleChange(input)}} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Word />,
	document.getElementById("content")
)