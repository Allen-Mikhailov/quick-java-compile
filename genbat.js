const fs = require("fs")

const target = process.cwd()

exports.go = function()
{
    let bat = fs.readFileSync(__dirname+"/c.bat").toString()
    fs.readdirSync(target).map((file) => 
    {
        if (file.substring(file.lastIndexOf(".")) == ".java")
        {
            bat += "javac " + file+"\n"
        }
    })

    fs.writeFileSync("./c.bat", bat)
}