class Api::AuctionsController < ApplicationController

    def index
        @auctions = Auction.all 
        render json: @auctions
    end


    def create
        auction_params = params.require(:auction).permit(:name, :amount)
        @auction = Auction.new(auction_params)
        if @auction.save
            render json: @auction
         end
    end


    def show 
        auction_id = params[:id]
        @auction = Auction.find_by_id(auction_id)
        
        render json: @auction.order(created_at: :desc)

    end
    
end
