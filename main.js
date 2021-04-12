//Create random number generator/10
const random10 = () => {
  return Math.floor(Math.random()*10)
}
//Create random number generator/26
const random26 = () => {
  return Math.floor(Math.random()*26)
}

//List of lowercase
const lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//List of uppercase
const uppercaseLetters = []
lowercaseLetters.forEach(letter => uppercaseLetters.push(letter.toUpperCase()))

//List of animals length 10
const animals = ['dog','cat','dog','dog','cat','cat','dog','cat','dog','cat']

//List of places length 10
const cities = ['newyork','toronto','chicago','bronx','brooklyn','rolesville','raleigh','ronkonkoma','manhattan','newrochelle']

//List of special character
const specialChar = ['!','@','#','$','%','&','-','!','&','!']

//Shuffle function
function shuffle (array) {
array.sort(() => Math.random() - 0.5)
}

const createPword = (length=2) => {
  const Pword = []
for (let i = 0; i<=length-1; i++){
  Pword.push(random10())
}
for (let i = 0; i<=length-1; i++){
  Pword.push(lowercaseLetters[random26()])
}
for (let i = 0; i<=length-1; i++){
  Pword.push(uppercaseLetters[random26()])
}
for (let i = 0; i<=length-1; i++){
  Pword.push(animals[random10()])
}
for (let i = 0; i<=length-1; i++){
  Pword.push(lowercaseLetters[random10()])
}

for (let i = 0; i<=length-1; i++){
Pword.push(specialChar[random10()])
}
  
shuffle(Pword)
const password = Pword.join('')
console.log(password)

}
createPword()

