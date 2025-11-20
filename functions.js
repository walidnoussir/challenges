// // funtion 3adya :
// function nameFunction() {
//   // code
// }

// const nameFunc = () => {

// }

// challenge 1
const remplirTable = (length) => {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(i);
  }
  console.log(arr);
};

// remplirTable(6);

// challenge 2
const sumArr = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  return sum;
};

// console.log(sumArr([1, 2, 3, 5, 6]));
// challenge 3
const maxOfArr = (arr) => {
  const max = arr.sort((a, b) => a - b).at(-1);
  console.log(max);
};

// maxOfArr([1, 3, 2, 6, 4]);
// maxOfArr([2, 3, 4, 5, 200]);

// challenge 4
const countElement = (arr, value) => {
  let count = 0;
  // arr.forEach((element) => {
  //   if (element === value) count++;
  // });
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === value) count++;
  }
  console.log(count);
};
// countElement([1, 2, 3, 4, 2], 2);

// challenge 5
const reverseArr = (arr) => {
  const reversedArray = arr.reverse();
  console.log(reversedArray);
};

// reverseArr([1, 2, 3]);
// challenge 6
const filterPair = (arr) => {
  return arr.filter((element) => element % 2 === 0);
};

// console.log(filterPair([1, 2, 3, 4, 5, 6, 7, 8]));
// challenge 7
const multipleArr = (arr) => {
  return arr.reduce((acc, cur) => acc * cur, 1);
};

// console.log(multipleArr([1, 2, 3, 2]));

// challenge 8
const moyArr = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
};

// console.log(moyArr([1, 2, 3, 2]));

// challenge 9
const doubleVal = (arr) => {
  const newArr = arr.map((element) => element * 2);
  arr.forEach((element) => console.log(element * 2));

  // return newArr;
};

//
// console.log(doubleVal([2, 3, 4, 5]));
// doubleVal([2, 3, 4, 5]);
// challenge 10
const concatTwoArr = (arr1, arr2) => {
  const arr = arr1.concat(arr2);
  return arr;
};

// console.log(concatTwoArr([1, 3, 4], [6, 7, 8]));
// challenge 11
const deleteDouble = (arr) => {
  return arr.reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }
    return acc;
  }, []);
};
// console.log(deleteDouble([1, 3, 4, 1]));
// challenge 12
const multipleOfNumber = (number) => {
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(number * i);
  }

  console.log(arr);
};

// multipleOfNumber(3);

const longWord = (arr, length) => {
  return arr.filter((element) => element.length >= length);
};

// console.log(longWord(["walid", "ad", "ffe", "efef", "oussama"], 5));
