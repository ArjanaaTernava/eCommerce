/* 

Here are three unit tests in this file. Each test case corresponds to one of the seeding functions (seedProducts, seedBrands, seedCategories).

Here's a breakdown of the tests:

Test 1: "should seed data for products"

This test case verifies the behavior of the seedProducts function.
It checks that the deleteMany and insertMany methods of the Product model are called once, and the expected log messages are printed to the console.
Test 2: "should seed data for brands"

This test case verifies the behavior of the seedBrands function.
It checks that the deleteMany and insertMany methods of the Brand model are called once, and the expected log messages are printed to the console.
Test 3: "should seed data for categories"

This test case verifies the behavior of the seedCategories function.
It checks that the deleteMany and insertMany methods of the Category model are called once, and the expected log messages are printed to the console.

*/

const chai = require("chai");
const sinon = require("sinon");
const Product = require("../../models/product");
const Brand = require("../../models/brands");
const Category = require("../../models/category");
const seeder = require("../../utils/seeder");

const expect = chai.expect;



describe("Seeder", () => {
  let productModelMock;
  let brandModelMock;
  let categoryModelMock;

  beforeEach(() => {
    // Create mocks for the models
    productModelMock = sinon.mock(Product);
    brandModelMock = sinon.mock(Brand);
    categoryModelMock = sinon.mock(Category);
  });

  afterEach(() => {
    // Restore the original behavior of the models
    productModelMock.restore();
    brandModelMock.restore();
    categoryModelMock.restore();
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
});
