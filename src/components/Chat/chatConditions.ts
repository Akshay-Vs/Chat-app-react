import getProducts from "../../libs/getProducts";
import message from "../../types/messageType";

export const getResponse = (message: message) => {
  const type = message.type;
  const text = message.content.text;
  const content = message.content;
  const products = getProducts();

  if (text == "What's on sale") {
    return {
      type: "product",
      content: products,
      showTemplate: false,
    };
  }
  if (text == "Browse products") {
    return {
      type: "text",
      isBot: true,
      text: "What are you looking for?",
      buttons: ["Shoes", "Shirts", "Pants"],
      showTemplate: false,
    };
  }
  if (text == "About Us") {
    return {
      type: "text",
      isBot: true,
      text: "There are many variations of passages of Lorem Ipsum available, but the majority",
      buttons: ["What's on sale"],
      showTemplate: false,
    };
  }
  if (type == "product") {
    return {
      type: "text",
      isBot: true,
      text: `Are you sure to but ${content.name} for $${content.price}`,
      buttons: ["Yes", "No"],
      showTemplate: false,
    };
  }
  if (text == "Yes") {
    return {
      type: "text",
      isBot: true,
      text: "Thanks for shopping with us",
      buttons: [],
      showTemplate: true,
    };
  }

  if (text == "No") {
    return {
      type: "text",
      isBot: true,
      text: "Order cancelled",
      buttons: [],
      showTemplate: true,
    };
  }
  return {
    type: "text",
    isBot: true,
    text: "No results found",
    buttons: [],
    showTemplate: true,
  };
};
