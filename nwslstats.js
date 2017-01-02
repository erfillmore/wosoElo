var nwslTeam = function(teamName, eloScore){
  this.teamName = teamName;
  this.eloScore = eloScore;
};

var DataPoint = function(homeTeam, awayTeam, homeElo, awayElo, winner){
    this.homeTeam = userName;
    this.awayTeam = rodentType;
    this.homeElo = observeMonth;
    this.awayElo = lat;
    this.winner = 1;
};

function scores(teamOne, teamTwo, currentK, result) {
    functionTeamOne = NintyOneWC[teamOne];
    functionTeamTwo = NintyOneWC[teamTwo];
    var EloDifference = functionTeamOne - functionTeamTwo;
    EloDifference = Math.abs(EloDifference);
    var percentage = 1 / (1 + Math.pow(10, EloDifference / 400));
    var outCome = Math.round(currentK * (result - percentage));
    NintyOneWC[teamOne]= NintyOneWC[teamOne]+outCome;
    return document.write(NintyOneWC[teamOne]);
//    document.ratingchange.percent.value = Math.round(percentage * 100) + "%";
}
