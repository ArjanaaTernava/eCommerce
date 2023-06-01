const Product = require("../models/product");
const Brand = require("../models/brands");
const Category = require("../models/category");
const Seller = require("../models/seller");
const User = require("../models/user");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const QnA = require("../models/qna");
const socialmedia = require("../models/socialmedia");

const products = require("../data/product.json");
const brands = require("../data/brands.json");
const categories = require("../data/categories.json");
const sellers = require("../data/sellers.json");
const users = require("../data/users.json");
const qna = require("../data/qna.json");
const sm = require("../data/socialmedia.json");

// Setting dotenv file
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All Products are added.");
  } catch (error) {
    console.log(error.message);
  }
};

const seedBrands = async () => {
  try {
    await Brand.deleteMany();
    console.log("Brands are deleted");

    await Brand.insertMany(brands);
    console.log("All Brands are added.");
  } catch (error) {
    console.log(error.message);
  }
};
const seedQnA = async () => {
  try {
    await QnA.deleteMany();
    console.log("QnA are deleted");

    await QnA.insertMany(qna);
    console.log("All QnA are added.");
  } catch (error) {
    console.log(error.message);
  }
};

const seedSM = async () => {
  try {
    await socialmedia.deleteMany();
    console.log("socialmedia are deleted");

    await socialmedia.insertMany(sm);
    console.log("All socialmedia are added.");
  } catch (error) {
    console.log(error.message);
  }
};

const seedCategories = async () => {
  try {
    await Category.deleteMany();
    console.log("Categories are deleted");

    await Category.insertMany(categories);
    console.log("All Categories are added.");
  } catch (error) {
    console.log(error.message);
  }
};

const seedSellers = async () => {
  try {
    await Seller.deleteMany();
    console.log("Sellers are deleted");

    await Seller.insertMany(sellers);
    console.log("All Sellers are added.");
  } catch (error) {
    console.log(error.message);
  }
};

const seedUsers = async () => {
  try {
    await User.deleteMany();
    console.log("Users are deleted");

    // Hash passwords before inserting users
    const hashedUsers = users.map((user) => {
      const hashedPassword = bcrypt.hashSync(user.password, 10);
      return { ...user, password: hashedPassword };
    });

    await User.insertMany(hashedUsers);
    console.log("All Users are added.");
  } catch (error) {
    console.log(error.message);
  }
};

// // Connect to MongoDB using mongoose
// mongoose.connect("mongodb://localhost:27017/mydatabase", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// Seed function to create users
// const seedUsers = async () => {
//   try {
//     // Clear existing users
//     await User.deleteMany();
//     console.log("Users are deleted");

//     // Define the array of user objects to be seeded
//     const users = [
//       {
//         name: "Admin",
//         email: "admin@gmail.com",
//         password: "1234567890",
//         avatar: {
//           public_id: "d053f2394d420d8d3712046f4e8f80cc_r8ppce",
//           url: "https://res.cloudinary.com/projekti/image/upload/v1685489662/avatars/d053f2394d420d8d3712046f4e8f80cc_r8ppce.jpg",
//         },
//         role: "admin",
//       },
//       {
//         name: "User",
//         email: "user@gmail.com",
//         password: "1234567890",
//         avatar: {
//           public_id:
//             "hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny_amn6lx",
//           url: "https://res.cloudinary.com/projekti/image/upload/v1685489859/avatars/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny_amn6lx.png",
//         },
//         role: "user",
//       },
//     ];

//     // // Hash passwords for each user
//     // const hashedUsers = await Promise.all(
//     //   users.map(async (user) => {
//     //     const hashedPassword = await bcrypt.hash(user.password, 10);
//     //     return { ...user, password: hashedPassword };
//     //   })
//     // );

//     // Insert the seeded users into the database
//     await User.insertMany(users);
//     console.log("Users seeded successfully!");

//     // process.exit();
//   } catch (error) {
//     console.error("Error seeding users:", error);
//     process.exit(1);
//   }
// };

const seedData = async () => {
  await seedCategories();
  await seedSellers();
  await seedProducts();
  await seedBrands();
  await seedUsers();
  await seedQnA();
  await seedSM();
};

module.exports = {
  seedProducts,
  seedBrands,
  seedCategories,
  seedSellers,
  seedData,
  seedUsers,
  seedQnA,
  seedSM,
};
