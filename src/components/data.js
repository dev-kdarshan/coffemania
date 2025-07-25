const coffeeProducts = [
  // Cold Brew (6)
  {
    id: 1,
    name: "Cold Brew Bottle",
    img: "https://img.freepik.com/premium-psd/cold-brew-coffee-bottle-mockup_35913-2648.jpg",
    price: 349,
    info: "Chilled, smooth cold brew made from premium Arabica beans.",
    category: "Cold Brew"
  },
  {
    id: 2,
    name: "Coconut Cold Brew",
    img: "https://uncommonlywell.co/wp-content/uploads/2018/03/feature-1.jpg",
    price: 369,
    info: "Light, tropical cold brew with real coconut infusion.",
    category: "Cold Brew"
  },
  {
    id: 3,
    name: "Iced Coffee Can",
    img: "https://grind.co.uk/cdn/shop/files/RTD_4_800x.jpg?v=1739877977",
    price: 179,
    info: "Ready-to-drink chilled coffee in a stylish can.",
    category: "Cold Brew"
  },
  {
    id: 4,
    name: "Nitro Cold Brew",
    img: "https://media.istockphoto.com/id/641501792/photo/frothy-nitro-cold-brew-coffee.jpg?s=612x612&w=0&k=20&c=5xOtDrXRBlKYgLGb0XZ812ylcLsdvwu_Yoq7_YRmdu0=",
    price: 459,
    info: "Cold brew infused with nitrogen for a creamy texture.",
    category: "Cold Brew"
  },
  {
    id: 5,
    name: "Cinnamon Cold Brew",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ61YkurOl3gBwl_NMpdCl4eukefzH7usk3Fw&s",
    price: 389,
    info: "Cold brew infused with a touch of cinnamon.",
    category: "Cold Brew"
  },
  {
    id: 6,
    name: "Mint Cold Brew",
    img: "https://img.freepik.com/free-photo/milk-pouring-into-glass-with-coffee_23-2148349600.jpg?semt=ais_hybrid&w=740",
    price: 359,
    info: "Refreshing mint blended with classic cold brew.",
    category: "Cold Brew"
  },

  // Instant Coffee (5)
  {
    id: 7,
    name: "Instant Coffee Mix",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    price: 149,
    info: "Quick and tasty — your go-to coffee mix for busy mornings.",
    category: "Instant Coffee"
  },
  {
    id: 8,
    name: "Hazelnut Instant Coffee",
    img: "https://m.media-amazon.com/images/I/71EsM+xdgOL._AC_UF350,350_QL80_.jpg",
    price: 259,
    info: "Creamy hazelnut flavored coffee to brighten your mood.",
    category: "Instant Coffee"
  },
  {
    id: 9,
    name: "Decaf Delight",
    img: "https://essencecoffee.ie/wp-content/uploads/2024/07/decaf.png",
    price: 299,
    info: "All the flavor, none of the caffeine.",
    category: "Instant Coffee"
  },
  {
    id: 10,
    name: "Pumpkin Spice Instant",
    img: "https://images.squarespace-cdn.com/content/v1/5d13e3b6ff9d350001be321c/1601598509000-FBT7GDRHZJVOQSGOG6GT/processed_20201001_141402.jpg",
    price: 319,
    info: "Pumpkin spice twist on instant coffee goodness.",
    category: "Instant Coffee"
  },
  {
    id: 11,
    name: "Classic Instant Espresso",
    img: "https://m.media-amazon.com/images/I/71mRMRXcV3L.jpg",
    price: 279,
    info: "Bold espresso-style instant coffee for a quick fix.",
    category: "Instant Coffee"
  },

  // Espresso (5)
  {
    id: 12,
    name: "Espresso Roast Beans",
    img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&w=800&q=80",
    price: 499,
    info: "Strong, rich espresso roast for home brewers and enthusiasts.",
    category: "Espresso"
  },
  {
    id: 13,
    name: "Double Espresso Shot",
    img: "https://www.shutterstock.com/image-photo/close-capture-double-espresso-shot-600nw-2524508273.jpg",
    price: 199,
    info: "A bold punch of double espresso for real coffee lovers.",
    category: "Espresso"
  },
  {
    id: 14,
    name: "Ristretto Shot",
    img: "https://media.istockphoto.com/id/1805971378/photo/glass-cup-of-ristretto-coffee-on-the-bar-counter-with-blurred-background-copy-space.jpg?s=612x612&w=0&k=20&c=Q72OqRkna_tQ6-ke7_v__o5nBCRhOu9SbmO6XMLrWgQ=",
    price: 199,
    info: "Short, strong, and flavorful Italian ristretto.",
    category: "Espresso"
  },
  {
    id: 15,
    name: "Arabica Espresso Beans",
    img: "https://media.istockphoto.com/id/1177900338/photo/cup-of-espresso-with-coffee-beans.jpg?s=612x612&w=0&k=20&c=5cAWrCndkNTzBkcFKFqEn3eXvEwBT30uMRkSogaH-oY=",
    price: 549,
    info: "Premium Arabica beans roasted for deep espresso flavor.",
    category: "Espresso"
  },
  {
    id: 16,
    name: "Espresso Shot Can",
    img: "https://media.istockphoto.com/id/1126871442/photo/coffee-cup.jpg?s=612x612&w=0&k=20&c=Jp8v8YqgT9ws-lMN6qiMZmpp5rGlsBpaRCeMS_DmzKs=",
    price: 179,
    info: "Ready-to-drink espresso energy in a small can.",
    category: "Espresso"
  },

  // Latte (5)
  {
    id: 17,
    name: "Vanilla Latte Blend",
    img: "https://cdnimg.webstaurantstore.com/images/products/large/107078/1995951.jpg",
    price: 299,
    info: "Sweet vanilla and robust coffee blended into perfection.",
    category: "Latte"
  },
  {
    id: 18,
    name: "Café au Lait Classic",
    img: "https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA=",
    price: 249,
    info: "A smooth mix of steamed milk and rich coffee.",
    category: "Latte"
  },
  {
    id: 19,
    name: "Turmeric Latte Mix",
    img: "https://media.istockphoto.com/id/1207314265/photo/closeup-view-of-turmeric-latte-cup-on-a-textured-dark-background.jpg?s=612x612&w=0&k=20&c=qikzaGqyU1bFm09CMRlCEJqX8cY4nGs1pV2Q7NVqfWs=",
    price: 289,
    info: "Golden turmeric and coffee for a healthy morning ritual.",
    category: "Latte"
  },
  {
    id: 20,
    name: "Cinnamon Latte Blend",
    img: "https://media.istockphoto.com/id/639325056/photo/hot-drink.jpg?s=612x612&w=0&k=20&c=0oAI0Gr_E7VEEFeuaw3eBjtTii7dGLGsbCbW0YE97Rw=",
    price: 289,
    info: "Cinnamon warmth meets velvety coffee.",
    category: "Latte"
  },
  {
    id: 21,
    name: "Butter Latte",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRRMRq7y_eaMSrwjJkSeZs7MKiRGGPKUHFA&s",
    price: 349,
    info: "Keto-inspired butter latte for energy and flavor.",
    category: "Latte"
  },

  // Mocha (6)
  {
    id: 22,
    name: "Choco Mocha Blend",
    img: "https://media.istockphoto.com/id/1371303553/photo/coffee-and-chocolate-cocktail-with-whipped-cream.jpg?s=612x612&w=0&k=20&c=O3ZIVpWd6ADADg0ELcjkqD1qkWPJsvKE4AU_yoLdm5Y=",
    price: 329,
    info: "A rich fusion of chocolate and coffee for dessert lovers.",
    category: "Mocha"
  },
  {
    id: 23,
    name: "Toffee Nut Mocha",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8W_MuK03Be8pPhChlHlr9brmk9vxl0QQ2w&s",
    price: 359,
    info: "Toffee, nuts, and chocolate meet coffee bliss.",
    category: "Mocha"
  },
  {
    id: 24,
    name: "White Chocolate Mocha",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUhk8lVaYIXnEi-SKAoDqzyKD5I85ufm6iA&s",
    price: 349,
    info: "Creamy white chocolate and coffee harmony.",
    category: "Mocha"
  },
  {
    id: 25,
    name: "Dark Mocha Supreme",
    img: "https://m.media-amazon.com/images/I/81K71-LxtjL._SL1500_.jpg",
    price: 369,
    info: "Deep dark chocolate infused with espresso.",
    category: "Mocha"
  },
  {
    id: 26,
    name: "Salted Caramel Mocha",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3yNp0cwU5a7vjnjs0mgFzSiHITgB81ftZA&s",
    price: 379,
    info: "Sweet and salty mocha mix with caramel hints.",
    category: "Mocha"
  },
  {
    id: 27,
    name: "Mocha Frappe Mix",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxN2zpKPTfEcEPYP_w0sGrPV2Ujnjyw6nIiw&s",
    price: 399,
    info: "Instant mocha frappe delight for chilled indulgence.",
    category: "Mocha"
  }
];

export default coffeeProducts;
