const { Router } = require('express');

const User = require('../models/User');

const router = Router();

// GET - All users
router.get('/', async (req, res, next) => {
  try { // getting all the users in the db
    const entries = await User.find();
    res.json(entries);
  } catch (error) { // error -> Internal server Error (500)
    next(error);
  }
});

// POST - 1 user
router.post('/', async (req, res, next) => {
  try { // inserting an user in the db
    const user = new User(req.body);
    const createdUser = await user.save();
    res.json(createdUser);
  } catch (error) { // erorr -> Validation Error (422) | Internal server Error (500)
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
