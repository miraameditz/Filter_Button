const storeProducts = [
  { id: 1, name: "Ergonomic Mouse", category: "Electronics", price: 27.49 },
  { id: 2, name: "Gaming Laptop", category: "Electronics", price: 1299.99 },
  { id: 3, name: "Portable Speaker", category: "Electronics", price: 59.99 },
  { id: 4, name: "Executive Chair", category: "Furniture", price: 249.99 },
  { id: 5, name: "Adjustable Desk", category: "Furniture", price: 549.99 },
  {
    id: 6,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 109.99,
  },
  { id: 7, name: "Curved Monitor", category: "Electronics", price: 399.99 },
  {
    id: 8,
    name: "Stainless Steel Bottle",
    category: "Accessories",
    price: 18.99,
  },
  { id: 9, name: "Premium Yoga Mat", category: "Fitness", price: 49.99 },
  { id: 10, name: "Adjustable Dumbbells", category: "Fitness", price: 79.99 },
  { id: 11, name: "Trail Running Shoes", category: "Footwear", price: 89.99 },
  {
    id: 12,
    name: "High-End Smartphone",
    category: "Electronics",
    price: 799.99,
  },
  {
    id: 13,
    name: "Noise-Cancelling Headphones",
    category: "Electronics",
    price: 199.99,
  },
  { id: 14, name: "Leather Backpack", category: "Accessories", price: 59.99 },
  {
    id: 15,
    name: "Polarized Sunglasses",
    category: "Accessories",
    price: 24.99,
  },
  {
    id: 16,
    name: "Advanced Smartwatch",
    category: "Electronics",
    price: 299.99,
  },
  {
    id: 17,
    name: "Espresso Machine",
    category: "Home Appliances",
    price: 129.99,
  },
  {
    id: 18,
    name: "Professional Blender",
    category: "Home Appliances",
    price: 89.99,
  },
  {
    id: 19,
    name: "Digital Air Fryer",
    category: "Home Appliances",
    price: 149.99,
  },
  {
    id: 20,
    name: "Nonstick Cookware Set",
    category: "Home & Kitchen",
    price: 99.99,
  },
  {
    id: 21,
    name: "Robotic Vacuum",
    category: "Home Appliances",
    price: 249.99,
  },
  {
    id: 22,
    name: "Compact Dishwasher",
    category: "Home Appliances",
    price: 599.99,
  },
  { id: 23, name: "Graphic T-shirt", category: "Clothing", price: 19.99 },
  { id: 24, name: "Slim Fit Jeans", category: "Clothing", price: 49.99 },
  { id: 25, name: "Winter Jacket", category: "Clothing", price: 99.99 },
  { id: 26, name: "Running Sneakers", category: "Footwear", price: 69.99 },
  { id: 27, name: "Luxury Wristwatch", category: "Accessories", price: 199.99 },
  { id: 28, name: "Designer Belt", category: "Accessories", price: 24.99 },
  { id: 29, name: "Leather Wallet", category: "Accessories", price: 39.99 },
  { id: 30, name: "Sectional Sofa", category: "Furniture", price: 999.99 },
  { id: 31, name: "Marble Dining Table", category: "Furniture", price: 799.99 },
  { id: 32, name: "Wooden Bookshelf", category: "Furniture", price: 179.99 },
  {
    id: 33,
    name: "Convection Microwave",
    category: "Home Appliances",
    price: 99.99,
  },
  {
    id: 34,
    name: "2-Slice Toaster",
    category: "Home Appliances",
    price: 39.99,
  },
  {
    id: 35,
    name: "Rapid Boil Kettle",
    category: "Home Appliances",
    price: 59.99,
  },
  { id: 36, name: "Ionic Hair Dryer", category: "Beauty", price: 49.99 },
  { id: 37, name: "Herbal Shampoo", category: "Beauty", price: 14.99 },
  {
    id: 38,
    name: "Moisturizing Conditioner",
    category: "Beauty",
    price: 16.99,
  },
  { id: 39, name: "Charcoal Face Wash", category: "Beauty", price: 12.99 },
  { id: 40, name: "Luxury Perfume", category: "Beauty", price: 59.99 },
  { id: 41, name: "Matte Lipstick", category: "Beauty", price: 24.99 },
  { id: 42, name: "Pro Tablet", category: "Electronics", price: 399.99 },
  {
    id: 43,
    name: "Advanced Fitness Tracker",
    category: "Electronics",
    price: 129.99,
  },
  {
    id: 44,
    name: "Wireless Gaming Earbuds",
    category: "Electronics",
    price: 109.99,
  },
  {
    id: 45,
    name: "Action Sports Camera",
    category: "Electronics",
    price: 299.99,
  },
  { id: 46, name: "Quadcopter Drone", category: "Electronics", price: 999.99 },
  { id: 47, name: "Graphite Tennis Racket", category: "Sports", price: 99.99 },
  { id: 48, name: "Professional Football", category: "Sports", price: 39.99 },
  {
    id: 49,
    name: "All-Weather Camping Tent",
    category: "Outdoor",
    price: 199.99,
  },
  { id: 50, name: "Thermal Sleeping Bag", category: "Outdoor", price: 89.99 },
];

const container = document.querySelector(".container");

const check = (btnname) => {
  container.innerHTML = ``;
  console.log(btnname.innerHTML);
  const filtered = storeProducts.filter((item) => {
    return btnname.innerHTML === item.category;
  });
  console.log(typeof filtered);
  console.log(filtered);

  filtered.map((item) => {
    container.innerHTML += `
    <div class="card">
                <h2>Name :${item.name}</h2>
                <p>Catagoury : ${item.category}</p>
                <h2>Price : ${item.price}</h2>
    </div>`;
  });
};
