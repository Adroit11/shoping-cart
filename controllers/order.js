import mysql from 'mysql'
import config from '../config'

// change setting according to you
const connection = mysql.createConnection(config.mysql);
export default {
  // Add a user profile using rest api
  postOrder:(req, res) => {
    //To access POST variable use request.body
    // user = { name,email,mobile }
    const order = req.body;
    const items = JSON.stringify({ data : req.body.items});

    connection.query('INSERT INTO orders (name, phone, items) VALUES (?, ?, ?)', [order.name, order.phone, items], function(err, result) {
      if (err) throw err
      res.json({
        msg : 'Data stored into database',
        data: result
      });
    })

  }
}
