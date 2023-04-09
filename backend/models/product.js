const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the product\'s name!'],
        trim: true,
        maxLength: [100, 'Product\'s name can not exceed 100 characters!']
    },
    price: {
        type: Number,
        required: [true, 'Please enter the product\'s price!'],
        maxLength: [5, 'Product\'s price can not exceed 5 figures!'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter the product\'s description!'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            // image id
            public_id: {
                type: String,
                required: true
            },
            // image url
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please select the category for this product!'],
        enum: {
            values: [
                'Electronics',
                'Cameras',
                'Laptops',
                'Accessories',
                'Headphones', 'Food', 'Books', 'Clothes/Shoes', 'Beauty/Health', 'Sports', 'Outdoor', 'Home'
            ],
            message: 'Please select the correct category for the product!'
        }

    },
    seller: {
        type: String,
        required: [true, 'Please enter product\'s seller!']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product\'s stock'],
        maxLength: [5, 'Product\'s stock can not exceed 5 figures!'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);