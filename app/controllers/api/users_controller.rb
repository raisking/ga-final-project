class Api::UsersController < ApplicationController
    #display all users
    def index
        @users = User.all
        render json: @users
    end

    def create
        user_params = params.require(:user).permit(:name, :address, :email, :telephone, :image, :bid_amount)
        @user = User.new(user_params)
        if @user.save
            render json: @user
        end
    end

    def show 
        user_id = params[:id]
        @user = User.find_by_id(user_id)
        render json: @user
    end

    def destroy
        user_id = params[:id]
        @user = User.find_by_id(user_id)
        @user.delete
        render json: {
            msg: "Successfully Deteled"
        }
    end

end
