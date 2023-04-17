const fs = require("fs")

const target = process.cwd()

function cap(str)
{
    return str.substring(0, 1).toUpperCase()+str.substring(1)
}

exports.go = function()
{
    const javaSample = fs.readFileSync(__dirname+"/Sample.java")

    fs.readdirSync(target).map((file) => 
    {
        if (file.substring(file.lastIndexOf(".")) == ".dat")
        {
            const file_name = file.substring(0, file.lastIndexOf("."))
            let out = javaSample.toString().replace("Sample", cap(file_name))
            out = out.replace('"SampleInput"' `new File("./${file_name}.dat")`)
            fs.writeFileSync(cap(file_name)+".java", out)
        }
    })
}