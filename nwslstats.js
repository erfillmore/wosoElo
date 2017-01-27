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


function printScores(month){
  document.write("At the end of "+month+" NWSL Elo Scores are:<br>");
  for (i=0; i<nwslTeam.length; i++) {
    document.write(nwslTeam[i].name+"="+nwslTeam[i].eloScore+"<br>")
  }
}

// var gameDayTwo = [probability(washingtonSpirit,westernNYFlash)]
