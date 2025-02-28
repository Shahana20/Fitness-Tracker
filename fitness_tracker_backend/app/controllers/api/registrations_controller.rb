class Api::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  include RackSessionFix

  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def respond_with(resource, _opts = {})
    Rails.logger.debug "Received Params: #{params.inspect}"
    token = request.env['warden-jwt_auth.token'] # This should contain the JWT token
  
    Rails.logger.debug "JWT Token: #{token}" # Debugging - check logs

    if token.present?
      response.set_header('Authorization', "Bearer #{token}") # Manually set header
    end
    if resource.persisted?
      render json: { message: 'Signed up successfully.', data: resource }, status: :ok
    else
      render json: {
        message: "User couldn't be created successfully.",
        errors: resource.errors.full_messages.to_sentence
      }, status: :unprocessable_entity
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation])
  end
end

