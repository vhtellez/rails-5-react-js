class Prospect < ApplicationRecord
  belongs_to :created_by_user, foreign_key: 'created_by_user_id', class_name: 'User'
  has_many :opportunities

  validates :name, presence: true, uniqueness: true
  validates :created_by_user_id, presence: true

  def as_json(options={})
    super(
      methods: [:created_by_user_name ]
    )
  end

  def created_by_user_name
    self.created_by_user.user_name
  end
end
