# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_02_18_072043) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "fitness_profiles", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "fitness_goal"
    t.decimal "height"
    t.decimal "weight"
    t.string "activity_level"
    t.integer "step_count"
    t.integer "water_intake"
    t.integer "sleep_hours"
    t.string "diet_preference"
    t.text "medical_conditions"
    t.string "workout_type"
    t.string "workout_frequency"
    t.boolean "need_diet_plan"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_fitness_profiles_on_user_id"
  end

  create_table "fitness_statuses", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.float "height"
    t.float "weight"
    t.string "activity_level"
    t.integer "step_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_fitness_statuses_on_user_id"
  end

  create_table "health_infos", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.float "water_intake"
    t.float "sleep_hours"
    t.string "dietary_preference" 
    t.text "medical_conditions"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_health_infos_on_user_id"
  end

  create_table "personal_infos", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.integer "age"
    t.string "gender"
    t.string "fitness_goal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_personal_infos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "gender"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workout_plans", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "workout_type"
    t.string "workout_frequency"
    t.boolean "need_diet_plan"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_workout_plans_on_user_id"
  end

  add_foreign_key "fitness_profiles", "users"
  add_foreign_key "fitness_statuses", "users"
  add_foreign_key "health_infos", "users"
  add_foreign_key "personal_infos", "users"
  add_foreign_key "workout_plans", "users"
end
