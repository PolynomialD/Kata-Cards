
const createDeck = (amount) => {               
    let deck = []
    for(let j=1; j<=amount; j++) {     
        for(let i=2; i<15; i++) {
            let card = i
            if(i===11){card = 'Jack'}
            if(i===12){card = 'Queen'}
            if(i===13){card = 'King'}
            if(i===14){card = 'Ace'}
            deck.push(card+' Of Clubs', card+' Of Diamonds', card+' Of Hearts', card+' Of Spades')
        }
    }
    console.log('deck', deck)
    return deck
}

const randomCard = (deck) => {
    return deck.splice(randomNumber(deck.length),1)
}

const randomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const cutDeck = (cuts, deck) => {    //cuts not working
    for(let i=1; i<=cuts; i++) {
        let cut = deck.splice(randomNumber(deck.length))
        deck = cut.concat(deck)
    }
    return deck
}

const shuffleDeck = (deck) => {
    for(let i=0; i<500; i++) {
        deck = randomCard(deck).concat(deck)
    }
    return deck
}

const dealCards = (players, cards, deck) => {
    let playerArray = []
    for(let i=0; i<players; i++) {playerArray.push([])}
    for(let i=0; i<players; i++) {
        for(let j=0; j<cards; j++) {
            playerArray[i].push(randomCard(deck))
        }
    }
    console.log('playerArray', playerArray)
    return playerArray
}

const deckOne = createDeck(1)
console.log('Deck', deckOne)

shuffleDeck(deckOne)
console.log('shuffled:',shuffleDeck(deckOne))

dealCards(6,2, deckOne)
console.log('playerarray', dealCards(6,2, deckOne), 'dealt', deckOne)
