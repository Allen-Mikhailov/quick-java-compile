const datamatch = require("./dat-match.js")
const genbat = require("./genbat.js")
const problem_gen = require("./problem_gen.js")

const arg1 = process.argv[2]

switch(arg1)
{
    case "datm":
        datamatch.go()
        break;
    case "cbat":
        genbat.go()
        break;
    case "pgen":
        problem_gen.go(process.argv[3]);
        break;
}