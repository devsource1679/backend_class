const user = {
    id: "12345",
    name: "John Doe",
    email: "john@example.com",
    isLoggedIn: true,
    role: "admin", // Can be 'user', 'admin', 'moderator', etc.
    createdAt: new Date().toISOString(),
  };
  

  const isLoggedIn = (req, res, next)=>{
    if(!user.isLoggedIn){
        res.status(403).json({
            status: 'error',
            message: 'You have to log in to access this route.'
        })
        return
    }
    next()
  }

  module.exports = isLoggedIn