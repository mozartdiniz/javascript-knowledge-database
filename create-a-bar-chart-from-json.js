/*
Create a bar chart from json

Facebook

Intermediate
*/

const dataSample = {
  19: 100,
  25: 55,
  26: 45,
  27: 10,
  28: 20,
  30: 1,
  31: 1,
  32: 3,
  33: 10,
  60: 10,
  64: 5,
  65: 5,
  70: 1
};

const peopleByAgeInterval = (startAge, endAge, ageInterval, data) => {
  const buckets = Math.ceil((endAge - startAge) / ageInterval);
  const graph = new Array(buckets).fill(0);

  Object.keys(data).forEach(element => {
    const index = Math.floor((element - startAge) / ageInterval);
    graph[index] += data[element];
  });

  return graph;
};

console.log(peopleByAgeInterval(20, 65, 5, dataSample));
