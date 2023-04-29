const str = "I love you Jyoti and Babita";


// 1. length-> return the length of string
// 2. charAt(i) -> return the character at index given, else empty
// 3. indexOf(" ") -> return the starting index of the provided word, else -1
// 4. substring(i,j) -> return the substring
// 5. slice() -> return the substring but it can takes negative number representing from endside
// 6. replace() -> replace the items

console.log(str);
// console.log(str.length);
// console.log(str.charAt(8));
// console.log(str.indexOf("Jyoti"));
// console.log(str.substring(7, 14));
// console.log(str.slice(-7));
// console.log(str.replace("Jyoti", "Prerna"));

// let s = " Here we are learning Java Script  ";
// 7. trim() -> remove white spaces from both the end
// console.log(s);
// console.log(s.trim());

// 8. split -> split into array 
// let st = s.trim();
// console.log(st.split(" "));

let string = "hgniSybboB";
console.log(string.split("").reverse().join(""));
let aplha ="";
for(let i = 97; i <= 122; i++){
    aplha += String.fromCharCode(i, " ");
}
// console.log(aplha);

