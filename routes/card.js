const { Router } = require('express');
const router = Router();

const { getCards, createCard } = require('../controllers/card.controller');

router.route('/tinder/cards')
    .get(getCards)
    .post(createCard);

module.exports = router;