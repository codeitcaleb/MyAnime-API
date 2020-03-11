class Anime < ApplicationRecord
  has_many :user_anime_calendars
  has_many :user_anime_reviews
  has_many :users, through: :user_anime_calendars
end
