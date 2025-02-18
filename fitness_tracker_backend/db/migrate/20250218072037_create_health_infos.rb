class CreateHealthInfos < ActiveRecord::Migration[8.0]
  def change
    create_table :health_infos do |t|
      t.references :user, null: false, foreign_key: true
      t.float :water_intake
      t.float :sleep_hours
      t.string :dietary_preference
      t.text :medical_conditions

      t.timestamps
    end
  end
end
