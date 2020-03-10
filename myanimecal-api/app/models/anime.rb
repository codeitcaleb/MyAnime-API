require 'rest-client'

class Anime < ApplicationRecord
  has_many :user_anime_calendars
  has_many :user_anime_reviews
  has_many :users, through: :user_anime_calendars

  def self.get_anime_for(day)
    url = "https://api.jikan.moe/v3/schedule/#{day}"
    resp = RestClient.get(url)
    anime_hash = JSON.parse(resp.body)
    anime_hash_day = anime_hash[day]
      anime_hash_day.each do |anime| 
        title = anime["title"]
        synopsis = anime["synopsis"]
        image_url = anime["image_url"]
        anime = Anime.create(title: title, synopsis: synopsis, day: day, image_url: image_url)
      end
  end
end
