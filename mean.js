const mean = scores => {
  var sumAll = 0;
  for (score of scores) {
    sumAll += score;
  }
  var average = Math.round(sumAll / scores.length);

  console.log(average);
};

var scores = [90, 88, 87, 91, 78, 89, 83, 94, 69, 92];
mean(scores);
