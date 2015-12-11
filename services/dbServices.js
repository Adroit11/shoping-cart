import mysql from 'mysql'
import config from '../config'

// change setting according to you
const connection = mysql.createConnection(config.mysql);

export default {
  createDB: () => {
    // Database setup
    connection.query('CREATE DATABASE IF NOT EXISTS yumist', function (err) {
        if (err) throw err;
        connection.query('USE yumist', function (err) {
            if (err) throw err;
            const query = 'CREATE TABLE IF NOT EXISTS orders (id INT(11) NOT NULL AUTO_INCREMENT,name VARCHAR(45) DEFAULT NULL,phone VARCHAR(15) DEFAULT NULL,date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,items VARCHAR(200) DEFAULT NULL,PRIMARY KEY (id))'

            connection.query(query, function (err) {
                  if (err) throw err;
                });
        });
    });
  }
}
