


createDeck = () => {
    const deck = []
    const suits = ['♠', '♣', '♥', '♦']
    const values =[2,3,4,5,6,7,8,9,10,'J','Q','K','A']
        for (suit of suits) {
            for (value of values) {
                deck.push(`${value}` + `${suit}`)
            }
        }
    return deck
}

randomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}
randomCard = (deck) => {
    return deck[randomNumber(deck.length)-1]
}

removeRandomCard = (deck) => {
    return deck.splice([randomNumber(deck.length)-1],1).toString()
}

removeTopCard = (deck) => {
    return deck.pop().toString()
}

cutDeck = (deck) => {    
    return deck.splice(randomNumber(deck.length)).concat(deck)
}

shuffleDeck = (deck = createDeck(1), i = 1, limit = 20) => {
    const clone = deck.slice(0)

    const newDeck = new Array(clone.length).fill(0).map(() => {
        return clone.splice(randomNumber(clone.length),1)[0]
    })  
    return (i < limit) ? shuffleDeck(newDeck, ++i) : newDeck
}

let counter = 1
class Player {
    constructor (name, chips) { 
            this.name = name,
            this.position = counter,
            this.chips = chips,
            this.cards = [],   
            counter++
        
    }
}

createPlayerArray = (names, chips) => {
    let playerArray = []
    for(name in names) {
        let newPlayer = new Player(names[name], chips)
        playerArray.push(newPlayer)
    }
    return playerArray
}

dealCards = (cards, deck, playerArray) => {
    for (cards; cards>0; cards--) {
        for (player in playerArray) {               
            playerArray[player].cards.push(removeTopCard(deck))         
    }
}
}   
const names = ['Steve', 'Bob', 'Marley']
const players = createPlayerArray(names, 5000)

const deck = shuffleDeck(createDeck())
console.log(deck, deck.length)

dealCards(8, deck, players)
console.log(players)
console.log (deck.length)
