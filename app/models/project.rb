class Project < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :project_cost, presence: true
  validates :project_cost, numericality: true
end
