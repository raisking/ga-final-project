class Api::ItemsController < ApplicationController
  #display all items
  def index
      #get all items from db and save to instance variable
      @items = Item.all
      render json: @items
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
      item_id = params[:id]
      @item = Item.find_by_id(item_id)
      @item.destroy
      render json: {
        msg: "Successfully Deleted"
      }
  end

end

 
# class Api::ItemsController < ApplicationController
#   #display all items 
#   def index
#     #get all items from db and save to instance variable
#     @items = Item.all
#     render json: @items
#   end

#   def create 
#     item_params = params.require(:item).permit(:name, :category, :image, :price)
#     #create a new item from `item_params
#     @item = Item.new(item_params)
#     #if item saves, render the new item in JSON
#     if @item.save
#       render json: @item
#   end
# end

#   def update
#     #get the item id from  the url params
#     item_id = params[:id]
#     @item = Item.find_by_id(item_id)
#     item_params = params.require(:item).permit(:name, :category, :image, :price)
#     @item.update_attributes(item_params)
#     render json: @item
#   end

#   def destroy
#     item_id = params[:id]
#     @item = Item.find_by_id(item_id)
#     @item.destroy
#     render json: {
#       msg: "Successfully Deleted"
#     }
#   end

#   private
#     def item_params
#       params.require(:item).permit(:name, :category, :image, :price)
#     end
# end

