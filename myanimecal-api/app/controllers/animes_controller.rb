class AnimesController < ApplicationController
  before_action :set_anime, only: [:show, :update, :destroy]
  before_action :set_user

  def index
    @animes = Anime.all
    render json: @animes
  end

  def show
    render json: @anime
  end

  def create
    @anime = Anime.new(anime_params)
    byebug

    if @anime.save
      render json: @anime
    else
      render json: @anime.errors, status: :unprocessable_entity
    end
  end

  def update
    @anime.update
  end

  def destroy
    @anime.destroy
  end

  private

  def set_user
    @user = User.first
  end

  def set_anime
    @anime = Anime.find(params[:id])
  end

  def anime_params
    params.require(:anime).permit(:title, :synopsis, :image_url, :day)
  end
end