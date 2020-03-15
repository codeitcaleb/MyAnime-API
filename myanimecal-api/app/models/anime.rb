class Anime < ApplicationRecord
  has_many :user_anime_calendars
  has_many :user_anime_reviews
  has_many :users, through: :user_anime_calendars

  validates_uniqueness_of :title, :synopsis, :image_url
end
