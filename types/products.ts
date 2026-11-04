export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  available: boolean;
}
export const products: Product[] = [
    {
        id: 1,
        name: "Handmade Crochet Blanket",
        image: "/back-accesories (9).jfif",
        price: 49.99,
        description: "A beautiful handmade crochet blanket, perfect for keeping warm on chilly evenings.",
        category: "Blankets",
        available: true,
    },
    {
        id: 2,
        name: "Handmade Crochet Scarf",
        image: "/back-accesories (9).jfif",
        price: 29.99,
        description: "A cozy handmade crochet scarf, perfect for adding warmth to your outfit.",
        category: "Scarves",
        available: true,
    },
    {
        id: 3,
        name: "Handmade Crochet Mittens",
        image: "/back-accesories (9).jfif",
        price: 39.99,
        description: "Warm and stylish handmade crochet mittens, ideal for cold weather.",
        category: "Accessories",
        available: true,
    },
    {
        id: 4,
        name: "Handmade Crochet Hat",
        image: "/back-accesories (9).jfif",
        price: 24.99,
        description: "A cute handmade crochet hat, perfect for keeping your head warm.",
        category: "Accessories",
        available: true,
    },
    {
        id: 5,
        name: "Handmade Crochet Shawl",
        image: "/back-accesories (9).jfif",
        price: 34.99,
        description: "A elegant handmade crochet shawl, great for adding a touch of sophistication to your outfit.",
        category: "Scarves",
        available: true,
    },
    {
        id:6,
        name:"Handmade Crochet Baby Blanket",
        image:"/back-accesories (9).jfif",
        price:59.99,
        description: "A adorable handmade crochet baby blanket, perfect for keeping your little one warm.",
        category: "Blankets",
        available: true,
    },
     {
        id: 7,
        name: "Handmade Crochet Shawl",
        image: "/back-accesories (9).jfif",
        price: 34.99,
        description: "A elegant handmade crochet shawl, great for adding a touch of sophistication to your outfit.",
        category: "Scarves",
        available: true,
    },
     {
        id: 8,
        name: "Handmade Crochet Shawl",
        image: "/back-accesories (9).jfif",
        price: 34.99,
        description: "A elegant handmade crochet shawl, great for adding a touch of sophistication to your outfit.",
        category: "Scarves",
        available: true,
    },
]