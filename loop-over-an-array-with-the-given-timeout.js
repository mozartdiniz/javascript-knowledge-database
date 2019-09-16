/*
Loop over an array with the given timeout for each element

Facebook

Advance
*/

const input = [
  {
    name: "event1",
    time: 1000
  },
  {
    name: "event2",
    time: 2000
  },
  {
    name: "event3",
    time: 3000
  },
  {
    name: "event4",
    time: 4000
  }
];

const eventWalker = (events, previousCounter) => {
  const counter = previousCounter !== undefined ? previousCounter + 1 : 0;
  const item = events[counter];

  console.log(item.name, new Date(), "started");
  setTimeout(() => {
    console.log(item.name, new Date(), "executed \n");

    if (counter < events.length - 1) {
      eventWalker(events, counter);
    }
  }, item.time);
};

eventWalker(input);
