class OpportunityStatus < ApplicationRecord
  belongs_to :status_from, class_name: 'OpportunityStatusName', foreign_key: 'status_from_id', optional: true
  belongs_to :status_to, class_name: 'OpportunityStatusName', foreign_key: 'status_to_id'
  belongs_to :user
  belongs_to :opportunity

  def as_json(options={})
    super(
      methods: [ :status_from_name, :status_to_name, :user_name ]
    )
  end

  def status_from_name
    self.status_from.name rescue ""
  end

  def status_to_name
    self.status_to.name
  end

  def user_name
    self.user.user_name
  end
end
