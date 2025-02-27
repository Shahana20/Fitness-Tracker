class User < ApplicationRecord
    devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :jwt_authenticatable,
         jwt_revocation_strategy: JwtDenylist
    
    has_one :personal_info, dependent: :destroy
    has_one :fitness_status, dependent: :destroy
    has_one :health_info, dependent: :destroy
    has_one :workout_plan, dependent: :destroy

    accepts_nested_attributes_for :personal_info, :fitness_status, :health_info, :workout_plan
end
