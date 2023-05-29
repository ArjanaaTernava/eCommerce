const seeder = require("../utils/seeder");

(async () => {
  await seeder.seedData();
  process.exit();
})();
