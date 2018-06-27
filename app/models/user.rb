class User < ApplicationRecord
  has_secure_password

  validates :user_name, presence: true, uniqueness: true
  validates :password, presence: true

  has_many :opportunity_statuses
  has_many :prospects
end
