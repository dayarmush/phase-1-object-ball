function gameObject() {
    const gameObj = {
        'home': {
            'teamName': 'brooklynNets',
            'color': ['Black', 'White'],
            'Players': {
                'alanAnderson': {
                    'number': 0,
                    'shoe': 16,
                    'points': 22,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 1
                },
                'reggieEvans': {
                    'number': 30,
                    'shoe': 14,
                    'points': 12,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 12,
                    'blocks': 12,
                    'slamDunks': 7
                },
                'brookLopez': {
                    'number': 11,
                    'shoe': 17,
                    'points': 17,
                    'rebounds': 19,
                    'assists': 10,
                    'steals': 3,
                    'blocks': 1,
                    'slamDunks': 15
                },
                'masonPlumlee': {
                    'number': 1,
                    'shoe': 19,
                    'points': 26,
                    'rebounds': 12,
                    'assists': 6,
                    'steals': 3,
                    'blocks': 8,
                    'slamDunks': 5
                },
                'jasonTerry': {
                    'number': 31,
                    'shoe': 15,
                    'points': 19,
                    'rebounds': 2,
                    'assists': 2,
                    'steals': 4,
                    'blocks': 11,
                    'slamDunks': 1
                },
            },
        },
        'away': {
            'teamName': 'charlotteHornets',
            'color': ['Turquoise', 'Purple'],
            'Players': {
                'jeffAdrien': {
                    'number': 4,
                    'shoe': 18,
                    'points': 10,
                    'rebounds': 1,
                    'assists': 1,
                    'steals': 2,
                    'blocks': 7,
                    'slamDunks': 2
                },
                'bismakBiyombo': {
                    'number': 0,
                    'shoe': 16,
                    'points': 12,
                    'rebounds': 4,
                    'assists': 7,
                    'steals': 7,
                    'blocks': 15,
                    'slamDunks': 10
                },
                'desagnaDiop': {
                    'number': 2,
                    'shoe': 14,
                    'points': 24,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 4,
                    'blocks': 5,
                    'slamDunks': 5
                },
                'benGordon': {
                    'number': 8,
                    'shoe': 15,
                    'points': 33,
                    'rebounds': 3,
                    'assists': 2,
                    'steals': 1,
                    'blocks': 1,
                    'slamDunks': 0
                },
                'brendanHaywood': {
                    'number': 33,
                    'shoe': 15,
                    'points': 6,
                    'rebounds': 12,
                    'assists': 12,
                    'steals': 22,
                    'blocks': 5,
                    'slamDunks': 12
                },
            }
        }
    }
    return gameObj;
}

function numPointsScored(name) {
    let game = gameObject();
    for (let team in game) {
        let teamObj = game[team];
        for (let player in teamObj.Players) {
            if(player === name) {
            return teamObj.Players[player].points;
            }
        }
    }
}

console.log(numPointsScored('brendanHaywood'))

function shoeSize(name) {
    let game = gameObject();
    for (let team in game) {
        let teamObj = game[team];
        for (let player in teamObj.Players) {
            if(player === name) {
            return teamObj.Players[player].shoe;
            }
        }
    }
}

console.log(shoeSize('brookLopez'))

const teamColor = (teamsColor) =>  {
    let game = gameObject();
    for (let team in game) {
        let teamObj = game[team];
            if(teamObj.teamName === teamsColor) {
            return teamObj.color;
            }
    }
}

console.log(teamColor('brooklynNets'))

function teamNames() {
    let arr = [];
    let game = gameObject();
    for (let team in game) {
        arr.push(game[team].teamName)
        if (arr.length === 2) {
            return arr
        }
    }
}

console.log(teamNames())

const playersNumbers = (teamName) => {
    let arr = [];
    let game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            let teamObj = game[team].Players;
            for (let info in teamObj) {
                arr.push(teamObj[info].points)
               }
            }
        }
    return arr;
}

console.log(playersNumbers('charlotteHornets'))

function playerStats(player) {
    let stats = {};
    let game = gameObject();
    for (let team in game) {
        let teamObj = game[team].Players;
        for (let playerObj in teamObj) {
            if (playerObj === player) {
                stats = teamObj[playerObj]
                return stats
            }
        }
    }
}

console.log(playerStats('alanAnderson'))

function bigShoeRebounds() {
    let game = gameObject();
    let biggestShoe = null;
    for (let teamObj in game) {
      let player = game[teamObj].Players;
      for (let stats in player) {
        if (biggestShoe === null || player[stats].shoe > biggestShoe.shoe) {
          biggestShoe = player[stats];
        }
      }
    }
    
    if (biggestShoe !== null) {
      return biggestShoe.rebounds;
    }
    
    return null;
  }
  
  console.log(bigShoeRebounds());
  