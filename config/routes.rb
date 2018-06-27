Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :projects
  resources :prospects

  root to: 'prospects#index'
  get 'users/new' => 'users#new', as: :new_user
  post 'users' => 'users#create'
  get '/login'     => 'sessions#new'
  post '/login'    => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
end
