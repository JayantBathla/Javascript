let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 10, 12, 20, 23);

d = new Date("2024-03-27T12:30:12");
d = new Date("03-27-2026");

d = Date.now(); // Milli seconds

d = new Date("03-27-2026");
d = d.getTime();

d = d.valueOf();

d = new Date(1641421649612);

d = Math.floor(Date.now() / 1000); // to convert to seconds
console.log(d, typeof d);
