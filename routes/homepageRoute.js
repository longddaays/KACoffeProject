const express = require('express')
const router = express.Router()

const {
    getHomepage,
    getDiscount,
    getStories,
    getNotification
} = require('../controllers/homePageController')
const { attachUser } = require('../middleware/authentication')

router.route('/').get(attachUser,getHomepage)

router.route('/discount').get(attachUser,getDiscount)

router.route('/stories').get(attachUser,getStories)

router.route('/notification').get(attachUser, getNotification)

module.exports = router
