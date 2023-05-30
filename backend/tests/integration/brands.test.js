const chai = require("chai");
const expect = chai.expect;
const mongoose = require("mongoose");
const Category = require("../../models/category"); // Assuming you have defined the Category model

/* 

The test suite connects to a test database, clears the database before each test, and closes the database connection after all tests are complete. This ensures that each test runs in isolation and does not interfere with the data of other tests.

The test suite includes multiple test cases that validate different aspects of the Category model. It tests the validation of the "name" field, checking for error messages when the name is not provided or exceeds the maximum length. It also tests the creation of a category when the name is valid.

Additionally, the test suite includes tests for finding categories, including cases where no categories exist, retrieving all categories, and finding categories based on a specific condition.

Overall, the provided code demonstrates the characteristics of an integration test by testing the interaction between the Category model and the database, as well as verifying the expected behavior of the model's validation and querying functionality.

*/

// Connect to a test database
before((done) => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/eCommerce", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => done())
    .catch((err) => done(err));
});

// Clear the test database before each test
beforeEach((done) => {
  mongoose.connection
    .dropDatabase()
    .then(() => done())
    .catch((err) => done(err));
});

// Close the database connection after all tests are complete
after((done) => {
  mongoose.connection
    .close()
    .then(() => done())
    .catch((err) => done(err));
});

describe("Category model", function () {
  describe("name validation", function () {
    it("should throw an error when name is not provided", async function () {
      try {
        await Category.create({});
        throw new Error("Should have raised a validation error");
      } catch (error) {
        expect(error.errors).to.have.property("name");
        expect(error.errors.name.message).to.equal("Please enter product name");
      }
    });

    it("should throw an error when name exceeds the maximum length", async function () {
      const longName = "a".repeat(101); // Create a name that exceeds the maximum length

      try {
        await Category.create({ name: longName });
        throw new Error("Should have raised a validation error");
      } catch (error) {
        expect(error.errors).to.have.property("name");
        expect(error.errors.name.message).to.equal(
          "Product name cannot exceed 100 characters"
        );
      }
    });

    it("should create a category when name is valid", async function () {
      const categoryName = "Example Category";

      const createdCategory = await Category.create({ name: categoryName });

      expect(createdCategory.name).to.equal(categoryName);
      expect(createdCategory).to.have.property("updated");
      expect(createdCategory).to.have.property("created");
    });
  });

  describe("find categories", function () {
    beforeEach(async function () {
      await Category.deleteMany({}); // Clear the categories collection before each test
    });

    it("should return an empty array when no categories exist", async function () {
      const categories = await Category.find({});

      expect(categories).to.be.an("array");
      expect(categories).to.have.lengthOf(0);
    });

    it("should return all categories", async function () {
      // Create some sample categories
      const category1 = { name: "Category 1" };
      const category2 = { name: "Category 2" };
      await Category.create(category1);
      await Category.create(category2);

      const categories = await Category.find({});

      expect(categories).to.be.an("array");
      expect(categories).to.have.lengthOf(2);
      expect(categories[0].name).to.equal(category1.name);
      expect(categories[1].name).to.equal(category2.name);
    });

    it("should find categories based on a specific condition", async function () {
      // Create some sample categories
      const category1 = { name: "Category 1" };
      const category2 = { name: "Category 2" };
      await Category.create(category1);
      await Category.create(category2);

      const filteredCategories = await Category.find({ name: "Category 1" });

      expect(filteredCategories).to.be.an("array");
      expect(filteredCategories).to.have.lengthOf(1);
      expect(filteredCategories[0].name).to.equal(category1.name);
    });
  });
});
