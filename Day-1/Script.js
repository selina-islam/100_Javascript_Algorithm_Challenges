// Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.
//একটি পূর্ণসংখ্যার অ্যারে দাও, এবং যেসব স্থানে elementToReplace আছে, সেগুলোকে subtractionElem দিয়ে প্রতিস্থাপন করো।

// example:
// For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, subtractionElem) = [3, 2, 1].at

// Input / Output:
// # [time limit] 400ms(js)
// #[input] array.integer inputArray

// forEach ব্যবহার করে elementToReplace কে subtractionElem দিয়ে প্রতিস্থাপন করা:

function replaceElemntsUsingForEach(
  inputArray,
  elementToReplace,
  subtractionElem
) {
  inputArray.forEach((element, index) => {
    if (element === elementToReplace) {
      inputArray[index] = subtractionElem;
    }
  });
  console.log(inputArray);
}
replaceElemntsUsingForEach([1, 2, 1], 1, 3);
// output: [3,2,3]

// Define a function named replaceElemnts that takes three parameters:
// arr = the array of numbers
// elementToReplace = the value we want to replace
// subtractionElem = the value we want to replace it with

function replaceElemnts(arr, elementToReplace, subtractionElem) {
  // Use the map() method to loop through each item in the array
  return arr.map(function (item) {
    // If the current item is equal to the element we want to replace
    if (item === elementToReplace) {
      // Return the new value (substitution element)
      return subtractionElem;
    } else {
      // Otherwise, return the original item
      return item;
    }
  });
}
// Call the function and print the result to the console
// In this example: replace all 1s in [1, 2, 1] with 3
console.log(replaceElemnts([1, 2, 1], 1, 3));

// output: [3,2,3]








/*

### 🧺 ধরো তোমার একটা ঝুড়ি আছে:

```js
[1, 2, 1]
```

তুমি বললে:

> "সব 1 কে 3 দিয়ে বদলাবো।"

---

## 🛠️ উপায় 1: `forEach` ➤ ঝুড়ির ভেতরে ঢুকে জিনিস বদলাও

```js
inputArray.forEach((element, index) => {
  if (element === elementToReplace) {
    inputArray[index] = subtractionElem;
  }
});
```

🧠 মানে:

> এক এক করে জিনিস চেক করো, যদি 1 পাই ➤ ওখানেই 3 বসিয়ে দাও।

🔄 পুরোনো ঝুড়িই বদলাও।

---

## 🧳 উপায় 2: `map` ➤ নতুন ঝুড়ি বানাও, ঠিকঠাক জিনিস রেখে

```js
return arr.map(item => {
  if (item === elementToReplace) return subtractionElem;
  else return item;
});
```

🧠 মানে:

> এক এক করে দেখে ➤ নতুন ঝুড়িতে বসাও
> 1 থাকলে ➤ 3 বসাও
> না থাকলে ➤ আগেরটাই রাখো

🔄 পুরোনোটা না ছুঁয়ে ➤ নতুন ঝুড়ি তৈরি।

---

### ✅ Final Result:

```js
[3, 2, 3]
```

*/