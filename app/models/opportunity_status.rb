class OpportunityStatus < ApplicationRecord
  belongs_to :status_from, class_name: 'OpportunityStatusName', foreign_key: 'opportunity_status_name'
  belongs_to :status_to, class_name: 'OpportunityStatusName', foreign_key: 'opportunity_status_name'
  belongs_to :user
end
