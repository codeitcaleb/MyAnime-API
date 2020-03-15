class CreateUserAnimeReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :user_anime_reviews do |t|
      t.string :review
      t.integer :user_id
      t.integer :anime_id

      t.timestamps
    end
  end
end
