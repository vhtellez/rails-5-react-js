class Opportunity < ApplicationRecord
  belongs_to :prospect
  belongs_to :user
  belongs_to :current_status, class_name: 'OpportunityStatusName', foreign_key: 'current_status_id'
  has_many :opportunity_statuses, dependent: :destroy

  validates :name, presence: true
  validates_uniqueness_of :name, :scope => :prospect_id
  validates :monetary_value, presence: true, numericality: true

  attr_accessor :session_user

  # Log historic status in order to mantain
  # information about opportunities.
  #
  before_update do |opportunity|
    opportunity_status = self.opportunity_statuses.build
    opportunity_status.status_from = OpportunityStatusName.find( self.current_status_id_was ) #last value?
    opportunity_status.status_to = self.current_status
    opportunity_status.changed_date = Date.today
    opportunity_status.user = self.session_user #change or the session user
    opportunity_status.save
  end

  # Log historic status in order to mantain
  # information about opportunities.
  #
  after_create do |currency_exchange|
    opportunity_status = self.opportunity_statuses.build
    opportunity_status.status_to = self.current_status
    opportunity_status.changed_date = Date.today
    opportunity_status.user = self.session_user
    opportunity_status.save
  end


  def as_json(options={})
    super(
      methods: [:user_name, :prospect_name, :current_status_name ]
    )
  end

  def user_name
    self.user.user_name
  end

  def prospect_name
    self.prospect.name
  end

  def current_status_name
    self.current_status.name
  end

end
