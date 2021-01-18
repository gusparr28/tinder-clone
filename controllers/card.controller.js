const cardController = {};

const Card = require('../models/Card');

cardController.createCard = async (req, res) => {
    const { name, image } = req.body;
    try {
        const newCard = new Card({
            name,
            image
        });
        await newCard.save();
        res.status(200).json({ status: 200, message: 'Card successfully created', newCard });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    }
};

cardController.getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json({ status: 200, cards });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ status: 500, message: 'Internal server error', error: e });
    };
};

module.exports = cardController;