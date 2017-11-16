class Api::BuySellController < ApplicationController
    #display all BuySell
    def index
        @buysells = BuySell.all
        render json: @buysells
    end
end
