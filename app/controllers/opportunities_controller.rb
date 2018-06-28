class OpportunitiesController < ApplicationController

  before_action :set_opportunity, only: [:show, :edit, :update, :destroy]
  before_action :authorize

  def index
    @opportunities = Opportunity.all.order(:name)
    @prospects = Prospect.all.order(:name)
    @opportunity_status_names = OpportunityStatusName.all.order(:name)
    @users = User.all.order(:user_name)
  end

  def show
  end

  def new
    @opportunity = Opportunity.new
  end

  def edit
  end

  def create
    @opportunity = Opportunity.new(opportunity_params)
    @opportunity.user = User.find(params[:opportunity][:user_id]) rescue nil
    @opportunity.prospect = Prospect.find( params[:opportunity][:prospect_id] ) rescue nil
    @opportunity.current_status = OpportunityStatusName.find( params[:opportunity][:current_status_id] ) rescue nil
    @opportunity.session_user = User.find(session[:user_id]) if session[:user_id]

    respond_to do |format|
      if @opportunity.save
        format.html { redirect_to @opportunity, notice: 'Opportunity was successfully created.' }
        format.json { render json: Opportunity.all.order(:name) }
      else
        format.html { render :new }
        format.json { render json: @opportunity.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      @opportunity.session_user = User.find(session[:user_id]) if session[:user_id]
      if @opportunity.update(opportunity_params)
        format.html { redirect_to @opportunity, notice: 'Opportunity was successfully updated.' }
        format.json { render json: Opportunity.all.order(:name) }
      else
        format.html { render :edit }
        format.json { render json: @opportunity.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @opportunity.destroy
    respond_to do |format|
      format.html { redirect_to opportunities_url, notice: 'Opportunity was successfully destroyed.' }
      format.json { render json: Opportunity.all.order(:name) }
    end
  end

  private
  def set_opportunity
    @opportunity = Opportunity.find(params[:id])
  end

  def opportunity_params
    params.require(:opportunity).permit(:name, :monetary_value, :prospect_id, :current_status_id, :user_id )
  end

end
