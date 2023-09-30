function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}


// Function checks the number of points scored by a player.
const numPointsScored = (playerName) => {
  const gameData = gameObject();

  // check for player in home team
  for (const player in gameData.home.players) {
    if (player === playerName) {
      return gameData.home.players[player].points;
    }
  }

  // check for player in away team
  for (const player in gameData.away.players) {
    if (player === playerName) {
      return gameData.away.players[player].points;
    }
  }

  // return error message
  return `${playerName} not found in either team`;
}

const playerName = "Ben Gordon";
const pointsScored = numPointsScored(playerName);
console.log(`${playerName} scored ${pointsScored} points.`);


// Function returns the shoe size of particular player.
const shoeSize = (playerName) => {
  const gameData = gameObject();

  // check for player in home team
  for (const player in gameData.home.players) {
    if (player === playerName) {
      return gameData.home.players[player].shoe;
    }
  }

  // check in away team
  for (const player in gameData.away.players) {
    if (player === playerName) {
      return gameData.away.players[player].shoe;
    }
  }

  // return error message
  return `${playerName} not found in either team`;
};

const sizeofshoe = shoeSize(playerName);
console.log(`${playerName} has a shoe size of ${sizeofshoe}.`);

//Function returns the colors of a particular team
const teamColors = (teamName) => {
  const gameData = gameObject();

  // Check for the team in the home team
  if (gameData.home.teamName === teamName) {
    return gameData.home.colors;
  }

  // Check for the team in the away team
  if (gameData.away.teamName === teamName) {
    return gameData.away.colors;
  }

  // If the team is not found, return an error message
  return `${teamName} not found in either team`;
}

// Name can be passed to the function directly, for the sake of testing, we use console.log
const teamName = "Brooklyn Nets";
const colors = teamColors(teamName);
console.log(`${teamName}'s colors are: ${colors.join(", ")}.`);

//Funcion returns both of the teams names
const teamNames = () => {
  const gameData = gameObject();
  return [gameData.home.teamName, gameData.away.teamName];
}

const names = teamNames();
console.log("Team Names:", names.join(" and "));

//Function returns player jersey numbers for a particular team
const playerNumbers = (teamName) => {
  const gameData = gameObject();

  // Check for the team in the home team
  if (gameData.home.teamName === teamName) {
    return Object.values(gameData.home.players).map((player) => player.number);
  }

  // Check for the team in the away team
  if (gameData.away.teamName === teamName) {
    return Object.values(gameData.away.players).map((player) => player.number);
  }

  // If the team is not found, return an error message
  return `${teamName} not found in either team`;
}

// Name can be passed to the function directly, for the sake of testing, we use console.log
const numbers = playerNumbers(teamName);
console.log(`${teamName}'s jersey numbers are: ${numbers.join(", ")}.`);


//Function returns stats for a particular player
const playerStats = (playerName) => {
  const gameData = gameObject();

  // Check for the player in the home team
  for (const player in gameData.home.players) {
    if (player === playerName) {
      return gameData.home.players[player];
    }
  }

  // Check for the player in the away team
  for (const player in gameData.away.players) {
    if (player === playerName) {
      return gameData.away.players[player];
    }
  }

  // If the player is not found, return an error message
  return `${playerName} not found in either team`;
}

// Name can be passed to the function directly, for the sake of testing, we use console.log
const stats = playerStats(playerName);
console.log(`${playerName}'s stats:`, stats);


// Function Return the number of rebounds for the player with the largest shoe size
const bigShoeRebounds = () => {
  const gameData = gameObject();

  // Step 1: Find the player with the largest shoe size
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  // Check players in the home team
  for (const player in gameData.home.players) {
    const currentShoeSize = gameData.home.players[player].shoe;
    if (currentShoeSize > largestShoeSize) {
      largestShoeSize = currentShoeSize;
      playerWithLargestShoe = player;
    }
  }

  // Check players in the away team
  for (const player in gameData.away.players) {
    const currentShoeSize = gameData.away.players[player].shoe;
    if (currentShoeSize > largestShoeSize) {
      largestShoeSize = currentShoeSize;
      playerWithLargestShoe = player;
    }
  }

  // Step 2: Return the number of rebounds for the player with the largest shoe size
  if (playerWithLargestShoe) {
    return (
      gameData.home.players[playerWithLargestShoe].rebounds ||
      gameData.away.players[playerWithLargestShoe].rebounds
    );
  }

  // If no player is found, return an error message
  return "No player found";
}

