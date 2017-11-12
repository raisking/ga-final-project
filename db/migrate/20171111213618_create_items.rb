class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :category
      t.string :image
      t.string :price

      t.timestamps
    end
  end
end
