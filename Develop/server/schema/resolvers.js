const { AuthenticationError } = ('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('books');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('books');
        },
        books: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Boook,find(params).sort({ createdAt: -1 });
        },
        book: async (parent, { bookId }) => {
            return Book.findOne({ _id: bookId });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('books');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser:
    }
}