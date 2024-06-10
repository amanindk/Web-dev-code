// /\l/gm = g means global and m means multiple line

//go to   

const regex = /used/g;
const text =
  "Lorem ipsum may be used as a  used placeholder before the  used final copy is available.";
console.log(text.replace(regex, "USEED"));

// Character classes
//        .	any character except newline
//        \w\d\s	word, digit, whitespace
//        \W\D\S	not word, digit, whitespace


//        [abc]	any of a, b, or c
//        [^abc]	not a, b, or c
//        [a-g]	character between a & g

// Example
       
//        /\d[a-f]used/g    = 3bused, 7euseed
//        /\d[^a-f]used/g or /\d[^abcdef]used/g    = 1kused, 5pused
       
//Anchors
//        ^abc$	start / end of the string
//        \b\B	word, not-word boundary
       
//Escaped characters
//        \.\*\\	escaped special characters
//        \t\n\r	tab, linefeed, carriage return

// Example
//            /used\./gm  = used. 


// Groups & Lookaround
//        (abc)	capture group
//        \1	backreference to group #1
//        (?:abc)	non-capturing group
//        (?=abc)	positive lookahead
//        (?!abc)	negative lookahead

// Examplee 
//      /(abc)/   abc


// Quantifiers & Alternation
//        a*a+a?	0 or more, 1 or more, 0 or 1
//        a{5}a{2,}	exactly five, two or more
//        a{1,3}	between one & three
//        a+?a{2,}?	match as few as possible
//        ab|cd	match ab or cd

// Example
//      /(abc)*/g  = abcabcabc
//      /(Aman){3}/g = AmanAmanAman
//      /(Aman){3}/gi = Amanamanaman
//      /(Aman){2-6}/g = AmanAmanAmanAmanAmanAman AmanAman AmanAmanAmanAmanAman