var CONTACTS = [
	{
		id: 1,
		name: 'Darth Vander',
		phoneNumber: '+2362363263226',
		image: 'img/darth.gif',
		email: 'darthVander@gmail.ru',
		text: 'this is my best friend, lorem ipsum dolor sit amet'
	},
	{
		id: 2,
		phoneNumber: '+87969568568',
		name: 'Princess Leia',
		image: 'img/leia.gif',
		email: 'princessaLeia@gmail.ru',
		text: 'this is my best friend, lorem ipsum dolor sit amet'
	},
	{
		id: 3,
		name: 'Luke Skywalker',
		phoneNumber: '+435674763222',
		image: 'img/luke.gif',
		email: 'lukeSkywalker@gmail.ru',
		text: 'this is my best friend, lorem ipsum dolor sit amet'
	},
	{
		id: 4,
		name: 'Chewbacca',
		phoneNumber: '+315645578742',
		image: 'img/chewbacca.gif',
		email: 'chewbacca@gmail.ru',
		text: 'this is my best friend, lorem ipsum dolor sit amet'
	}
];

var Contact = React.createClass({
	getInitialState: function(){
		return {isOpened : false};
	},
	handleClick: function(){
		this.setState({
			isOpened: !this.state.isOpened
		});
	},
	render: function() {
		return(
			<li className='contact' onClick={this.handleClick}>
				<img className='contact-image' src={this.props.image} width='60px' height='60px' />
				<div className='contact-info'>
					<div className='contact-name'>{this.props.name} </div>
					<div className='contact-number'>{this.props.phoneNumber}</div>
				</div>
				{ 
					this.state.isOpened ? 

						<div className='other-details'>
							<div className='contact-email'>{this.props.email}</div>
							<div className='contact-text'>{this.props.text}</div>
						</div>

					: null 
				}
			</li>
		);
	}
});

var ContactsList = React.createClass({
	getInitialState: function() {
		return {
			displayedContacts: CONTACTS
		};
	},

	handleSearch: function(event) {
		var searchQuery = event.target.value.toLowerCase();
		var displayedContacts = CONTACTS.filter(function(el){
			var searchValue = el.name.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});

		this.setState({
			displayedContacts: displayedContacts
		})
	},

	render: function() {
		return(
			<div className='contacts'>
				<input type='text' className='search-field' onChange={this.handleSearch} />
				<ul className='contacts-list'>
					{
						this.state.displayedContacts.map(function(el){
							return <Contact 
							key={el.id} 
							name={el.name} 
							phoneNumber={el.phoneNumber}
							image={el.image}
							email={el.email}
							text={el.text}
							/>;
						})
					}
				</ul>
			</div>
		);
	}
});

ReactDOM.render(
	<ContactsList />,
	document.getElementById('content')
);






























