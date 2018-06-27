class CreateOpportunities < ActiveRecord::Migration[5.1]
  def change
    create_table :opportunities do |t|
      t.string :name
      t.belongs_to :prospect, foreign_key:  { to_table: :prospects }
      t.decimal :monetary_value, :null => false
      t.belongs_to :user
      t.belongs_to :current_status, foreign_key: { to_table: :opportunity_status_names }

      t.timestamps
    end
  end
end
