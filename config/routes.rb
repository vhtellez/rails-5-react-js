Rails.application.routes.draw do
  resources :opportunities
  resources :prospects

  get 'pages/dashboard'

  root to: 'pages#dashboard'
  get 'users/new' => 'users#new', as: :new_user
  post 'users' => 'users#create'
  get '/login'     => 'sessions#new'
  post '/login'    => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
end
