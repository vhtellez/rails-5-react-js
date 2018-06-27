# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
opportunity_status_names = OpportunityStatusName.create([{ name: 'New Lead' }, { name: 'Qualified' }, { name: 'Demo Schedule' }, { name: 'Quotation Sent' }, { name: 'Closed' }])
users = User.create([{user_name: 'vhtellez', password: 'password', password_confirmation: "password"}])
prospects = Prospect.create([{name: 'Prospect 1', address: 'Address 1', created_by_user_id: 1 }, {name: 'Prospect 2', address: 'Address 2', created_by_user_id: 1 }])
