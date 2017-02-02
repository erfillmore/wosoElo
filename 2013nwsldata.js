//var nwsl2013Season = [gameMonthApril13,gameMonthMay13,gameMonthJune13,gameMonthJuly13,gameMonthAugust13]

var gameMonthApril13 = [
    scores(kansasCity, portlandThorns, 1, 1),
    scores(chicagoRedStars, seattleReign, 1, 1),
    scores(skyBlue, westernNYFlash,1,0),
    scores(bostonBreakers,washingtonSpirit,1,1),
    scores(washingtonSpirit,westernNYFlash,1,1),
    scores(portlandThorns,seattleReign,2,1),
    scores(kansasCity,seattleReign,2,0),
    scores(washingtonSpirit,skyBlue,1,2),
    scores(chicagoRedStars,portlandThorns,0,2),
    scores(westernNYFlash,bostonBreakers,1,2)
];

var gameMonthMay13 = [
  scores(westernNYFlash,skyBlue,2,1),
  scores(bostonBreakers,chicagoRedStars,4,1),
  scores(washingtonSpirit,portlandThorns,1,2),
  scores(seattleReign,kansasCity,0,1),
  scores(skyBlue,chicagoRedStars,1,1),
  scores(washingtonSpirit,bostonBreakers,1,1),
  scores(skyBlue,seattleReign,2,0),
  scores(westernNYFlash,kansasCity,2,1),
  scores(chicagoRedStars,portlandThorns,0,2),
  scores(seattleReign,washingtonSpirit,2,4),
  scores(portlandThorns,skyBlue,0,1),
  scores(kansasCity,bostonBreakers,2,0),
  scores(portlandThorns,washingtonSpirit,2,0),
  scores(seattleReign,skyBlue,0,3),
  scores(westernNYFlash,chicagoRedStars,2,1),
  scores(bostonBreakers,washingtonSpirit,3,0),
  scores(seattleReign,portlandThorns,0,1),
  scores(kansasCity,skyBlue,0,1)
];

var gameMonthJune13 = [
  scores(portlandThorns,chicagoRedStars,0,2),
  scores(skyBlue,bostonBreakers,5,1),
  scores(bostonBreakers,westernNYFlash,2,2),
  scores(portlandThorns,kansasCity,4,3),
  scores(skyBlue,westernNYFlash,0,3),
  scores(chicagoRedStars,bostonBreakers,1,0),
  scores(seattleReign,kansasCity,0,1),
  scores(chicagoRedStars,kansasCity,0,2),
  scores(washingtonSpirit,westernNYFlash,0,2),
  scores(portlandThorns,seattleReign,2,0),
  scores(kansasCity,chicagoRedStars,1,3),
  scores(bostonBreakers,skyBlue,2,3),
  scores(chicagoRedStars,westernNYFlash,2,2),
  scores(skyBlue,portlandThorns,0,0),
  scores(kansasCity,washingtonSpirit,2,0),
  scores(westernNYFlash,seattleReign,1,1),
  scores(bostonBreakers,seattleReign,1,2),
  scores(skyBlue,kansasCity,2,2),
  scores(westernNYFlash,washingtonSpirit,4,0),
  scores(seattleReign,chicagoRedStars,3,1),
  scores(kansasCity,portlandThorns,2,0),
  scores(bostonBreakers,skyBlue,3,2)
];

var gameMonthJuly13 = [
  scores(seattleReign,bostonBreakers,1,1),
  scores(washingtonSpirit,bostonBreakers,1,1),
  scores(chicagoRedStars,westernNYFlash,1,0),
  scores(skyBlue,washingtonSpirit,1,0),
  scores(portlandThorns,bostonBreakers,0,2),
  scores(kansasCity,westernNYFlash,0,0),
  scores(washingtonSpirit,chicagoRedStars,0,2),
  scores(seattleReign,westernNYFlash,3,2),
  scores(skyBlue,bostonBreakers,0,0),
  scores(portlandThorns,westernNYFlash,1,1),
  scores(chicagoRedStars,kansasCity,3,3),
  scores(seattleReign,washingtonSpirit,2,1),
  scores(chicagoRedStars,washingtonSpirit,1,0),
  scores(kansasCity,seattleReign,2,0),
  scores(westernNYFlash,skyBlue,3,0),
  scores(bostonBreakers,portlandThorns,1,2),
  scores(kansasCity,bostonBreakers,3,0),
  scores(seattleReign,chicagoRedStars,4,1),
  scores(washingtonSpirit,bostonBreakers,2,5),
  scores(portlandThorns,chicagoRedStars,3,3),
  scores(skyBlue,kansasCity,0,1),
  scores(westernNYFlash,washingtonSpirit,3,0),
  scores(portlandThorns,skyBlue,3,1)
];

