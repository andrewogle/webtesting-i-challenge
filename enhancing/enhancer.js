module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item, enhancement: item.enhancement < 20 ? item.enhancement +1 : 20 };
}

function fail(item) {
  if (item.enhancement > 16 && item.enhancement >= 15) {
    return { ...item, enhancement: item.enhancement - 1, durability: item.durability - 10 }
  } else if (item.enhancement >= 15) {
      return { ...item, durability: item.durability - 10 }
    } else {
        return { ...item, durability: item.durability - 5 }
    }
}

function repair(item) {

  return { ...item, durability:100 };
}

function get(item) {
  return { ...item };
}
