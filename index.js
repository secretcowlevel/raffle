const fs = require('fs')
const path = require('path')
const dirName = 'emails'

let emails = []

// look through the emails folder
const files = fs.readdirSync(path.join(__dirname, dirName))
files.forEach(f => {
  console.log(f)
  const x = fs.readFileSync(path.join(__dirname, dirName, f))
  const myEmails = JSON.parse(x).emails
  console.log(`${f} has ${myEmails.length} entries!`)
  emails = emails.concat(myEmails)
})


const totalWinners = 2
let totalEntries = emails.length
const winners = []

console.log(`RUNNING SCRIPT WITH ${totalEntries} entries and ${totalWinners} winners!`)

emails = emails.filter(e => e !== '')
console.log(`Before Filtering: ${totalEntries} - after: ${emails.length}`)
totalEntries = emails.length

let i = 0;
while (winners.length < totalWinners) {
  const winner = Math.ceil(Math.random(0, 1) * totalEntries)
  if (!winners.includes(winner)) {
    console.log(`Winner # ${i + 1}: ${winner}`)
    winners.push(winner)
    i++
  }
}

for (let j = 0; j < winners.length; ++j) {
  console.log(`WINNER ${j} = ${emails[winners[j]]}`)
}
