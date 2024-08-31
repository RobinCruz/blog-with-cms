const User = require("../models/User");

let UserDataProvider = {
    createUser: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },
    findUserByEmail: async (email) => {
        return await User.findOne({ email });
    },
    findUserById: async (userId) => {
        return await User.findById(userId);
    },
    findAllAuthors: async () => {
        return await User.find({ role: "author" });
    },
    findAllAdmins: async () => {
        return await User.find({ role: "admin" });
    },
    updateUserById: async (userId, updateData) => {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    },
    deleteUserById: async (userId) => {
        return await User.findByIdAndDelete(userId);
    },
    findUserByRefreshToken: async (refreshToken) => {
        return User.findOne({ refreshToken });
    },
    updateUserRefreshToken: async (userId, refreshToken) => {
        return await User.findByIdAndUpdate(userId, { refreshToken }, { new: true });
    }
}

module.exports = UserDataProvider;