var teamObject = function(name, id) {
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
    westernNYFlash = new teamObject("Western New York Flash", "wnyf"),
    houstonDash = new teamObject("Houston Dash", "hd")
]

function scores(homeTeam, awayTeam, homeResult, awayResult) {
<<<<<<< HEAD
    //modifying kfunction
    currentK = 25
    goalDiff = Math.abs(homeResult - awayResult);
    if (goalDiff < 2) {
      currentK = 25;
    } else if (goalDiff == 2) {
      currentK = currentK*1.5;
    } else if (goalDiff == 3)  {
      currentK = currentK*1.75;
    } else {
      currentK = (currentK * (0.75 + (goalDiff-3)/8))+ currentK;
    }
    // If Else statement so instead of putting in 0 or 1 into the function we can put in the ACTUAL score; have the function figure out who gets the 1 value
    if (homeResult > awayResult) { //home team score is GREATER than away team score; home=1, away=0
        homeResult = 1;
        awayResult = 0;
    } else if (homeResult < awayResult) { //home team score is LESS than away team score; home=0, away=1
        homeResult = 0;
        awayResult = 1;
    } else { //tie; both get .5
        homeResult = .5;
        awayResult = .5;
    }
    homeTeamElo = homeTeam.eloScore + 20; //adding homefield advantage
    awayTeamElo = awayTeam.eloScore;
    var EloDifference = homeTeamElo - awayTeamElo;
    EloDifference = Math.abs(EloDifference);
    var percentage = 1 / (1 + Math.pow(10, EloDifference / 400));
    var homeOutCome = Math.round(currentK * (homeResult - percentage));
    var awayOutCome = Math.round(currentK * (awayResult - percentage));
    homeTeam.eloScore = homeTeamElo + homeOutCome;
    awayTeam.eloScore = awayTeamElo + awayOutCome;
    // return document.write("postmatch eloscores are "+homeTeam.eloScore+" and also "+awayTeam.eloScore+"<br>");

}


function probability(homeTeam, awayTeam) {
    homeTeamElo = homeTeam.eloScore;
    awayTeamElo = awayTeam.eloScore;
    var EloDifference = homeTeamElo - awayTeamElo;
    EloDifference = Math.abs(EloDifference);
    var percentage = Math.round((1 / (1 + Math.pow(10, EloDifference / 400))) * 1000) / 10;
    return document.write("the chance of " + homeTeam.name + " winning against " + awayTeam.name + " is " + percentage + "% <br>");
}


function printScores(array,month) {
    document.write("At the end of " + month + " NWSL Elo Scores are:<br>");
    for (i = 0; i < nwslTeam.length; i++) {
        document.write(nwslTeam[i].name + "=" + nwslTeam[i].eloScore + "<br>")
    }
}
