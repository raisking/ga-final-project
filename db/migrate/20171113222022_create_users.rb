class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :address
      t.string :email
      t.string :telephone
      t.string :bid_amount

      t.timestamps
    end
  end
end
