const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: '🔒 login',
  });
});

module.exports = router;
