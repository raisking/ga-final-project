Rails.application.routes.draw do
  namespace :api do
    get "/items", to: "items#index", as: "items"
    post "/items", to: "items#create"
    get "/items/:id", to: "items#show", as: "item"
    patch "/items/:id", to: "items#update"
    delete "/items/:id", to: "items#destroy"
  end
end

  def create
    #whitelist params and save them to a variable
    item_params = params.require(:item).permit(:name, :category, :image, :price)
    #create a new item from `item_param`
    @item = Item.new(item_params)
    #if item saves, render the new item in JSON
      if @item.save
        render json: @item
      end

  def show 
    #get the item id from the url params
    item_id = params[:id]
    #use `item_id`to find the item in the database
    #and save it to an instance variable
    @item = Item.find_by_id(item_id)
    render json: @item
  end

  def update
    #get the item id from  the url params
    item_id = params[:id]
    @item = Item.find_by_id(item_id)
    item_params = params.require(:item).permit(:name, :category, :image, :price)
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
  
  def destroy
    item_id = params[:id]
    @item = Item.find_by_id(item_id)
    @item.destroy
    render json: {
      msg: "Successfully Deleted"
    }
  end

end