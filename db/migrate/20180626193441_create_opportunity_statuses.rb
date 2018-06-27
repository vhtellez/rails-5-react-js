class CreateOpportunityStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :opportunity_statuses do |t|
      t.references :status_from, foreign_key: true, :null => false
      t.references :status_to, foreign_key: true, :null => false
      t.date :changed_date, :null => false
      t.references :user_id, foreign_key: true, :null => false
      
      t.timestamps
    end
  end
end
