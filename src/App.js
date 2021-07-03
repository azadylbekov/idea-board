import Card from './Card'
import { Component } from 'react'
import Notification from './Notification'

class App extends Component {
	constructor() {
		super()
		this.state = {
			cards: [
				{
					id: 1,
					title: 'Buy milk',
					text: 'Buy milk in the store behind school'
				},
				{
					id: 2,
					title: 'Create new app',
					text: 'Think of an idea for an app and create it'
				},
				{
					id: 3,
					title: 'Fart Filter',
					text: 'Design the prototype for the fart filter'
				}
			],
			saved: false
		}
		this.handleNewIdea = this.handleNewIdea.bind(this);
		this.handleContentEditable = this.handleContentEditable.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleNewIdea() {
		let title = 'New Idea'
		let text = 'New idea explanation'
		let randomId = Math.floor(Math.random() * 100);
		this.setState({ cards: [...this.state.cards, { id: this.state.cards[this.state.cards.length - 1].id + 1, title: title, text: text }] });
	}

	handleContentEditable(e, id) {
		const value = e.target.textContent
		const dataName = e.target.dataset.name
		let allCards = this.state.cards;
		allCards = allCards.map(card => card.id === id ? { ...card, [dataName]: value } : card)
		this.setState({
			cards: allCards,
			saved: true
		})
	}

	handleDelete(id) {
		const allCards = this.state.cards.filter(card => card.id !== id);
		this.setState({
			cards: allCards
		})
	}

	componentDidMount() {
		setInterval(() => {
			this.setState(prevState => {
				return {
					...prevState,
					saved: false
				}
			})
		}, 1500)
	}

	render() {
		return (
			<div className='App'>
				<div className="app-wrapper">
					<h1>Idea Board</h1>
					<div className="interaction-board">
						<button onClick={this.handleNewIdea} className='btn btn-idea'>New Idea</button>
						<div className="sorting-block">
							<span>Sort ideas by</span>
							<input type="date" />
						</div>
						<Notification in={this.state.saved} />
					</div>
					<div className="card-row">
						{this.state.cards.map(card => (
							<div key={card.id} className="card-item">
								<Card
									key={card.id}
									id={card.id}
									title={card.title}
									text={card.text}
									handleContentEditable={this.handleContentEditable}
									handleDelete={this.handleDelete}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}
}

export default App;
