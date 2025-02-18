class CreatePersonalInfos < ActiveRecord::Migration[8.0]
  def change
    create_table :personal_infos do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.integer :age
      t.string :gender
      t.string :fitness_goal

      t.timestamps
    end
  end
end
