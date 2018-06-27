# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180626194225) do

  create_table "opportunities", force: :cascade do |t|
    t.string "name"
    t.integer "prospect_id"
    t.decimal "monetary_value", null: false
    t.integer "user_id"
    t.integer "current_status_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["current_status_id"], name: "index_opportunities_on_current_status_id"
    t.index ["prospect_id"], name: "index_opportunities_on_prospect_id"
    t.index ["user_id"], name: "index_opportunities_on_user_id"
  end

  create_table "opportunity_status_names", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "opportunity_statuses", force: :cascade do |t|
    t.integer "status_from_id", null: false
    t.integer "status_to_id", null: false
    t.date "changed_date", null: false
    t.integer "user_id_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["status_from_id"], name: "index_opportunity_statuses_on_status_from_id"
    t.index ["status_to_id"], name: "index_opportunity_statuses_on_status_to_id"
    t.index ["user_id_id"], name: "index_opportunity_statuses_on_user_id_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.decimal "project_cost", precision: 8, scale: 2
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "prospects", force: :cascade do |t|
    t.string "name", null: false
    t.text "address", null: false
    t.integer "created_by_user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_by_user_id"], name: "index_prospects_on_created_by_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name", null: false
    t.text "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
