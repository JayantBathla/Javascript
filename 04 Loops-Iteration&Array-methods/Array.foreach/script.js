//take in a call back fucntion as argument.loops through array

const socials = ["Twitter", "LinkedIn", "Facebook", "Instagram"];
//console.log(socials.__proto__)

// socials.forEach(function (item) {
//   console.log(item);
// });

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`));

//USING A NAMED FUNCTION
function logSocials(socials) {
  console.log(socials);
}

//   socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Linkedin", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

socialObjs.forEach((item) => console.log(item.url));
