class AnimesController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]
  before_action :set_user

  def index
    @review = UserAnimeReview.all
    render json: @animes
  end

  def show
    render json: @review
  end

  def create
    @review = UserAnimeReview.new(review_params)
    @review.user = User.first
    @review.anime = Anime.find(params[:id])
    if @review.save
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  def update
    @review.update
  end

  def destroy
    @review.destroy
  end

  private

  def set_user
    @user = User.first
  end

  def set_review
    @review = UserAnimeReview.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:review)
  end
end