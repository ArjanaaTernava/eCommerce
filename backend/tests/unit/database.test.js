const chai = require("chai");
const sinon = require("sinon");
const mongoose = require("mongoose");
const expect = chai.expect;

const connectDatabase = require("../../config/database");

/* 

Here's a breakdown of the test:

The test sets up stubs for mongoose.connect and console.log methods using Sinon.
Before each test, the stubs are created.
After each test, the original methods are restored.
The test case checks if connectDatabase connects to the database with the provided URI and options.
A fake connection object is created and assigned.
The mongoose.connect stub is configured to resolve with the fake connection.
The connectDatabase function is called and awaited.
Assertions are made to ensure the stubs were called correctly and the expected log message was logged.
This test verifies the functionality of connectDatabase and ensures it connects to the database and logs the appropriate message.

*/

describe("connectDatabase", () => {
  let mongooseConnectStub;
  let consoleLogStub;

  beforeEach(() => {
    // Create a stub for the mongoose.connect method
    mongooseConnectStub = sinon.stub(mongoose, "connect");
    // Create a stub for the console.log method
    consoleLogStub = sinon.stub(console, "log");
  });

  afterEach(() => {
    // Restore the original methods after each test
    mongoose.connect.restore();
    console.log.restore();
  });

  it("Should connect to the database with the provided URI and options", async () => {
    const fakeConnection = {
      connection: {
        host: "localhost",
      },
    };

    // Stub the mongoose.connect method to resolve with a fake connection object
    mongooseConnectStub.resolves(fakeConnection);

    await connectDatabase(); // Await the connectDatabase function

    // Assertions
    expect(mongooseConnectStub.calledOnce).to.be.true;
    expect(
      mongooseConnectStub.calledWith(process.env.DB_LOCAL_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).to.be.true;
    expect(
      consoleLogStub.calledOnceWith(
        `Database connected with HOST: ${fakeConnection.connection.host}`
      )
    ).to.be.true;
  });
});
