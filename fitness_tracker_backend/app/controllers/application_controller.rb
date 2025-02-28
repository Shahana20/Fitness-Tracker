class ApplicationController < ActionController::API
    before_action :authenticate_user_from_token
  
    private
  
    def authenticate_user_from_token
      token = cookies.signed[:jwt]
      return unless token
  
      begin
        decoded_token = JWT.decode(token, Rails.application.secret_key_base, true, { algorithm: 'HS256' })
        user_id = decoded_token[0]["user_id"]
        @current_user = User.find_by(id: user_id)
      rescue JWT::DecodeError
        @current_user = nil
      end
    end
  end
  