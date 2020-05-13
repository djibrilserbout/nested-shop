class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :quantity
      t.float :price
      t.string :description
      t.string :category
      t.string :img

      t.timestamps
    end
  end
end
