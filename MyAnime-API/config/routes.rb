Rails.application.routes.draw do
  
  resource :users, only: [:create, :show, :index]
   post "/login", to: "auth#login"
   get "/auto_login", to: "auth#auto_login"
   get "/user_is_authed", to: "auth#user_is_authed"
   
   post '/login', to: 'sessions#create'
   delete '/logout', to: 'sessions#destroy'
   get '/logged_in', to: 'sessions#is_logged_in?'
  
   resources :users, only: [:create, :show, :index]
   
   scope '/api' do
     resources :animes
   end

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end