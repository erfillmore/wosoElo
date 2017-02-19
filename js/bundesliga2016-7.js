var bundesligaTeam = [
    bayernMunich = new teamObject("Bayern München", "bm"),
    borussiaMonchengladbach = new teamObject("Borussia Mönchengladbach", "borm"),
    duisburg = new teamObject("MSV Duisburg", "msvd"),
    frankfurt = new teamObject("1. FFC Frankfurt", "ffm"),
    hoffenheim = new teamObject("1899 Hoffenheim", "hoff"),
    bayer04Leverkusen = new teamObject("Bayer 04 Leverkusen", "b04l"),
    uSVJena = new teamObject("FF USV Jena", "jena"),
    freiburg = new teamObject("SC Freiburg", "scf"),
    sand = new teamObject("SC Sand", "scs"),
    sgsEssen = new teamObject("SGS Essen", "essen"),
    turbinePotsdam = new teamObject("Turbine Potsdam", "tp"),
    vflWolfsburg = new teamObject("VFL Wolfsburg", "wolf")
]

function printBundesligaScores(array,month) {
    document.write("At the end of " + month + " Bundesliga Elo Scores are:<br>");
    for (i = 0; i < bundesligaTeam.length; i++) {
        document.write(bundesligaTeam[i].name + "=" + bundesligaTeam[i].eloScore + "<br>")
    }
}

bayernMunich.eloScore=1580;
borussiaMonchengladbach.eloScore=1383;
duisburg.eloScore=1433;
frankfurt.eloScore=1529;
hoffenheim.eloScore=1430;
bayer04Leverkusen.eloScore=1444;
uSVJena.eloScore=1433;
freiburg.eloScore=1568;
sand.eloScore=1512;
sgsEssen.eloScore=1557;
turbinePotsdam.eloScore=1585;
vflWolfsburg.eloScore=1552;

scores(turbinePotsdam, bayer04Leverkusen,1,0);
scores(sgsEssen, vflWolfsburg,0,2);
scores(sand,uSVJena,3,0);
scores(bayernMunich,turbinePotsdam,1,2);
scores(hoffenheim,frankfurt, 2,2);
scores(duisburg,borussiaMonchengladbach, 2,1);
scores(bayer04Leverkusen,sgsEssen,1,5);
scores(vflWolfsburg,freiburg,1,0);
scores(borussiaMonchengladbach,hoffenheim,0,4);
scores(sgsEssen,bayernMunich,0,3);
scores(freiburg,bayer04Leverkusen,2,1);
scores(turbinePotsdam,duisburg,8,0);
scores(frankfurt,sand,3,1);
scores(uSVJena,vflWolfsburg,1,2);
// probability(freiburg,bayernMunich,2,3);
// probability(borussiaMonchengladbach,frankfurt);
// probability(vflWolfsburg,sand);
// probability(sgsEssen,duisburg);
// probability(uSVJena,bayer04Leverkusen)
