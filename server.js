const express = require('express')
const app = express()

app.use('/', express.static('app')) 
  
// authentification
app.post('/api/login', function (req, res) {
    res.send('Test login')
})

app.put('/api/register', function (req, res) {
    res.send('Test register')
})

app.get('/api/isLoggedin', function (req, res) {
    res.send('Test isLoggedin')
})

// todo categories CRUD
app.get('/api/getcat', function (req, res) {
    res.send('Test get Categories')
})

app.put('/api/addcat', function (req, res) {
    res.send('Test add Categories')
})

app.delete('/api/delcat/:catid', function (req, res) {
    res.send('Test delete Categories')
})

app.patch('/api/updatecat/:catid', function (req, res) {
    res.send('Test update Categories')
})

//todo list CRUD
app.get('/api/gettodos/:catid', function (req, res) {
    res.send('Test API')
})

app.put('/api/addtodo', function (req, res) {
    res.send('Test API')
})

app.delete('/api/deltodo/:todoid', function (req, res) {
    res.send('Test API')
})

app.patch('/api/updatetodo/:todoid', function (req, res) {
    res.send('Test API')
})




app.listen(3000)