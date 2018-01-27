# llamagotchi

Setup docker and docker-compose

Build the images


 `cd docker_images/server/`
 
 `docker build -t meleeisland/llamagotchi-server .`
 
 `cd ../web`
 
 `docker build -t meleeisland/llamagotchi-client .`
 
 `cd ../../`
 
 
Run the containers

 `docker-compose up -d`


Access to your llama on http://localhost:1337
