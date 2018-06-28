class OpportunityStatusName < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :opportunity_statuses

  def as_json(options={})
    super(
      methods: [ :opportunities, :opportunities_sum ]
    )
  end

  def opportunities
    Opportunity.where( "current_status_id = ? ", self.id )
  end

  def opportunities_sum
    Opportunity.where( "current_status_id = ? ", self.id ).sum(:monetary_value)
  end
end
