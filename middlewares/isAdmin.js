const user = {
    id: "12345",
    name: "John Doe",
    email: "john@example.com",
    isLoggedIn: false,
    role: "user", // Can be 'user', 'admin', 'moderator', etc.
    createdAt: new Date().toISOString(),
};

const isAdmin = (req, res, next)=>{
    if(user.role !== "admin"){
        res.status(403).json({
            status: 'error',
            messagee: 'You have to be an admin.'
        })
        return
    }

    next()
}

module.exports = isAdmin
