require 'capistrano/node-deploy'

application = 'com.coderstrust.signup'

set :application, "#{application}"
set :repository,  'git@github.com:coderstrustbd/ct-signup.git'

set :scm, :git
set :scm_verbose, true
set :deploy_to, "/webapps/node/#{application}"

set :deploy_via, :remote_cache

# do not use sudo
set :use_sudo, false
set(:run_method) { use_sudo ? :sudo : :run }

default_run_options[:pty] = true

set :user, 'root'
set :group, user
set :runner, user
set :node_user, user

set :host, "#{user}@128.199.182.255"
role :web, host
role :app, host

# set :app_command, 'grunt serve:dist'

set :app_environment, 'PORT=3001 MONGODB_URI=mongodb://localhost/ctsignup ROOT_URL=http://127.0.0.1/ ENV=production'
# set :app_environment, 'PORT=3007 MONGOLAB_URI=mongodb://heroku_app31776582:tevtlg45edkis406ipi2iu24jj@ds063889.mongolab.com:63889/heroku_app31776582 ROOT_URL=http://127.0.0.1/ ENV=production'
