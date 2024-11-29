/*
336540331 - Shemiakin Leonid
תרגיל מבוא
Targil 3
כתבו תוכנית המגדירה מערך של מספרים שלמים ומחשבת כמות אפסים בעזרת ביטוי מותנה (ללא שימוש ב-if).
*/

const arr = [0, 1, 0, 2, 3, 0, 4, 5, 0, 6]; 
let zeroCount = 0; 

for (let i = 0; i < arr.length; i++) {
    zeroCount += arr[i] === 0 ? 1 : 0; 
}

console.log(`count of zero in array is: ${zeroCount}`);
