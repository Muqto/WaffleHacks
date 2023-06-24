import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken' 

import { Owner } from '../models/owner.js';
import { Customer } from '../models/customer.js';

export const ownerLogin = async (req, res) => {
    const {username, password} = req.body;
    try {
        const existingUser = await Owner.findOne({username})

        if(!existingUser) return res.status(404).json({message: 'Sorry, we could not find your account.'})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password )
        if( !isPasswordCorrect) return res.status(400).json({message: 'Wrong password!'})

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test', { expiresIn: '1h'})

        res.status(200).json({result: existingUser, token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error})
    }
}
export const ownerSignup = async (req, res) => {
    const {email, username, password, profilePicture} = req.body
    try {
        const existingUser = await Owner.findOne({email})

        if (existingUser) return res.status(400).json({message:'User already exists'})

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await Owner.create({email, username, password: hashedPassword, isStudent : false, profilePicture})

        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: '1h'})

        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }
}

export const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Owner.find()
        res.status(200).json(restaurants)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const modifyPoints = async (req, res) => {
    const { customerId, ownerId, points } = req.body
    try {
        const customer = await Customer.findById(customerId)
        const index = customer.subscribedRestos.findIndex(resto => String(resto.restaurantUserId) === String(ownerId))
        console.log(index)
        customer.subscribedRestos[index].points += points
        const updatedCustomer = await Customer.findByIdAndUpdate(customerId, customer, {new: true})
        res.status(200).json(updatedCustomer)
    } catch (error) {
        console.log(error)
    }
}