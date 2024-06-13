
const warriors = [
  {
    name: 'Pinky',
    health: 5,
    gold: 0,
    level: 1,
    active: true
  },
  {
    name: 'Gretchen',
    health: 8,
    gold: 0,
    level: 1,
    active: false
  },
  {
    name: 'Papa Smurf',
    health: 3,
    gold: 3,
    level: 1,
    active: false
  },
  {
    name: 'Fanta Claws',
    health: 9,
    gold: -2,
    level: 1,
    active: false
  },
]

const boss = {
  name: 'Lord Rupert the Destroyer',
  health: 10,
  maxHealth: 10,
  damage: 2,
  level: 1
}

function attackBoss() {
  boss.health -= 1

  if (boss.health <= 0) {
    boss.health = 0
  }

  const bossHealthElement = document.getElementById('bossHealth')
  bossHealthElement.innerText = `HP: ${boss.health}`
}

function attackWarriors() {
  warriors.filter((warrior) => {
    if (warrior.active == true) {
      warrior.health -= boss.damage
    }
  })
  console.log('Doing damage');
}




setInterval(attackWarriors, 1000)