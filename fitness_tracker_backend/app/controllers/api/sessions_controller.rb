class Api::SessionsController < Devise::SessionsController
  respond_to :json
  include RackSessionFix
  include ActionController::Cookies

  def create
    user = User.find_by(email: sign_in_params[:email])

    if user&.valid_password?(sign_in_params[:password])
      sign_in(user)
      
      token = request.env['warden-jwt_auth.token'] 
      Rails.logger.debug "JWT Token: #{token}" 

      cookies.signed[:jwt] = {
        value: token,
        httponly: true, 
        secure: Rails.env.production?,
        same_site: :none, 
        domain: :all
      }

      render json: {
        message: 'Logged in successfully.',
        user: user
      }, status: :ok
    else
      render json: { message: 'Invalid email or password.' }, status: :unauthorized
    end
  end

  def destroy
    sign_out(current_user)
    render json: { message: 'Logged out successfully' }, status: :ok
  end

  private

  def sign_in_params
    params.require(:user).permit(:email, :password)
  end
end
