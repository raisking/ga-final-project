class Api::ItemsController < ApplicationController
  #display all items
  def index
      #get all items from db and save to instance variable
      @items = Item.all
      render json: @items
  end
  #display a specific item
  def show 
    #get the item id from the url params
    item_id = params[:id]
    #use `item_id` to find the item in the database
    #and save it to an instance variable
    @item = Item.find_by_id(item_id)
    render json: @item
    # @item = City.find(params[:id])
    # @item = Item.joins(:posts).includes(:posts).find(params[:id])
    # puts @item
    #     render json: {
    #         item: @item
    #     }
  end
  #create a new item in the database
  def create 
      #whitelist params and save them to a variable 
      item_params = params.require(:item).permit(:name, :category, :image, :price)
      #create a new item from 'item_params'
      @item = Item.new(item_params)
      #if item saves, render the new item in JSON
      if @item.save   
          render json: @item
      end
  end

  def destroy
    #get the item id from the url params
    item_id = params[:id]
    @item = Item.find_by_id(item_id)
    @item.destroy
    render json: {
        msg: "Successfully Deleted"
    }
  end

  def update 
    item_id = params[:id]
    @item = Item.find_by_id(item_id)
    item_params = params.require(:item).permit(:name, :category, :image, :price)
    #update the item
    @item.update_attributes(item_params)
    render json: @item
  end
  def update
    item_id = params[:id]
    @item = Item.find_by_id(item_id)
    @item.update_attributes(item_params)    
    render json: @item
  end

  private
  def item_params
    params.require(:item).permit(:name, :category, :image, :price)
  end
  
end

 