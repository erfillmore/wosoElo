var teamObject = function(name, id, image) {
    this.name = name;
    this.eloScore = 1500;
    this.id = id
    this.image = image
}

var nwslTeam = [
    bostonBreakers = new teamObject("Boston Breakers", "bb", "logo/nwsl/Boston_Breakers.png"),
    chicagoRedStars = new teamObject("Chicago Red Stars", "crs", "logo/nwsl/chicago_red_stars.png"),
    kansasCity = new teamObject("Kansas City", "kcfc", "logo/nwsl/Kansas_City.png"),
    portlandThorns = new teamObject("Portland Thorns", "ptfc", "logo/nwsl/Portland_Thorns.png"),
    seattleReign = new teamObject("Seattle Reigh", "sr", "logo/nwsl/Seattle_Reign.png"),
    skyBlue = new teamObject("Sky Blue", "sb", "logo/nwsl/Sky_Blue.png"),
    washingtonSpirit = new teamObject("Washington Spirit", "ws", "logo/nwsl/Washington_Spirit.png"),
    westernNYFlash = new teamObject("Western New York Flash", "wnyf", "logo/nwsl/Western_New_York_Flash.png"),
    houstonDash = new teamObject("Houston Dash", "hd", "logo/nwsl/houston_dash.png"),
    orlandoPride = new teamObject("Orlando Pride", "op", "logo/nwsl/Orlando_Pride.png")
]

function scores(homeTeam, awayTeam, homeResult, awayResult) {
    //modifying kfunction
    currentK = 20
    goalDiff = Math.abs(homeResult - awayResult);
    if (goalDiff < 2) {
        currentK = 25;
    } else if (goalDiff == 2) {
        currentK = currentK * 1.25;
    } else if (goalDiff == 3) {
        currentK = currentK * 1.5;
    } else {
        currentK = (currentK * (0.5 + (goalDiff - 3) / 8)) + currentK;
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
    homeTeamElo = (homeTeam.eloScore + 10); //adding homefield advantage
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
    homeTeamElo = homeTeam.eloScore + 10;
    awayTeamElo = awayTeam.eloScore;
    var eloDifference = homeTeamElo - awayTeamElo;
    var percentage = Math.round((1 / (1 + Math.pow(10, eloDifference / 400))) * 1000) / 10;
    // return document.write("<br> the chance of " + awayTeam.name + " winning against " + homeTeam.name + " is " + percentage + "% <br>");
    var visualAppeal = function() {
        var gameRow = document.createElement("tr");
        var awayTeamLogoCell = document.createElement("td");
        var img = document.createElement('img');
        img.src = awayTeam.image;
        img.width = 50;
        awayTeamLogoCell.appendChild(img);
        gameRow.appendChild(awayTeamLogoCell);
        var awayTeamCell = document.createElement("td");
        awayTeamCell.innerText = awayTeam.name;
        gameRow.appendChild(awayTeamCell);
        var acowCell = document.createElement("td");
        acowCell.innerHTML = "<center>"+Math.round(100 - percentage) + "%</center>";
        gameRow.appendChild(acowCell);
        var hcowCell = document.createElement("td");
        hcowCell.innerHTML = "<center>"+percentage + "%</center>";
        gameRow.appendChild(hcowCell);
        var homeTeamCell = document.createElement("td");
        homeTeamCell.innerText = homeTeam.name;
        gameRow.appendChild(homeTeamCell);
        var homeTeamLogoCell = document.createElement("td");
        var img = document.createElement('img');
        img.src = homeTeam.image;
        img.width = 50;
        homeTeamLogoCell.appendChild(img);
        gameRow.appendChild(homeTeamLogoCell);
        var table = document.getElementById("probability");
        table.appendChild(gameRow);
    }
  visualAppeal();
}

/*~hallmark of the Before DOM Code~
function printNWSLScores(array, month) {
    document.write("At the end of " + month + " NWSL Elo Scores are:<br>");
    for (i = 0; i < nwslTeam.length; i++) {
        document.write(nwslTeam[i].name + "=" + nwslTeam[i].eloScore + "<br>")
    }
}
*/
