class User < ApplicationRecord
	["satyam","pawar"].each do |name|
    define_method "#{name}" do |name|
    	puts name
    end
  end
end
