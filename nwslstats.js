var bostonBreakers = {name: "Boston Breakers", eloScore: 1500};
var chicagoRedStars = {name: "Chicago Red Stars", eloScore: 1500};
var kansasCity = {name:"Kansas City", eloScore: 1500};

// var DataPoint = scores(homeTeam, awayTeam, currentK, homeResult, awayResult){
// };
//
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
    return document.write("postmatch Eloscores are"+homeTeam.eloScore+"and also"+awayTeam.eloScore);
}
