const datamatch = require("./dat-match.js")
const genbat = require("./genbat.js")

const arg1 = process.argv[2]
if (arg1 == "datm")
    datamatch.go()
else if (arg1 == "cbat")
    genbat.go()