class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(user_name: params[:login][:email].downcase)

    if user && user.authenticate(params[:login][:password])
      session[:user_id] = user.id.to_s
      flash[:notice] =  'Successfully logged in!'
      redirect_to root_path
    else
      flash.now.alert = "Incorrect email or password, try again."
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to login_path, notice: "Logged out!"
  end
end
