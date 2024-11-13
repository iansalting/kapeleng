import express from 'express';
import bcrypt from 'bcrypt'; 
import pool from '../db.js'

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body)

  try {
      const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userExists.rows.length > 0) {
          return res.status(400).json({ mssg: 'User already exists' });
      }

      // Password hashing
      console.log("Password:", password);
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await pool.query(
          'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
          [name, email, hashedPassword]
      );
      
      res.status(201).json({ message: 'User registered successfully!', user: newUser.rows[0] });
  } catch (err) {
      console.error(err);  // Log the error for debugging
      res.status(500).json({ message: 'Server error' });
  }
});

pool.connect((err) => {
  if(err) throw err;
  console.log('Connected to DB')
})

router.post('/submit', async (req, res) => {
  const { email, password } = req.body;
  try {
      const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (user.rows.length === 0) return res.status(400).json({ error: 'di ka makita'})
      const validPassword = await bcrypt.compare(password, user.rows[0].password);
      if (!validPassword) return res.status(400).json({ error: 'Invalid password.' });

      res.status(200).json({ message: 'Login successful!' });
  } catch (err) {
      res.status(500).json({ error: 'Login failed.' });
      console.error(err);
  }
});


export default router;
