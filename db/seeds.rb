# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.create({name: "2015 Audi A3 Premium Plus", 
    category: "Audi", 
    image: 'https://img2.carmax.com/img/vehicles/15092839/1/v-0x8d511d54bb53b9c/1276.jpg', 
    price: "$20,998" })

Item.create({name: "2014 BMW 328 XI", 
    category: "BMW", 
    image: 'https://img2.carmax.com/img/vehicles/15277948/1/v-0x8d522138cbaf6d1/1276.jpg', 
    price: "$25,998" })

Item.create({name: "2017 BMW 328 d", 
    category: "BMW", 
    image: 'https://img2.carmax.com/img/vehicles/15279289/1/v-0x8d5260e4c61b048/1276.jpg', 
    price: "$36,998" })

User.create({
    name:"Barrack Obama",
    address: "Chicago",
    email: "obama@gmail.com",
    telephone: "333 334455",
    bid_amount: "$17,444"
})