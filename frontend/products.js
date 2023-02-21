export const products = [
  {
    id: process.env.REACT_APP_VEGAN_PIZZA_PRICE_ID,
    product: "Vegan Pizza",
    price: 10.55,
    image: "/assets/images/vegan_pizza.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus massa sed velit sagittis dignissim. Praesent lectus risus, molestie sed sapien at, ultricies facilisis tellus.",
    sizes: [5, 6, 8],
  },
  {
    id: process.env.REACT_APP_FOUR_CHEESE_PRICE_ID,
    product: "Four Cheese",
    price: 15.0,
    image: "/assets/images/four_cheese.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus massa sed velit sagittis dignissim. Praesent lectus risus, molestie sed sapien at, ultricies facilisis tellus.",
    sizes: [4, 5, 6, 8],
  },
  {
    id: process.env.REACT_APP_HAM_PIZZA_PRICE_ID,
    product: "Ham Pizza",
    price: 15.99,
    image: "/assets/images/ham.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus massa sed velit sagittis dignissim. Praesent lectus risus, molestie sed sapien at, ultricies facilisis tellus.",
    sizes: [4, 5, 6, 8],
  },
  {
    id: process.env.REACT_APP_MEATBALL_PIZZA_PRICE_ID,
    product: "Meatball Pizza",
    price: 15.99,
    image: "/assets/images/meetball.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus massa sed velit sagittis dignissim. Praesent lectus risus, molestie sed sapien at, ultricies facilisis tellus.",
    sizes: [5, 6, 8],
  },
  {
    id: process.env.REACT_APP_MARGHERITA_PIZZA_PRICE_ID,
    product: "Margherita",
    price: 9.95,
    image: "/assets/images/tomato_basil.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus massa sed velit sagittis dignissim. Praesent lectus risus, molestie sed sapien at, ultricies facilisis tellus.",
    sizes: [4, 5, 6, 8],
  },
  {
    id: process.env.REACT_APP_BUFFALO_PIZZA_PRICE_ID,
    product: "Buffalo Mozzarella Pizza",
    price: 15.55,
    image: "/assets/images/mozzarella.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus massa sed velit sagittis dignissim. Praesent lectus risus, molestie sed sapien at, ultricies facilisis tellus.",
    sizes: [5, 6, 8],
  },
];

export const getProductData = (id) => {
  let productData = products.find((product) => product.id === id);
  return productData;
};
