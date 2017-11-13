Rails.application.routes.draw do
  namespace :api do
    get "/items", to: "items#index", as: "items"
    post "/items", to: "items#create"
    get "/items/:id", to: "items#show", as: "item"
    patch "/items/:id", to: "items#update"
    delete "/items/:id", to: "items#destroy"
  end
end

 