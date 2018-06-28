class OpportunityStatusName < ApplicationRecord
  validates :name, presence: true, uniqueness: true  
end
