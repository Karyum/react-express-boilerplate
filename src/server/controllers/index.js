const path = require('path');

const router = require('express').Router();

router.get('/*', (req, res) => {
  console.log(req.url);
  res.sendFile(path.resolve(__dirname, '../../../dist/', 'index.html'));
});

module.exports = router;