// Name can be passed to the function directly, for the sake of testing, we use console.log
const rebounds = bigShoeRebounds();
console.log(
  "Number of rebounds for the player with the largest shoe size:",
  rebounds
);


//Function returns player with most points

const mostPointsScored = () => {
  const gameData = gameObject();
  let maxPoints = 0;
  let playerWithMostPoints = null;

  // Check players in the home team
  for (const player in gameData.home.players) {
    const currentPoints = gameData.home.players[player].points;
    if (currentPoints > maxPoints) {
      maxPoints = currentPoints;
      playerWithMostPoints = player;
    }
  }

  // Check players in the away team
  for (const player in gameData.away.players) {
    const currentPoints = gameData.away.players[player].points;
    if (currentPoints > maxPoints) {
      maxPoints = currentPoints;
      playerWithMostPoints = player;
    }
  }

  return playerWithMostPoints;
}

// Name can be passed to the function directly, for the sake of testing, we use console.log
const topScorer = mostPointsScored();
console.log("Player with the most points:", topScorer);

//Function returns the winning team
const winningTeam = () => {
  const gameData = gameObject();
  const homePoints = Object.values(gameData.home.players).reduce(
    (acc, player) => acc + player.points,
    0
  );
  const awayPoints = Object.values(gameData.away.players).reduce(
    (acc, player) => acc + player.points,
    0
  );

  return homePoints > awayPoints
    ? gameData.home.teamName
    : gameData.away.teamName;
}

// Name can be passed to the function directly, for the sake of testing, we use console.log
const winner = winningTeam();
console.log("Team with the most points:", winner);

//Function returns player with the longest name
const playerWithLongestName = () => {
  const gameData = gameObject();
  let longestName = "";
  let playerWithLongestName = null;

  // Check players in the home team
  for (const player in gameData.home.players) {
    const currentName = player;
    if (currentName.length > longestName.length) {
      longestName = currentName;
      playerWithLongestName = player;
    }
  }

  // Check players in the away team
  for (const player in gameData.away.players) {
    const currentName = player;
    if (currentName.length > longestName.length) {
      longestName = currentName;
      playerWithLongestName = player;
    }
  }

  return playerWithLongestName;
}

// Name can be passed to the function directly, for the sake of testing, we use console.log
const longestNamePlayer = playerWithLongestName();
console.log("Player with the longest name:", longestNamePlayer);

//Function checks wether player with longest name has most steals.
const doesLongNameStealATon = () => {
  const gameData = gameObject();
  let longestName = "";
  let playerWithLongestName = null;

  // Find player with the longest name
  for (const player in gameData.home.players) {
    const currentName = player;
    if (currentName.length > longestName.length) {
      longestName = currentName;
      playerWithLongestName = player;
    }
  }

  for (const player in gameData.away.players) {
    const currentName = player;
    if (currentName.length > longestName.length) {
      longestName = currentName;
      playerWithLongestName = player;
    }
  }

  // Check if the player with the longest name had the most steals
  const stealsLongestName =
    gameData.home.players[playerWithLongestName]?.steals ||
    gameData.away.players[playerWithLongestName]?.steals;
  const maxSteals = Math.max(
    ...Object.values(gameData.home.players).map((player) => player.steals),
    ...Object.values(gameData.away.players).map((player) => player.steals)
  );

  return stealsLongestName === maxSteals;
}

// Name can be passed to the function directly, for the sake of testing, we use console.log
const result = doesLongNameStealATon();
console.log("Does the player with the longest name steal a ton?", result);


