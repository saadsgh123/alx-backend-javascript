export default function hasValuesFromArray(mySet, MyArray) {
  return MyArray.every((ele) => mySet.has(ele));
}

