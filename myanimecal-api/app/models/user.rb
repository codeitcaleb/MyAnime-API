class User < ApplicationRecord
    has_many :user_schedules
    has_many :user_anime_reviews
    has_many :animes, through: :user_schedules

    validates :name, presence: true
    validates :email, uniqueness: true
    has_secure_password
end
