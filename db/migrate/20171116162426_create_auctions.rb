class CreateAuctions < ActiveRecord::Migration[5.1]
  def change
    create_table :auctions do |t|
      t.string :name
      t.string :amount

      t.timestamps
    end
  end
end
