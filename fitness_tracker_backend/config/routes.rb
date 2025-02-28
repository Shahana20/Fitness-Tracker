Rails.application.routes.draw do
  namespace :api do
    devise_for :users, 
               controllers: {
                 sessions: 'api/sessions',
                 registrations: 'api/registrations',
                 passwords: 'api/passwords'
               },
               defaults: { format: :json }
    
    namespace :v1 do
      resources :users, only: [:create]
    end
  end  
end
