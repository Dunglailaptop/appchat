Vagrant.configure("2") do |config|
  config.vm.box = "generic/ubuntu2004"
  config.vm.box_version = "4.3.12"
  config.vm.hostname = "virtualbox-guest"
  config.vm.network "public_network"
  config.vm.provider "virtualbox" do |vb|
      vb.name = "test-docker"
      vb.memory = 1024
      vb.cpus = 2
  end
end