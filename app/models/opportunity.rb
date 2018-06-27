class Opportunity < ApplicationRecord
  belongs_to :prospect
  belongs_to :user
  belongs_to :current_status, class_name: 'OpportunityStatusName', foreign_key: 'opportunity_status_name'
  has_many :opportunity_statuses
end
