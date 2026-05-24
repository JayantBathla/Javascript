const d = new Date(2026, 2, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log("it is january");
    break;
  case 2:
    console.log("it is feb");
    break;

  case 3:
    console.log("it is March");
    break;
  default:
    console.log("who knows what month is this");
}

switch (true) {
  case hour < 12:
    console.log("Morning, you sleepy head");
    break;
  case hour < 18:
    console.log("Lunch Time");
    break;

  default:
    console.log("Bed Time, zzzzzzzzzzz");
}
