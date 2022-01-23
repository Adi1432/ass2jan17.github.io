var strg1 = prompt("enter string1");
var strg2 = prompt("emter string 2");
strg1 = strg1.split("").sort().join("");
strg2 = strg2.split("").sort().join("");
if (strg1 === strg2) {
  alert("they are anagrams");
} else {
  alert("they are not anagrams");
}
