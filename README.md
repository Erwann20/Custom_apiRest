
# For docker (SERVER FRONT)

build the docker with a docker file : docker build -t custom_apirest . <br>
<br>

run the docker image with the name : custom_apirest<br><br>

docker run -it -p 3500:3500 custom_apirest<br>

you can go to : IP:3500 or localhost:3500

# For docker (SERVER BACK)

You must go in json-server folder: cd json-server <br>

build the docker with a docker file : docker build -t json-server . <br>
<br>

run the docker image with the name : json-server<br><br>

docker run -it -p 8080:8080 json-server<br>

you can go to : IP:8080 or localhost:8080
