class PagesController < ApplicationController
  before_action :authorize

  def dashboard
    @opportunity_status_names = OpportunityStatusName.all
    @opportunities = Opportunity.all
  end
end
