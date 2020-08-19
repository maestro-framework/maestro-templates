exports.handler = async (event) => {
  event.foo = Math.random() < 0.5 ? 1 : 2;
  return event;
};
