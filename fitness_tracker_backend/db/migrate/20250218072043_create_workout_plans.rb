class CreateWorkoutPlans < ActiveRecord::Migration[8.0]
  def change
    create_table :workout_plans do |t|
      t.references :user, null: false, foreign_key: true
      t.string :workout_type
      t.string :workout_frequency
      t.boolean :need_diet_plan

      t.timestamps
    end
  end
end
