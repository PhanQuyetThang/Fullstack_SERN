import userService from '../services/userService';

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 0,
            message: 'Missing input params!!'
        })
    }
    let userData = await userService.handleUserLogin(email, password)
    // console.log(userData.user)
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {},
    })

}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id //ALL or id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing params!!',
        })
    }
    let users = await userService.getAllUsers(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'Ok',
        users
    })
}

let handleCreateNewUser = async (req, res) => {
    let message = await userService.createNewUser(req.body);
    console.log(message);
    return res.status(200).json(message)
}

let handleEditUser = async (req, res) => {
    let message = await userService.updateUserdata(req.body);
    console.log(message);
    return res.status(200).json(message)
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        console.log(req.body)
        return res.status(200).json({
            errCode: 1,
            errMessage: 'User not found!!'
        })
    }
    else {
        let message = await userService.deleteUser(req.body.id);
        return res.status(200).json(message)
    }

}


module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateNewUser: handleCreateNewUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
}