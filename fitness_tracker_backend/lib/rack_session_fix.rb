module RackSessionFix
    extend ActiveSupport::Concern
  
    included do
      before_action :set_dummy_session
    end
  
    private
  
    def set_dummy_session
      request.env['rack.session'] ||= {}
    end
  end
  