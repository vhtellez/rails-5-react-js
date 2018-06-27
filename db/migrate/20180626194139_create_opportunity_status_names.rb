class CreateOpportunityStatusNames < ActiveRecord::Migration[5.1]
  def change
    create_table :opportunity_status_names do |t|
      t.string :name, :null => false
      t.text :description

      t.timestamps
    end
  end
end
