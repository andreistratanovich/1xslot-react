import data from "./json/data.json";
import names from "./json/names.json";

const mergedData = {};

for (let groupId in names) {
  let items = Object.keys(names[groupId].B).map((id) => {
    return {
      id: null || id,
      name: null || names[groupId].B[id].N,
      price: null,
      balance: null,
    };
  });

  mergedData[groupId] = {
    groupName: names[groupId].G,
    items,
  };
}

data.Value.Goods.forEach((point) => {
  mergedData[point.G].items.forEach((item) => {
    if (point.T == item.id) {
      item.price = point.C;
      item.balance = point.P;
    }
  });
});

export default mergedData;
