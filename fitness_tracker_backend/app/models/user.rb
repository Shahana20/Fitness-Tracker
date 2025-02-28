class User < ApplicationRecord
    include Devise::JWT::RevocationStrategies::JTIMatcher
    devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :jwt_authenticatable,
         jwt_revocation_strategy: self

    before_create :set_jti

    def self.jwt_payload(user)
        { jti: user.jti }
    end
    
    def generate_jwt_token
        JWT.encode(
          { user_id: id, exp: 1.day.from_now.to_i },
          Rails.application.secret_key_base, 
          'HS256' 
        )
    end
    
    has_one :personal_info, dependent: :destroy
    has_one :fitness_status, dependent: :destroy
    has_one :health_info, dependent: :destroy
    has_one :workout_plan, dependent: :destroy

    accepts_nested_attributes_for :personal_info, :fitness_status, :health_info, :workout_plan
    private
    def set_jti
        self.jti ||= SecureRandom.uuid
    end
end
