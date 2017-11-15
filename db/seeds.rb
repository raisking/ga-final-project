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

Item.create({name: "2017 Lexus LS 460", 
    category: "Lexus", 
    image: 'https://img2.carmax.com/img/vehicles/15055436/1/v-0x8d522cf5ddeb302/1276.jpg', 
    price: "$68,998" })

Item.create({name: "2017 Lexus ES 350", 
    category: "Lexus", 
    image: 'https://img2.carmax.com/img/vehicles/15253877/1/v-0x8d527e9d63eae4b/1276.jpg', 
    price: "$39,998" })

Item.create({name: "2016 Lexus RC 350", 
    category: "Lexus", 
    image: 'https://img2.carmax.com/img/vehicles/15130620/1/v-0x8d51ae6a470118c/1276.jpg', 
    price: "$40,998" })


User.create({
    name:"Barrack Obama",
    address: "Chicago",
    email: "obama@gmail.com",
    telephone: "333334455",
    image: 'https://i.ytimg.com/vi/WQGJAIYtWD4/maxresdefault.jpg',
    bid_amount: "$17,444"
})