Rails.application.routes.draw do
  namespace :api do
    get "/items", to: "items#index", as: "items"
    post "/items", to: "items#create"
    get "/items/:id", to: "items#show", as: "item"
    patch "/items/:id", to: "items#update"
    delete "/items/:id", to: "items#destroy"

    # get"/users", to "users#index", as: "users"  
    post "/users", to: "users#create"
    get "/users", to: "users#index"
    get "/users/:id", to: "users#show", as: "user"
    delete "/users/:id", to: "users#destroy"
      
    get "/auctions", to: "auctions#index", as: "auctions"
    post "/auctions", to: "auctions#create"
    get "/auctions/:id", to: "auctions#show", as: "auction"
    
  end
 


end

 