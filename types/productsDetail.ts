export interface ProductDetail {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
  available: boolean;
}
export const productsdetail: ProductDetail[] =[
    {
        id: 1,
        name: "Handmade Crochet Blanket",
        image: "/hat (6).jfif",
        price: 29.99,
        description: "A beautiful handmade crochet blanket perfect for any home.",
        category: "Blankets",
        available: true 
    },
    {
        id: 2,
        name: "Handmade Crochet Scarf",
        image: "/hat (7).jfif",
        price: 19.99,
        description: "A cozy handmade crochet scarf for any season.",
        category: "Scarves",
        available: true
    },
    {
        id: 3,
        name: "Handmade Crochet Mittens",
        image: "/hat (8).jfif",
        price: 14.99,
        description: "Warm and stylish handmade crochet mittens for the winter.",
        category: "Accessories",
        available: true
},
    
]