// controllers/shoesController.js
const db = require('../models/db');

exports.getAllShoes = (req, res) => {
  const sql = 'SELECT * FROM shoes';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

exports.getShoeById = (req, res) => {
  const sql = 'SELECT * FROM shoes WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

exports.addShoe = (req, res) => {
  const newShoe = req.body;
  const sql = 'INSERT INTO shoes SET ?';
  db.query(sql, newShoe, (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, ...newShoe });
  });
};

exports.updateShoe = (req, res) => {
  const updatedShoe = req.body;
  const sql = 'UPDATE shoes SET ? WHERE id = ?';
  db.query(sql, [updatedShoe, req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ id: req.params.id, ...updatedShoe });
  });
};

exports.deleteShoe = (req, res) => {
  const sql = 'DELETE FROM shoes WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Shoe deleted' });
  });
};
