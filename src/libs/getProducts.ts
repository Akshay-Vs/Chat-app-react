const products = {
  type: "product",
  content: [
    {
      name: "Phoenix Flyer",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 49.99,
      image:
        "https://img.freepik.com/premium-photo/pair-nike-shoes-with-word-nike-bottom_861949-506.jpg",
      url: "https://www.google.com",
    },

    {
      name: "Serene Sole",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 58.99,
      image:
        "https://img.freepik.com/premium-photo/pair-nike-shoes-with-neon-lights-them_861949-502.jpg",
      url: "",
    },
    {
      name: "Ember Trail",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 62.29,
      image:
        "https://img.freepik.com/premium-photo/nike-shoe-is-lit-up-with-blue-light-it_861949-512.jpg",
      url: "",
    },
    {
      type: "product",
      name: "Cosmo Colada",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 39.99,
      image:
        "https://img.freepik.com/premium-photo/pair-nike-shoes-is-suspended-air_861949-515.jpg",
        url:""
    },
    {
      type: "product",
      name: "Galactica blue",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 73.99,
      image:
        "https://img.freepik.com/premium-photo/pair-nike-shoes-with-blue-lights-them_861949-497.jpg",
      url: "",
    },
    {
      type: "product",
      name: "Nimbus pro dark",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
      price: 48.99,
      image:
        "    https://img.freepik.com/premium-photo/pair-nike-shoes-with-word-nike-bottom_861949-506.jpg",
      url: "",
    },
  ],
};
const getProducts = () => {
  return products;
};

export default getProducts;
