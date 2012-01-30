guard 'coffeescript', :output => 'public/javascripts/compiled' do
  watch('^app/coffeescripts/(.*)\.coffee')
end
 
guard 'coffeescript', :output => 'spec/javascripts/generated' do
  watch('^spec/coffeescripts/(.*)\.coffee')
end

guard 'livereload' do
  watch('^spec/javascripts/generated/.+\.js$')
  watch('^public/javascripts/compiled/.+\.js$')
end

# watches the package.json and runs npm install when it changes
guard 'process', :name => 'npm', :command => 'npm install' do
  watch(%r'package.json')
end

# watches for js or coffee file changes in spec/ recursively and calls jasmine-node.
# NOTE: jasmine-node is limited only to the spec folder for all specs. this sucks cause headed tests get lumped in... pull request pending
# guard 'jasmine-node', :jasmine_node_bin => File.expand_path(File.dirname(__FILE__) + "/node_modules/jasmine-node/bin/jasmine-node") do
#   watch(%r{^spec/(.+)_spec\.(js\.coffee|js|coffee)})  { |m| "spec/#{m[1]}_spec.#{m[2]}" }
#   watch(%r{^lib/(.+)\.(js\.coffee|js)|coffee})        { |m| "spec/lib/#{m[1]}_spec.#{m[2]}" }
#   watch(%r{spec/spec_helper\.(js\.coffee|js|coffee)}) { "spec" }
# end

guard 'process', :name => 'headless', :command => 'node_modules/.bin/jasmine-node spec/headless --coffee' do
	watch('^spec/headless/.+\.coffee')
end

