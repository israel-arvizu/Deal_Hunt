
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)
const clickId = function reply_click(clicked_id) {
    console.log(clicked_id)
    return clicked_id
}

module.exports = { csrfProtection, asyncHandler, clickId }
