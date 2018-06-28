class CreateOpportunityStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :opportunity_statuses do |t|
      t.belongs_to :status_from, foreign_key: { to_table: :opportunity_status_names }
      t.belongs_to :status_to, foreign_key: { to_table: :opportunity_status_names }
      t.date :changed_date, :null => false
      t.belongs_to :user
      t.belongs_to :opportunity, foreign_key: { to_table: :opportunities }

      t.timestamps
    end
  end
end
