// ═══════════════════════════════════════
// FUNGSI A: INTERSECTION ARRAY
// ═══════════════════════════════════════

//  Versi Lambat: O(n²)
function intersectionSlow(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  }

  return result;
}
// Time: O(n²)
// Space: O(n)

//  Versi Cepat: O(n)
function intersectionFast(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = [];

  for (let item of arr1) {
    if (set2.has(item)) {
      result.push(item);
    }
  }

  return [...new Set(result)]; // hapus duplikat
}
// Time: O(n)
// Space: O(n)


// ═══════════════════════════════════════
// FUNGSI B: KELOMPOK ANAGRAM
// ═══════════════════════════════════════

function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    const key = word.split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}
// Time: O(n * k log k)
// Space: O(n)


// ═══════════════════════════════════════
// FUNGSI C: a² + b² = c²
// ═══════════════════════════════════════

//  Versi Lambat: O(n³)
function checkTripleSlow(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (arr[i] + arr[j] === arr[k] * arr[k]) {
          return true;
        }
      }
    }
  }

  return false;
}
// Time: O(n³)
// Space: O(1)


//  Versi Cepat: O(n log n)
function checkTripleFast(arr) {
  const squares = arr.map(x => x * x).sort((a, b) => a - b);

  for (let i = squares.length - 1; i >= 0; i--) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      const sum = squares[left] + squares[right];

      if (sum === squares[i]) return true;
      if (sum < squares[i]) left++;
      else right--;
    }
  }

  return false;
}
// Time: O(n log n)
// Space: O(n)


// ═══════════════════════════════════════
// TEST & UKUR WAKTU
// ═══════════════════════════════════════

// Data besar
const size = 5000;
const arr1 = Array.from({ length: size }, () => Math.floor(Math.random() * 1000));
const arr2 = Array.from({ length: size }, () => Math.floor(Math.random() * 1000));

const words = ['eat','tea','tan','ate','nat','bat'];

const nums = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100));


//  TEST FUNGSI A
console.time("Intersection Slow");
intersectionSlow(arr1, arr2);
console.timeEnd("Intersection Slow");

console.time("Intersection Fast");
intersectionFast(arr1, arr2);
console.timeEnd("Intersection Fast");


//  TEST FUNGSI B
console.log("Anagram:", groupAnagrams(words));


//  TEST FUNGSI C
console.time("Triple Slow");
checkTripleSlow(nums);
console.timeEnd("Triple Slow");

console.time("Triple Fast");
checkTripleFast(nums);
console.timeEnd("Triple Fast");