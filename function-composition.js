const fakeData = [
  {
    label: "a",
    value: 1
  },
  {
    label: "b",
    value: 2
  },
  {
    label: "c",
    value: 4
  }
];

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const getData = () => fakeData;
const map = d => d.map(i => i.value);
const findValue = a => a.find(i => i === 2);
const addLabel = x => `Value: ${x}`;

const result = pipe(
  getData,
  map,
  findValue,
  addLabel
)();

console.log(result);
