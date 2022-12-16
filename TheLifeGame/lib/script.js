var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var mas = [];
var count = 0;
var stop = 0;
var population = 0;
var stop = 0;
var timer;
var level = 0;

canvas.onclick = function (event) {
  var x = event.offsetX;
  var y = event.offsetY;
  //console.log(x);
  //console.log(y);
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  mas[y][x] = 1;
  console.log(y,x);
  //console.log(mas);
  drawField();
};
function goLife() {
  var n = 30,
    m = 30;
  for (var i = 0; i < m; i++) {
    mas[i] = [];
    for (var j = 0; j < n; j++) {
      mas[i][j] = [0];
    }
  }
}
goLife();
function stopLife() {
  stop = 1;
  //console.log(stop);
}

function clearField() {
  ctx.clearRect(0, 0, 300, 300);
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      mas[i][j] = [0];
    }
  }
  document.getElementById('count').innerHTML = count;
  stop = 0;
  population = 0;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML = 'Очищено';
  count = 0;
}

function drawField() {
  ctx.clearRect(0, 0, 300, 300);
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        ctx.fillRect(j * 10, i * 10, 10, 10);
          count_population();
      }
    }
  }
}



function startLife() {
  var mas2 = [];
  //console.log(mas);
  for (var i = 0; i < 30; i++) {
    mas2[i] = [];
    for (var j = 0; j < 30; j++) {
      var neighbors = 0;
      if (mas[fpm(i) - 1][j] == 1) neighbors++;
            if (mas[i][fpp(j) + 1] == 1) neighbors++;
            if (mas[fpp(i) + 1][j] == 1) neighbors++;
            if (mas[i][fpm(j) - 1] == 1) neighbors++;
            if (mas[fpm(i) - 1][fpp(j) + 1] == 1) neighbors++;
            if (mas[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++;
            if (mas[fpp(i) + 1][fpm(j) - 1] == 1) neighbors++;
            if (mas[fpm(i) - 1][fpm(j) - 1] == 1) neighbors++;
            if (mas[i][j] == 1 && neighbors < 2) mas2[i][j] = 0;
            if (mas[i][j] == 1 && neighbors > 3) mas2[i][j] = 0;
            if ((mas[i][j] == 1 && neighbors == 2) || neighbors == 3) mas2[i][j] = 1;
            if (mas[i][j] == 0 && neighbors == 3) mas2[i][j] = 1;
    }
  }
  count_population();
  mas = mas2;
  drawField();
  count++;
  if (level == 1) {
    check1level();
  }
  if (level == 2) {
    check1leve2();
  }
  if (level == 3){
    check1leve3();
  }
  if (level == 5){
    check1leve4();
  }
  document.getElementById('count').innerHTML = count;
  document.getElementById('popul').innerHTML = population;
  //timer = setTimeout(startLife, 700);
  if (stop == 0) timer = setTimeout(startLife, 700);
}

function fpm(i) {
  if (i == 0) return 30;
  else return i;
}
function fpp(i) {
  if (i == 29) return -1;
  else return i;
}

function level1() {
  clearField();
  mas[14][4] = 1;
  mas[16][4] = 1;
  level = 1;
  population = 2;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 3 к 10 поколению';
  drawField();
}

function count_population() {
  population = 0
  for (var i = 0; i < 30; i++) {
    for (var j = 0; j < 30; j++) {
      if (mas[i][j] == 1) {
        population+=1;
      }
    }
  }
  console.log(population);
}

function check1level() {
  count_population();
  if (count == 10 && population == 3) {
    stopLife();
    document.getElementById('info').innerHTML = 'Вы прошли уровень.';
  } else if (count > 10 && population != 3) {
    stopLife();
    document.getElementById('info').innerHTML = 'У вас не получилось, попробуйте снова!';
  }
}

function level2() {
  clearField();
  mas[18][12] = 1;
  mas[17][12] = 1;
  mas[17][11] = 1;
  mas[17][13] = 1;
  mas[15][11] = 1;
  mas[16][11] = 1;
  mas[15][12] = 1;
  mas[16][13] = 1;
  level = 2;
  population = 8;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML =
    'Размер популяции должен быть равен 10 к 20 поколению';
  drawField();
}

function check1leve2() {
  count_population();
  if (count == 20 && population == 10) {
    stopLife();
    document.getElementById('info').innerHTML = 'Вы прошли уровень.';
  } else if (count > 19 && population != 10) {
    stopLife();
    document.getElementById('info').innerHTML = 'У вас не получилось, попробуйте снова!';
  }
}

function level3() {
  clearField();
  mas[15][15] = 1;
  mas[14][15] = 1;
  mas[14][17] = 1;
  mas[15][13] = 1;
  mas[14][16] = 1;
  mas[16][15] = 1;
  mas[17][15] = 1;
  mas[14][13] = 1;
  mas[14][14] = 1;
  mas[15][13] = 1;
  mas[15][17] = 1;
  level = 3;
  population = 13;
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML ='Размер популяции должен быть равен 15 к 25 поколению';
  drawField();
}

function check1leve3() {
  count_population();
  if (count == 25 && population == 15) {
    stopLife();
    document.getElementById('info').innerHTML = 'Вы прошли уровень.';
  } else if (count > 25 && population != 15) {
    stopLife();
    document.getElementById('info').innerHTML = 'У вас не получилось, попробуйте снова!';
  }
}

function level4() {
  clearField();
  for (var i = 12; i < 17; i++) {
    mas[i][13] = 1;
  }
  for (var i = 11; i < 16; i++) {
    mas[14][i] = 1;
  }
  for (var i = 11; i < 15; i++) {
    mas[12][i] = 1;
  }
  level = 4;
  count_population();
  document.getElementById('popul').innerHTML = population;
  document.getElementById('info').innerHTML ='Размер популяции должен быть равен 24 к 25 поколению';
  drawField();
}

function check1leve4() {
  count_population();
  if (count == 25 && population == 24) {
    stopLife();
    document.getElementById('info').innerHTML = 'Вы прошли уровень.';
  } else if (count > 25 && population != 24) {
    stopLife();
    document.getElementById('info').innerHTML = 'У вас не получилось, попробуйте снова!';
  }
}

document.getElementById('start').onclick = startLife;
document.getElementById('lvl1').onclick = level1;
document.getElementById('lvl2').onclick = level2;
document.getElementById('lvl3').onclick = level3;
document.getElementById('lvl4').onclick = level4;
document.getElementById('clear').onclick = clearField;
document.getElementById('stop').onclick = stopLife;