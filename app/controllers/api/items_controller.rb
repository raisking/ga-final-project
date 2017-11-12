class Api::ItemsController < ApplicationController
    # display all creatures
  def index
    # get all creatures from db and save to instance variable
    @items = Item.all

    render json: @items
  end
end
