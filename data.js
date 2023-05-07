function generateRandomPrice() {
  return Math.random() * 200 + 200;
}

module.exports = function () {
  return {
    products: [
      {
        id: 1,
        name: "Classic White T-Shirt",
        category: "Men's Shirts",
        description:
          "A comfortable and versatile white t-shirt made from high-quality cotton.",
        price: generateRandomPrice(),
      },
      {
        id: 2,
        name: "Slim-Fit Blue Jeans",
        category: "Men's Pants",
        description:
          "These slim-fit blue jeans are made from premium denim and feature a classic five-pocket design.",
        price: generateRandomPrice(),
      },
      {
        id: 3,
        name: "Leather Dress Shoes",
        category: "Men's Shoes",
        description:
          "These stylish leather dress shoes are perfect for any formal occasion.",
        price: generateRandomPrice(),
      },
      {
        id: 4,
        name: "Wool Peacoat",
        category: "Men's Jackets",
        description:
          "Stay warm and stylish with this classic wool peacoat, featuring a double-breasted design and a cozy lining.",
        price: generateRandomPrice(),
      },
      {
        id: 5,
        name: "Plaid Flannel Shirt",
        category: "Men's Shirts",
        description:
          "Made from soft and comfortable flannel, this plaid shirt is perfect for casual outings.",
        price: generateRandomPrice(),
      },
      {
        id: 6,
        name: "Cargo Shorts",
        category: "Men's Shorts",
        description:
          "These rugged cargo shorts feature plenty of pockets and are made from durable cotton.",
        price: generateRandomPrice(),
      },
      {
        id: 7,
        name: "Leather Belt",
        category: "Men's Accessories",
        description:
          "This stylish leather belt features a classic buckle and is the perfect finishing touch to any outfit.",
        price: generateRandomPrice(),
      },
      {
        id: 8,
        name: "Polo Shirt",
        category: "Men's Shirts",
        description:
          "Stay cool and comfortable in this classic polo shirt, made from breathable cotton.",
        price: generateRandomPrice(),
      },
      {
        id: 9,
        name: "Suede Chukka Boots",
        category: "Men's Shoes",
        description:
          "These versatile suede chukka boots are perfect for both casual and dressy occasions.",
        price: generateRandomPrice(),
      },
      {
        id: 10,
        name: "Hooded Sweatshirt",
        category: "Men's Sweatshirts",
        description:
          "This cozy hooded sweatshirt is made from soft and warm fleece and features a front kangaroo pocket.",
        price: generateRandomPrice(),
      },
      {
        id: 11,
        name: "Corduroy Pants",
        category: "Men's Pants",
        description:
          "Stay stylish and comfortable in these classic corduroy pants, featuring a straight-leg fit and a soft cotton fabric.",
        price: generateRandomPrice(),
      },
      {
        id: 12,
        name: "Leather Wallet",
        category: "Men's Accessories",
        description:
          "Keep your cards and cash organized with this sleek leather wallet, featuring multiple compartments and a classic design.",
        price: generateRandomPrice(),
      },
      {
        id: 13,
        name: "Graphic T-Shirt",
        category: "Men's Shirts",
        description:
          "Make a statement in this bold graphic t-shirt, featuring a unique design and a comfortable fit.",
        price: generateRandomPrice(),
      },
      {
        id: 14,
        name: "Running Shoes",
        category: "Men's Shoes",
        description:
          "These lightweight running shoes feature a breathable mesh upper and a cushioned sole for maximum comfort.",
        price: generateRandomPrice(),
      },
      {
        id: 15,
        name: "Bomber Jacket",
        category: "Men's Jackets",
        description:
          "Stay on trend with this stylish bomber jacket, featuring a sleek design and a comfortable fit.",
        price: generateRandomPrice(),
      },
      {
        id: 16,
        name: "Cargo Pants",
        category: "Men's Pants",
        description:
          "These versatile cargo pants feature plenty of pockets and a comfortable fit, making them perfect for any adventure.",
        price: generateRandomPrice(),
      },
      {
        id: 17,
        name: "Aviator Sunglasses",
        category: "Men's Accessories",
        description:
          "These classic aviator sunglasses feature a metal frame and polarized lenses for maximum protection.",
        price: generateRandomPrice(),
      },
      {
        id: 18,
        name: "Crewneck Sweatshirt",
        category: "Men's Sweatshirts",
        description:
          "This classic crewneck sweatshirt is made from soft and comfortable fleece and features a ribbed neckline and cuffs.",
        price: generateRandomPrice(),
      },
      {
        id: 19,
        name: "Dress Shirt",
        category: "Men's Shirts",
        description:
          "Look sharp and stylish in this classic dress shirt, made from high-quality cotton and featuring a modern fit.",
        price: generateRandomPrice(),
      },
      {
        id: 20,
        name: "Leather Watch",
        category: "Men's Accessories",
        description:
          "Keep track of time in style with this sleek leather watch, featuring a classic design and a comfortable strap.",
        price: generateRandomPrice(),
      },
    ],
    orders: [],
  };
};
