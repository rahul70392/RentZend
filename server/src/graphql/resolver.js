var {
    User
} = require('../models/user')

export const resolvers = {
    Query: {
        users: () => User.find(),
        user: async (parent, args) => {
            return User.findById(args.id)
        },
        userEmail: async (parent, args) => {
            return User.findOne({
                email: args.email
            })
        }
    },

    Mutation: {
        //============ create user ===========
        createUser: async (_, {
            name,
            email,
            phone,
            address,
            zipCode,
            file
        }) => {
            const find = await User.findOne({
                email: email
            })
            if (find != null) return {
                success: false,
                message: "Agent already exists!"
            }
            const saveUser = new User({
                name,
                email,
                file,
                phone,
                address,
                zipCode,

            })
            await saveUser.save();
            return {
                success: true,
                message: "Agent registration successful!",
                name: name,
                email: email
            }
        },
    }
};