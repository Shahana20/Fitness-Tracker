class Api::V1::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            render json: {
                user_id: @user.id,
                personal_info: @user.personal_info,
                fitness_status: @user.fitness_status,
                health_info: @user.health_info,
                workout_plan: @user.workout_plan
                }, 
            status: :created
            
        else
            render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def user_params
        params.require(:user).permit(personal_info_attributes: [:name, :age, :gender, :fitness_goal],
                                    fitness_status_attributes: [:height, :weight, :activity_level, :step_count],
                                    health_info_attributes: [:water_intake, :sleep_hours, :dietary_preference, :medical_conditions],
                                    workout_plan_attributes: [:workout_type, :workout_frequency, :need_diet_plan])
    end
end
