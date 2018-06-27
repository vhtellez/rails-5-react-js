class CreateProspects < ActiveRecord::Migration[5.1]
  def change
    create_table :prospects do |t|
      t.string :name, :null => false
      t.text :address, :null => false
      t.belongs_to :created_by_user, foreign_key:  { to_table: :users }

      t.timestamps
    end
  end
end
