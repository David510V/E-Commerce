export const items = [
  {
    id: 12312412,
    name: "Dod",
    description: "dawdaw awdwa wad",
    price: 20,
    category_id: 124,
    inventory_id: 2232,
    discount_id: 33344,
    reviews: [
      {
        id: 2,
        name: "Matilda Brown",
        date: "14.08.2021",
        desc: "The dress is great! Very classy",
        rate: 4,
      },
      {
        id: 3,
        name: "Yotam Wiess",
        date: "06.02.2021",
        desc: "The dress is great! Very classy",
        rate: 2,
      },
    ],
  },
];

export const categories = [
  {
    id: 1,
    name: "New",
    desc: "New",
  },
  {
    id: 1,
    name: "Sale",
    desc: "Sale",
  },
  {
    id: 1,
    name: "Clothes",
    desc: "Shoes",
  },
];

export const inventory = [
  {
    id: 2232,
    quantity: 0,
  },
];

export const discount = [
  {
    id: 33344,
    name: "Sale Discount",
    desc: "Discount Sale",
    discount_percent: 0.2,
  },
];
