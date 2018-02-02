var Articles = [
	{
		id: 1,
		author: 'Savin Cristian',
		title: 'Sport , fotbal, basket, k1',
		image: 'http://viasat.su/images/News/nba-playoff-1.jpg',
		body: 'El Fitouri are o poveste cel putin interesanta! Jucatorul a crescut in academia lui City, dar primul contract major l-a avut la Manchester United! City i-a transmis ca trebuie sa ia o pauza de la fotbalul profesionist din cauza unor probleme de crestere, apoi Sadiq nu si-a mai gasit echipa. Fundasul a primit o sansa complet neasteptata din partea marii rivale a lui City, Manchester United.'
	},
	{
		id: 2,
		author: 'Sandu Danu',
		title: 'Dansuri twerk twerk',
		image: 'http://wallpapers-image.ru/oboi/wallpapers/wallpapers-sport-04.jpg',
		body: 'Phil Neville l-a recomandat pentru probe dupa ce l-a vazut la echipa de amatori pe care o patroneaza alaturi de Gary Neville, Nicky Butt, Ryan Giggs si Paul Scholes, Salford City. Impresionat de calitatile lui El Fitouri, Phil l-a propus gigantului de pe Old Trafford. Pustiul a trecut probele si a semnat cu United.'
	},
	{
		id: 3,
		author: 'Bicu Andrei',
		title: 'Tusovsi in Chisinau',
		image: 'http://wallpaper.ge/download/snowboarding_figures-1600x900.jpg',
		body: 'Portarul moldovean Denis Rusu, în vârstă de 27 de ani, ultima dată la Zimbru Chișinău, a semnat un contract valabil până la finalul sezonului, cu drept de prelungire pe încă un sezon cu CSM Poli Iași. http://www.politehnicaiasi.ro/stiri/portarul-denis-rusu-a-semnat-cu-politehnica#.WnCbiOGnyEc …De asemenea, Poli Iasi l-a mai luat astazi pe Denis Rusu, un portar moldovean in varsta de 27 de ani, care a jucat ultima data la Zimbru Chisinau.'
	}		
];

var Article = React.createClass({
	render: function() {
		return(
			<div className='article'>
				<div className='article-image'>
					<img src={this.props.image} />
				</div>
				<div className='article-info'>
					<div className='article-title'>
						{this.props.title}
					</div>
					<div className='article-text'>
						{this.props.body}
					</div>
					<div className='article-author'>
						{this.props.author}
					</div>
				</div>
			</div>
		);
	}
});

var ArticlesList = React.createClass({
	getInitialState: function() {
		return{
			displayedContacts: Articles
		}
	},

	render: function(){
		return(
			<div className='articles'>
				<div className='row'>
					<div className='col'>
						{
							this.state.displayedContacts.map(function(el){
								return <Article
								key={el.id}
								author={el.author}
								title={el.title}
								image={el.image}
								body={el.body}
								/>;
							})
						}
					</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<ArticlesList />,
	document.getElementById('content')
)
