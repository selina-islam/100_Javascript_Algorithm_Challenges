// 1. Give a rectangular matrix of characters, add a border of asterisks(*) to it.

/* 
Example:
For: picture =['abc', 'ded']

The output should be:
addBOrder(picture)=['*****', "*abc*", "*ded*", "*****"]

Input/Output:
 [time limit] 400ms (js)
[input] arrays.string picture

Hints: 
=> concat() 
=> unshift()
=> push()

A non-empty array of non-empty equal-length strings.
*/

function adBorder(picture) {
        let wall="*".repeat(picture[0].length + 2)
        picture.unshift(wall)
        picture.push(wall)
        for (let i = 1; i < picture.length - 1; i++){
                picture[i]="*".concat(picture[i], "*")
        }
        return picture
}
console.log(adBorder(["abc", "ded"]))

// ans: [ '*****', '*abc*', '*ded*', '*****' ]








/* 

### 🧒 গল্প: ফ্রেমে ছবি

তুমি একটা ছবি এঁকেছো:

```
abc  
ded
```

কিন্তু ছবির চারপাশে ফ্রেম নেই। তুমি ভাবলে —
**"ছবিটার চারপাশে তারার (\*) ফ্রেম বানাই!"**

---

### 🤔 কী করতে হবে?

1. ছবির **উপরে আর নিচে** সম্পূর্ণ তারায় ভরা লাইন ➤ যেমন `*****`
2. ছবির **প্রতিটা লাইনের আগে-পরে** একটা `*` ➤ যেমন `*abc*`

---

### 🎨 নতুন ছবি হবে:

```
*****
*abc*
*ded*
*****
```

---

এই কাজটাই `adBorder()` ফাংশন করে:

```js
function adBorder(picture) {
  let wall = "*".repeat(picture[0].length + 2); // উপর-নিচের দেয়াল
  picture.unshift(wall); // উপরে দেয়াল
  picture.push(wall);    // নিচে দেয়াল

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*" + picture[i] + "*"; // মাঝের লাইনের চারপাশে *
  }

  return picture;
}
```

---

### ✅ মনে রাখো:

> এটা ঠিক যেন একটা ছোট ছবি নিয়ে তুমি ওটার চারপাশে "**তারার ফ্রেম**" লাগিয়ে দাও!


*/

