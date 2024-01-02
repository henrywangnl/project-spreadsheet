const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;

const cells = [
  { id: "A1", value: 1 },
  { id: "A2", value: 2 },
  { id: "B1", value: 3 },
  { id: "B2", value: 4 },
  { id: "C1", value: 5 },
  { id: "C2", value: 6 },
];

const x = "sum(A1:C2)";
const range = (start, end) =>
  Array(end - start + 1)
    .fill(start)
    .map((element, index) => element + index);
const charRange = (start, end) =>
  range(start.charCodeAt(0), end.charCodeAt(0)).map((code) =>
    String.fromCharCode(code)
  );
const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
const idToText = (id) => cells.find((cell) => cell.id === id).value;
const elemValue = (num) => (character) => idToText(character + num);
const addCharacters = (character1) => (character2) => (num) =>
  charRange(character1, character2).map(elemValue(num));

const rangeExpanded = x.replace(
  rangeRegex,
  (_match, char1, num1, char2, num2) =>
    rangeFromString(num1, num2).map(addCharacters(char1)(char2))
);

// console.log(range(1, 2));

const str = [
  ["A1", "B1", "C1"],
  ["A2", "B2", "C2"],
];
console.log(str.toString());
