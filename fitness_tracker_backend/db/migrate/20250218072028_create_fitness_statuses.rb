class CreateFitnessStatuses < ActiveRecord::Migration[8.0]
  def change
    create_table :fitness_statuses do |t|
      t.references :user, null: false, foreign_key: true
      t.float :height
      t.float :weight
      t.string :activity_level
      t.integer :step_count

      t.timestamps
    end
  end
end
