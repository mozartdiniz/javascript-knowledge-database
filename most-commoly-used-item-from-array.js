const countItems = items =>
  items.reduce((prev, curr) => {
    if (curr in prev) {
      prev[curr]++;
    } else {
      prev[curr] = 1;
    }

    return prev;
  }, {});

const getMostUsedItem = itemsObj =>
    Object.keys(itemsObj).map((i) => [i, itemsObj[i]]).sort((a,b) => b[1] - a[1])[0][0];

console.log(getMostUsedItem(countItems(["a", "b", "c", "a", "c", "z", "w"])));
