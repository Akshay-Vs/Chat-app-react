import getProducts from "../../libs/getProducts";
import message from "../../types/messageType";

export const getResponse = (message: message) => {
  const type = message.type;
  const text = message.content.text;
  const content = message.content;
  const products = getProducts();

  console.log("message", message);

  if (text == "What's on sale") {
    return {
      type: "product",
      content: products,
      showTemplate: false,
      showPayment: false,
    };
  }
  if (text == "Browse products") {
    return {
      type: "text",
      isBot: true,
      text: "What are you looking for?",
      buttons: ["Shoes", "Shirts", "Pants"],
      showTemplate: false,
      showPayment: false,
    };
  }
  if (text == "About Us") {
    return {
      type: "text",
      isBot: true,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority",
      buttons: ["What's on sale"],
      showTemplate: false,
      showPayment: false,
    };
  }
  if (type == "product") {
    return {
      type: "text",
      isBot: true,
      text: `Are you sure to buy ${content.name} for $${content.price}`,
      buttons: ["Yes", "No"],
      image: content.image,
      showTemplate: false,
      showPayment: false,
    };
  }
  if (text == "Yes") {
    return {
      type: "text",
      isBot: true,
      text: "Proceeding to payment",
      buttons: [],
      showTemplate: false,
      showPayment: true,
    };
  }

  if (text == "No") {
    return {
      type: "text",
      isBot: true,
      text: "Order cancelled",
      buttons: [],
      showTemplate: true,
      showPayment: false,
    };
  }
  return {
    type: "text",
    isBot: true,
    text: "No results found",
    buttons: [],
    showTemplate: true,
    showPayment: false,
  };
};
