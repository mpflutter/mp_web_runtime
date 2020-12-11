const fs = require("fs");
const code = fs.readFileSync("./build/index.html", { encoding: "utf-8" });
const newCode = code.replace(/\"\//gi, '"./');
fs.writeFileSync("./build/index.html", newCode);;
