// load environment variables.
require("dotenv").config();

const { db } = require("./server/db/models");
const app = require("./server");
const PORT = process.env.PORT || 8080;

db.sync(/*{force: true}*/).then(() => {
  app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}.`);
  });
});
