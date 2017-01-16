// var bostonBreakers = {name: "Boston Breakers", eloScore: 1500};
// var chicagoRedStars = {name: "Chicago Red Stars", eloScore: 1500};
// var kansasCity = {name:"Kansas City", eloScore: 1500};
// var portlandThorns = {name:"Portland Thornes", eloScore:1500};
// var seattleReign = {name:"Seattle Reign", eloScore:1500};
// var skyBlue = {name:"Sky Blue", eloScore:1500};
// var washingtonSpirit = {name:"Washington Spirit", eloScore:1500};
// var westernNYFlash = {name:"Western NY Flash", eloScore:1500};
//

var teamObject = function(name, id){
  this.name = name;
  this.eloScore = 1500;
  this.id = id;
}

var nwslTeam = [
  bostonBreakers = new teamObject("Boston Breakers", "bb"),
  chicagoRedStars = new teamObject("Chicago Red Stars", "crs"),
  kansasCity = new teamObject("Kansas City", "kcfc"),
  portlandThorns = new teamObject("Portland Thornes", "ptfc"),
  seattleReign = new teamObject("Seattle Reign", "sr"),
  skyBlue = new teamObject("Sky Blue", "sb"),
  washingtonSpirit = new teamObject("Washington Spirit", "ws"),
  westernNYFlash = new teamObject("Western New York Flash", "wnyf")
]

// var DataPoint = scores(homeTeam, awayTeam, currentK, homeResult, awayResult){
// };
// DataPoint (kansasCity, portlandThorns, 1500, 1500, 0.5)
//

function scores(homeTeam, awayTeam, currentK, homeResult, awayResult) {
    homeTeamElo = homeTeam.eloScore;
    awayTeamElo = awayTeam.eloScore;
    var EloDifference = homeTeamElo - awayTeamElo;
    EloDifference = Math.abs(EloDifference);
    var percentage = 1 / (1 + Math.pow(10, EloDifference / 400));
    var homeOutCome = Math.round(currentK * (homeResult - percentage));
    var awayOutCome = Math.round(currentK * (awayResult - percentage));
    homeTeam.eloScore= homeTeamElo+homeOutCome;
    awayTeam.eloScore= awayTeamElo+awayOutCome;
    return document.write("Postmatch eloscores are "+homeTeam.name+" is "+homeTeam.eloScore+" and also "+awayTeam.name+" is "+awayTeam.eloScore+"<br>");
}

//var today=scores(bostonBreakers, chicagoRedStars, 1)

function probability(homeTeam,awayTeam){
  homeTeamElo = homeTeam.eloScore;
  awayTeamElo = awayTeam.eloScore;
  var EloDifference = homeTeamElo - awayTeamElo;
  EloDifference = Math.abs(EloDifference);
  var percentage = Math.round((1 / (1 + Math.pow(10, EloDifference / 400)))*1000)/10;
  return document.write("The change of "+homeTeam.name+" winning against "+awayTeam.name+" is "+percentage+"% <br>");
}

//game day 1
var gameDayOne = [
  new scores(kansasCity, portlandThorns, 32, 0.5, 0.5),
  new scores(chicagoRedStars, seattleReign, 32, .5, .5),
  new scores(skyBlue, westernNYFlash, 32, 1, 0),
  new scores(bostonBreakers, washingtonSpirit, 32, .5, .5)
];

var gameDayTwo = [
  probability(washingtonSpirit, westernNYFlash)
]
