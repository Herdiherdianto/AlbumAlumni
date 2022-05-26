let coutDownDate = new Date("jun 13, 2022 19:30:00").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = coutDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hours;
  document.getElementById("menit").innerHTML = minutes;
  document.getElementById("detik").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
