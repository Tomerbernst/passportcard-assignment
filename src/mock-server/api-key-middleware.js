module.exports = (req, res, next) => {
    const userApiKey = req.headers['api-key'];
    const apiKey = '1234567890abcdefghijklmnopqrstuvwxyz';
    console.log(userApiKey);
    if (!userApiKey) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    if (userApiKey !== apiKey) {
        return res.status(401).json({ error: 'Invalid API Key' });
    }
    next();
};