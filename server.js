const express = require("express");
const app = express();

const port = 3333;


app.get("/bottles", (req, res) => {
    res.send(`99 bottles of beer on the wall.<br>
    99 bottles of beer.<br>
    <a href='/bottles/98'>Take one down pass it around.</a>`)
})

// I got help on this part by reading other questions in the 'Help' slack channel. //
app.get("/bottles/:num_of_bottlesLeft", (req, res) => {
    const bottlesLeft = Number(req.params.num_of_bottlesLeft);
    if(bottlesLeft > 0) {
    res.send(`${bottlesLeft} bottles of beer on the wall.<br>
    <a href="${bottlesLeft - 1}"> Take one down pass it around</a><br>
    <a href="/bottles">Restart</a>`)
    }else {
        res.send(`No more bottles of beer on the wall.<br>
        <a href="/bottles">Restart</a>`)
    }
    // console.log (bottlesLeft)
})

app.listen(port, () => {
    console.log('Listening on port', port)
})