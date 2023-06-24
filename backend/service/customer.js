import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken' 

import { Customer } from '../models/customer.js';

export const customerLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existingUser = await Customer.findOne({email})

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

export const customerSignup = async (req, res) => {
    const {email, username, password, confirmPassword, userType, profilePicture} = req.body
    try {
        const existingUser = await Customer.findOne({email})

        if (existingUser) return res.status(400).json({message:'User already exists'})

        if(password !== confirmPassword) return res.status(400).json({message: "Passwords don't match"})

        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await Customer.create({email, username, password: hashedPassword, userType, profilePicture})

        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: '1h'})

        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }
}

export const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find()
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).json({message: "Couldn't fetch the customers"})
    }
}

export const subscribe = async (req, res) => {
    const { customerId, ownerId } = req.body
    try {
        const customer = await Customer.findById(customerId)
        const index = customer.subscribedRestos.findIndex(resto => resto.restaurantUserId === String(ownerId))
        //subscribe
        if (index === -1) {
            customer.subscribedRestos.push({restaurantUserId: ownerId})
        }
        //unsubscribe
        else {
            console.log( customer.subscribedRestos.filter(resto => resto.restaurantUserId !== ownerId))
            customer.subscribedRestos = customer.subscribedRestos.filter(resto => resto.restaurantUserId !== ownerId)
        }

        const updatedCustomer = await Customer.findByIdAndUpdate(customerId, customer, {new: true})
        res.status(200).json(updatedCustomer)
    } catch (error) {
        console.error(error)
    }
}