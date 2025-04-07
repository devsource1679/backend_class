const middleware1 = (req, res, next)=>{
    console.log('first middleware')
    if(9 < 18){
        res.json({
            message: 'Go back'
        })
        return
    }
    next()
}

module.exports = middleware1