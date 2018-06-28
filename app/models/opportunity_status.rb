class OpportunityStatus < ApplicationRecord
  belongs_to :status_from, class_name: 'OpportunityStatusName', foreign_key: 'status_from_id', optional: true
  belongs_to :status_to, class_name: 'OpportunityStatusName', foreign_key: 'status_to_id'
  belongs_to :user
  belongs_to :opportunity
end
