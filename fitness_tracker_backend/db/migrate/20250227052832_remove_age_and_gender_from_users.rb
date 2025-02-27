class RemoveAgeAndGenderFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :age, :integer
    remove_column :users, :gender, :string
  end
end
