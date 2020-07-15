class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :synopsis, :image_url
end
