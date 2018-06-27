class ProspectsController < ApplicationController
  before_action :set_prospect, only: [:show, :edit, :update, :destroy]
  before_action :authorize

  def index
    @prospects = Prospect.includes( :created_by_user ).all.order(:name)
  end

  def show
  end

  def new
    @prospect = Prospect.new
  end

  def edit
  end

  def create
    @prospect = Prospect.new(prospect_params)
    @prospect.created_by_user = User.find(session[:user_id]) if session[:user_id]

    respond_to do |format|
      if @prospect.save
        format.html { redirect_to @prospect, notice: 'Prospect was successfully created.' }
        format.json { render json: Prospect.all.order(:name) }
      else
        format.html { render :new }
        format.json { render json: @prospect.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @prospect.update(prospect_params)
        format.html { redirect_to @prospect, notice: 'Prospect was successfully updated.' }
        format.json { render json: Prospect.all.order(:name) }
      else
        format.html { render :edit }
        format.json { render json: @prospect.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @prospect.destroy
    respond_to do |format|
      format.html { redirect_to prospects_url, notice: 'Prospect was successfully destroyed.' }
      format.json { render json: Prospect.all.order(:name) }
    end
  end

  private
  def set_prospect
    @prospect = Prospect.find(params[:id])
  end

  def prospect_params
    params.require(:prospect).permit(:name, :address)
  end
end
