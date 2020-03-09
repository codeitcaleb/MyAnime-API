class CreateAnimes < ActiveRecord::Migration[6.0]
  def change
    create_table :animes do |t|
      t.string "title"
      t.string "synopsis"
      t.string "day"
      t.string "image_url"
    end
  end
end
