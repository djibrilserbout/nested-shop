Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace 'api' do
    namespace 'v1' do
      resources :users;
      post '/auth', to: 'users#login'
      post '/logout', to: 'users#logout'
      resources :products;
      end
  end
end
