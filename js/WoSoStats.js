var China = 1500;
var Norway = 1500;
var Denmark = 1500;
var NewZealand = 1500;
var UnitedStates = 1500;
var Sweden = 1500;
var Brazil = 1500;
var Japan = 1500;
var Germany = 1500;
var Italy = 1500;
var ChineseTaipei = 1500;
var Nigeria = 1500;

var kValue = {worldCupFinal:60, contChampFinal:50, interContFinal:50, majorTournament:40, allTournament:30, friendly:20}

var NintyOneWC = [China, Norway, Denmark, NewZealand, UnitedStates, Sweden, Brazil, Japan, Germany, Italy, ChineseTaipei, Nigeria];
var currentK = kValue.contChampFinal;

var teamOne;
var teamTwo;

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
