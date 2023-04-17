const fs = require("fs")

const target = process.cwd()

function cap(str)
{
    return str.substring(0, 1).toUpperCase()+str.substring(1)
}

exports.go = function(problems)
{
    const javaSample = fs.readFileSync(__dirname+"/Sample.java")
    
    problems = parseInt(problems) || 1

    for (let i = 1; i <= problems; i++)
    {
        const file_name = "problem1"
        let out = javaSample.toString().replace("Sample", "problem1")
        out = out.replace('"SampleInput"', "System.In")
        fs.writeFileSync(cap(file_name)+".java", out)
    }
}