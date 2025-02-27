class AddDeviseToUsers < ActiveRecord::Migration[8.0]
  def change
    change_table :users, bulk: true do |t|
      
      t.string :encrypted_password, null: false, default: ""
      t.string :reset_password_token
      t.datetime :reset_password_sent_at
      t.datetime :remember_created_at

      t.string :jti, null: false

      t.index :email, unique: true
      t.index :reset_password_token, unique: true
      t.index :jti, unique: true
    end
  end
end
