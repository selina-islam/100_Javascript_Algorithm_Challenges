// 1. Write a function that returns the sum of two numbers.
// 2. write a function that returns the sum of all numbers regardless of # of params

/* 
Example:
for param1= 1 and param2 = 2, the outputs should be add (param1, param2)=3.

Input/Output: [time limit] 400ms (js)
[input] integer param1

Hints: 
=> arithmetic operations 
=> rest operations
=> forEach()
*/


function sum(param1, param2) {
        return param1 + param2
}
console.log(sum(1, 2)) / 3


function totalSum(...param1) {
        let total = 0;
        param1.forEach(perElem => {
               total+= perElem
        })
        return total
}
console.log(totalSum(1, 2, 3, 87)); // 93







/*

## 📖 **গল্প: “দুই ভাই আর তাদের বন্ধুদের টাকা যোগ”**

### 🎒 Part 1: দুই ভাইয়ের টাকার হিসাব

দুই ভাই — **রাহাত** আর **তাহাত**
তাদের কাছে টাকা আছে:

* রাহাত = 1 টাকা
* তাহাত = 2 টাকা

তারা চায়, "**মোট কত টাকা আছে আমাদের?**"

তুমি তখন একটা ছোট্ট ফাংশন বানালে:

```js
function sum(param1, param2) {
    return param1 + param2;
}
console.log(sum(1, 2)); // 3
```

এই ফাংশনটা শুধুমাত্র **দুই জনের যোগফল** জানাতে পারে।

---

### 👬 কিন্তু এখন?

রাহাত-তাহাত এর সাথে আরও বন্ধুরা আসলো:

* 👦 রাহাত: 1
* 👦 তাহাত: 2
* 👧 লিজা: 3
* 👨 রাহিম: 87

তারা সবাই বললো, "**তোমার ফাংশন কি আমাদের সবার টাকা যোগ করতে পারবে?**"

---

### 📦 তখন তুমি বললে:

“হ্যাঁ! আমি একটা জাদুর ব্যাগ বানাবো, যেখানে যত খুশি সংখ্যা ঢোকাও — সব যোগ হয়ে যাবে!”
এই জাদুর ব্যাগ মানে 👉 **rest parameter** (`...param1`)

---

### 🪄 তখন তুমি ফাংশনটা এমন বানালে:

```js
function totalSum(...param1) {
    let total = 0;
    param1.forEach(perElem => {
        total += perElem;
    });
    return total;
}
console.log(totalSum(1, 2, 3, 87)); // 93
```

---

### ⚙️ কিভাবে কাজ করে?

* `...param1` ➤ সব সংখ্যাগুলোকে একসাথে একটা ব্যাগে নিয়ে নেয় (array)
* `forEach()` ➤ প্রতিটা সংখ্যার ওপর ঘুরে, `total` এর সাথে যোগ করে

---

### 🧠 মনে রাখার গল্পসংক্ষেপ:

> প্রথম ফাংশন শুধু **দুই ভাইয়ের যোগফল** দিতে পারে।
> দ্বিতীয় ফাংশন হলো **বন্ধুদের নিয়ে বানানো বিশাল জাদুর ব্যাগ**, যেখানে যত খুশি সংখ্যাই ঢোকাও — সব যোগ করে দিবে!


*/