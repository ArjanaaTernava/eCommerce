const chai = require("chai");
const sinon = require("sinon");
const Product = require("../../models/product");
const Brand = require("../../models/brands");
const Category = require("../../models/category");
const Seller = require("../../models/seller");
const seeder = require("../../utils/seeder");

const expect = chai.expect;

/* 

Here are 5 different tests for the corresponding seeding functions. 

Here's a breakdown of the test:
The tests are written using the chai assertion library and the sinon library for mocking and stubbing.

The test file focuses on testing the seeding functions for different data types, such as products, brands, categories, and sellers. It verifies that these functions perform the necessary database operations, such as deleting existing data and inserting new data.

Each test case sets up mock objects for the database models (Product, Brand, Category, Seller) and uses them to assert that the expected methods are called. It also stubs the console.log method to check if the appropriate log statements are outputted during the seeding process.

The test cases ensure that the Seeder functions work correctly and perform the expected actions, such as deleting existing data, adding new data, and logging relevant information.

Overall, this test file helps validate the correctness of the data seeding functionality in the application, ensuring that the database is properly populated with the required data.

*/

describe("Seeder", () => {
  let productModelMock;
  let brandModelMock;
  let categoryModelMock;
  let sellerModelMock;

  beforeEach(() => {
    // Create mocks for the models
    productModelMock = sinon.mock(Product);
    brandModelMock = sinon.mock(Brand);
    categoryModelMock = sinon.mock(Category);
    sellerModelMock = sinon.mock(Seller);
  });

  afterEach(() => {
    // Restore the original behavior of the models
    productModelMock.restore();
    brandModelMock.restore();
    categoryModelMock.restore();
    sellerModelMock.restore();
  });

  it("should seed data for products", async () => {
    const deleteManyMock = productModelMock.expects("deleteMany").resolves();
    const insertManyMock = productModelMock.expects("insertMany").resolves();
    const consoleLogStub = sinon.stub(console, "log");

    await seeder.seedProducts();

    // Assertions
    expect(deleteManyMock.calledOnce).to.be.true;
    expect(insertManyMock.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith("Products are deleted")).to.be.true;
    expect(consoleLogStub.calledWith("All Products are added.")).to.be.true;

    // Restore the stubbed console.log method
    consoleLogStub.restore();
  });

  it("should seed data for brands", async () => {
    const deleteManyMock = brandModelMock.expects("deleteMany").resolves();
    const insertManyMock = brandModelMock.expects("insertMany").resolves();
    const consoleLogStub = sinon.stub(console, "log");

    await seeder.seedBrands();

    // Assertions
    expect(deleteManyMock.calledOnce).to.be.true;
    expect(insertManyMock.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith("Brands are deleted")).to.be.true;
    expect(consoleLogStub.calledWith("All Brands are added.")).to.be.true;

    // Restore the stubbed console.log method
    consoleLogStub.restore();
  });

  it("should seed data for categories", async () => {
    const deleteManyMock = categoryModelMock.expects("deleteMany").resolves();
    const insertManyMock = categoryModelMock.expects("insertMany").resolves();
    const consoleLogStub = sinon.stub(console, "log");

    await seeder.seedCategories();

    // Assertions
    expect(deleteManyMock.calledOnce).to.be.true;
    expect(insertManyMock.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith("Categories are deleted")).to.be.true;
    expect(consoleLogStub.calledWith("All Categories are added.")).to.be.true;

    // Restore the stubbed console.log method
    consoleLogStub.restore();
  });

  it("should seed data for sellers", async () => {
    const deleteManyMock = sellerModelMock.expects("deleteMany").resolves();
    const insertManyMock = sellerModelMock.expects("insertMany").resolves();
    const consoleLogStub = sinon.stub(console, "log");

    await seeder.seedSellers();

    // Assertions
    expect(deleteManyMock.calledOnce).to.be.true;
    expect(insertManyMock.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith("Sellers are deleted")).to.be.true;
    expect(consoleLogStub.calledWith("All Sellers are added.")).to.be.true;

    // Restore the stubbed console.log method
    consoleLogStub.restore();
  });

  it("should seed all data", async () => {
    const deleteManyProductMock = productModelMock.expects("deleteMany").resolves();
    const insertManyProductMock = productModelMock.expects("insertMany").resolves();
    const deleteManyBrandMock = brandModelMock.expects("deleteMany").resolves();
    const insertManyBrandMock = brandModelMock.expects("insertMany").resolves();
    const deleteManyCategoryMock = categoryModelMock.expects("deleteMany").resolves();
    const insertManyCategoryMock = categoryModelMock.expects("insertMany").resolves();
    const deleteManySellerMock = sellerModelMock.expects("deleteMany").resolves();
    const insertManySellerMock = sellerModelMock.expects("insertMany").resolves();
    const consoleLogStub = sinon.stub(console, "log");

    await seeder.seedData();

    // Assertions
    expect(deleteManyProductMock.calledOnce).to.be.true;
    expect(insertManyProductMock.calledOnce).to.be.true;
    expect(deleteManyBrandMock.calledOnce).to.be.true;
    expect(insertManyBrandMock.calledOnce).to.be.true;
    expect(deleteManyCategoryMock.calledOnce).to.be.true;
    expect(insertManyCategoryMock.calledOnce).to.be.true;
    expect(deleteManySellerMock.calledOnce).to.be.true;
    expect(insertManySellerMock.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith("Products are deleted")).to.be.true;
    expect(consoleLogStub.calledWith("All Products are added.")).to.be.true;
    expect(consoleLogStub.calledWith("Brands are deleted")).to.be.true;
    expect(consoleLogStub.calledWith("All Brands are added.")).to.be.true;
    expect(consoleLogStub.calledWith("Categories are deleted")).to.be.true;
    expect(consoleLogStub.calledWith("All Categories are added.")).to.be.true;
    expect(consoleLogStub.calledWith("Sellers are deleted")).to.be.true;
    expect(consoleLogStub.calledWith("All Sellers are added.")).to.be.true;

    // Restore the stubbed console.log method
    consoleLogStub.restore();
  });
});