var gameMonthAugust13 = [
  scores(bostonBreakers,westernNYFlash,2,2),
  scores(chicagoRedStars,seattleReign,3,1),
  scores(skyBlue, washingtonSpirit,1,0),
  scores(portlandThorns,kansasCity,2,3),
  scores(bostonBreakers,portlandThorns,2,1),
  scores(westernNYFlash,seattleReign,1,0),
  scores(washingtonSpirit,chicagoRedStars,1,0),
  scores(bostonBreakers,kansasCity,1,0),
  scores(chicagoRedStars,skyBlue,3,3),
  scores(washingtonSpirit,seattleReign,1,0),
  scores(westernNYFlash,portlandThorns,0,0),
  scores(westernNYFlash,bostonBreakers,2,1),
  scores(seattleReign,portlandThorns,1,2),
  scores(kansasCity,chicagoRedStars,1,2),
  scores(washingtonSpirit,skyBlue,1,1)
];

var postSeason13 = [
  scores(kansasCity,portlandThorns,2,3),
  scores(westernNYFlash,skyBlue,2,0),
  scores(westernNYFlash,portlandThorns,0,2)
]

// var gameMonthApril14 = [
//   scores(houstonDash, portlandThorns, 0,1),
//   scores(kansasCity,skyBlue,0.5,0.5),
//   scores(washingtonSpirit,westernNYFlash,0,1),
//   scores(seattleReign,bostonBreakers,1,0),
//   scores(washingtonSpirit,kansasCity,1,0),
//   scores(chicagoRedStars,westernNYFlash,1,0),
//   scores(skyBlue,portlandThorns,0.5,0.5),
//   scores(bostonBreakers,houstonDash,0,1),
//   scores(seattleReign,washingtonSpirit,1,0),
//   scores(chicagoRedStars,washingtonSpirit,0,1),
//   scores(portlandThorns,kansasCity,1,0),
//   scores(bostonBreakers,skyBlue,1,0),
//   scores(seattleReign,houstonDash,1,0),
//   scores(skyBlue,seattleReign,0,1),
//   scores(kansasCity,chicagoRedStars,1,0)
// ]
//
// var gameMonthMay14 = [
//   scores(washingtonSpirit,seattleReign,0.5,0.5),
//   scores(westernNYFlash, portlandThorns,0.5,0.5),
//   scores(skyBlue,bostonBreakers,1,0),
//   scores(houstonDash,kansasCity,0,1),
//   scores(westernNYFlash, kansasCity,1,0),
//   scores(skyBlue,chicagoRedStars,0.5,0.5),
//   scores(portlandThorns,seattleReign,0,1),
//   scores(westernNYFlash,skyBlue,1,0),
//   scores(chicagoRedStars,houstonDash,1,0),
//   scores(kansasCity,washingtonSpirit,1,0),
//   scores(houstonDash,portlandThorns,0,1),
//   scores(seattleReign,kansasCity,1,0),
//   scores(bostonBreakers,chicagoRedStars,0,1),
//   scores(washingtonSpirit,westernNYFlash,1,0),
//   scores(kansasCity,houstonDash,0.5,0.5),
//   scores(bostonBreakers,chicagoRedStars,0,1),
//   scores(washingtonSpirit,skyBlue,0.5,0.5),
//   scores(kansasCity,seattleReign,0.5,0.5),
//   scores(portlandThorns,westernNYFlash,1,0),
//   scores(houstonDash,chicagoRedStars,0,1),
//   scores(portlandThorns,skyBlue,0,1),
//   scores(bostonBreakers,kansasCity,0,1),
//   scores(seattleReign,westernNYFlash,0.5,0.5),
//   scores(washingtonSpirit,houstonDash,1,0),
//   scores(skyBlue,chicagoRedStars,0,1),
//   scores(bostonBreakers,portlandThorns,1,0),
//   scores(westernNYFlash,houstonDash,0,1)
// ]
