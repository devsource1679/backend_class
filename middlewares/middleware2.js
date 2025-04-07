const middleware2 = (req, res, next)=>{
    console.log('second middleware')
    next()
}

module.exports = middleware2