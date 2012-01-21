guard 'coffeescript', :output => 'public/javascripts/compiled' do
  watch('^app/coffeescripts/(.*)\.coffee')
end

guard 'coffeescript', :output => 'spec/javascripts' do
  watch('^spec/coffeescripts/(.*)\.coffee')
end

guard 'livereload' do
  watch('^spec/javascripts/.+\.js$')
  watch('^public/javascripts/compiled/.+\.js$')
end

# watches the package.json and runs npm install when it changes
guard 'process', :name => 'npm', :command => 'npm install' do
  watch(%r'package.json')
end

# CoffeeScript watchers
guard 'jasmine-node', :jasmine_node_bin => File.expand_path(File.dirname(__FILE__) + "/node_modules/jasmine-node/bin/jasmine-node") do
  watch(%r{^spec/headless/(.+)_spec\.(js\.coffee|js|coffee)})  { |m| "spec/#{m[1]}_spec.#{m[2]}" }
  watch(%r{^lib/headless/(.+)\.(js\.coffee|js)|coffee})        { |m| "spec/lib/#{m[1]}_spec.#{m[2]}" }
  watch(%r{spec/headless/spec_helper\.(js\.coffee|js|coffee)}) { "spec" }
end

