const express = require('express');
const app = express();
const server = http.createServer(app);

app.use(express.static("public"));

app.get('/',  (req, res) => {
  res.render('index.html')
})
const PORT = process.env.PORT || 3000; 
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));