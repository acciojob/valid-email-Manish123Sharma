// function validEmail(str) {
//   //your JS code here.
// }

// // Do not change the code below.
// // const str = prompt("Enter an email address.");
// alert(validEmail(str));


function validEmail(str) {
  if (!str) return false;

  // Regex explanation:
  // ^                     : start of string
  // [\w.-]+               : one or more word characters, dots or hyphens
  // @                     : at symbol
  // [\w-]+(\.[\w-]+)*     : domain name with optional subdomains
  // \.[a-zA-Z]{2,}        : a period followed by 2 or more letters (domain extension)
  // $                     : end of string
  const regex = /^[\w.-]+@[\w-]+(\.[\w-]+)*\.[a-zA-Z]{2,}$/;

  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
