
exports.getProducts = (req,res,next) => {
    res.status(200).json({
        success: true,
        message: 'Show all the products.'
    })
}