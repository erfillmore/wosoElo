var teamObject = function(name,id) {
    this.name = name;
    this.eloScore = 1500;
    this.id = id
  }

var nwslTeam = [
  bostonBreakers = new teamObject("Boston Breakers", "bb"),
  chicagoRedStars = new teamObject("Chicago Red Stars", "crs"),
  kansasCity = new teamObject("Kansas City", "kcfc"),
  portlandThorns = new teamObject("Portland Thorns", "ptfc"),
  seattleReign = new teamObject("Seattle Reigh", "sr"),
  skyBlue = new teamObject("Sky Blue", "sb"),
  washingtonSpirit = new teamObject("Washington Spirit", "ws"),
  westernNYFlash = new teamObject("Western New York Flash", "wnyf")
]

function scores(homeTeam, awayTeam, homeResult, awayResult) {
    homeTeamElo = homeTeam.eloScore;
    awayTeamElo = awayTeam.eloScore;
    currentK = 32;
    var EloDifference = homeTeamElo - awayTeamElo;
    EloDifference = Math.abs(EloDifference);
    var percentage = 1 / (1 + Math.pow(10, EloDifference / 400));
    var homeOutCome = Math.round(currentK * (homeResult - percentage));
    var awayOutCome = Math.round(currentK * (awayResult - percentage));
    homeTeam.eloScore= homeTeamElo+homeOutCome;
    awayTeam.eloScore= awayTeamElo+awayOutCome;
    // return document.write("postmatch eloscores are "+homeTeam.eloScore+" and also "+awayTeam.eloScore+"<br>");
}

function probability(homeTeam,awayTeam){
  homeTeamElo = homeTeam.eloScore;
  awayTeamElo = awayTeam.eloScore;
  var EloDifference = homeTeamElo - awayTeamElo;
  EloDifference = Math.abs(EloDifference);
  var percentage = Math.round((1 / (1 + Math.pow(10, EloDifference / 400)))*1000)/10;
  return document.write("the chance of "+homeTeam.name+" winning against "+awayTeam.name+" is "+percentage+"% <br>");
}

var gameMonthOne = [scores(kansasCity, portlandThorns, 0.5, 0.5),
    scores(chicagoRedStars, seattleReign, 0.5, 0.5),
    scores(skyBlue, westernNYFlash,1,0),
    scores(bostonBreakers,washingtonSpirit,0.5,0.5),
    scores(washingtonSpirit,westernNYFlash,0.5,0.5),
    scores(portlandThorns,seattleReign,1,0),
    scores(kansasCity,seattleReign,1,0),
    scores(washingtonSpirit,skyBlue,0,1),
    scores(chicagoRedStars,portlandThorns,0,1),
    scores(westernNYFlash,bostonBreakers,0,1)
];

var gameMonthTwo = [
  scores(westernNYFlash,skyBlue,1,0),
  scores(bostonBreakers,chicagoRedStars,1,0),
  scores(washingtonSpirit,portlandThorns,0,1),
  scores(seattleReign,kansasCity,0,1),
  scores(skyBlue,chicagoRedStars,0.5,0.5),
  scores(washingtonSpirit,bostonBreakers,0.5,0.5),
  scores(skyBlue,seattleReign,1,0),
  scores(westernNYFlash,kansasCity,1,0),
  scores(chicagoRedStars,portlandThorns,0,1),
  scores(seattleReign,washingtonSpirit,0,1),
  scores(portlandThorns,washingtonSpirit,1,0),
  scores(seattleReign,skyBlue,0,1),
  scores(westernNYFlash,chicagoRedStars,1,0),
  scores(bostonBreakers,washingtonSpirit,1,0),
  scores(seattleReign,portlandThorns,0,1),
  scores(kansasCity,skyBlue,0,1)
]

function printScores(month){
  document.write("At the end of "+month+" NWSL Elo Scores are:<br>");
  for (i=0; i<nwslTeam.length; i++) {
    document.write(nwslTeam[i].name+"="+nwslTeam[i].eloScore+"<br>")
  }
}

// var gameDayTwo = [probability(washingtonSpirit,westernNYFlash)]
