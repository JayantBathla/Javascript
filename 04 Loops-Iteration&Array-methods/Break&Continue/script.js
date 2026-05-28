//Break

for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Breaking...");
    break;
  }
  console.log(i);
}

//Continue
for (let i = 0; i <= 20; i++) {
  if (i === 15) {
    console.log("Skiping 15...");
    continue;
  }
  console.log(i);
}
