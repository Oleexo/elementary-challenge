const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
var endDate = new Date(2017, 6, 8, 23, 59, 59, 99);
var startDate = new Date(2017, 6, 8, 0, 0, 0, 0);
if (new Date() > endDate) {
    app.use(express.static('public/past'))
} else {
    app.use(express.static('public'))

    app.post('/78b6d5d3-80e9-4630-bc35-60ce18d157c1', function (req, res) {
        /* Song challenge */
        if (req.body.answer.toUpperCase() == "happy Birthday".toUpperCase()) {
            res.send("9fa2f35f-b6d2-4c38-93fd-d91673b6b4e0")
        } else {
            res.send(false)
        }
    });
    app.post('/45be5cbf-e947-41be-8d9f-e59f4790ea5a', function (req, res) {
        /* challenge 1 */
        if (req.body.answer.toUpperCase() == "Follow your dreams".toUpperCase()) {
            res.send("de75400a-f977-4dc6-af1b-e5f1f105a4b5")
        } else {
            res.send(false)
        }
    });

    app.post('/2be2ec2a-98fe-4791-902b-fde0f14a76d5', function (req, res) {
        /* challenge 2 */
        if (req.body.answer.toUpperCase() == "Vi Veri universum vivus vici".toUpperCase()) {
            res.send("37ac2ab2-c16b-4996-9db3-b5611a55c0f9")
        } else {
            res.send(false)
        }
    });
}

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Example app listening on port '+port+'!')
})