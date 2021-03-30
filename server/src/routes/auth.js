const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.statusCode = 200;
  res.json({
    message: '🔒',
  });
});

module.exports = router;
