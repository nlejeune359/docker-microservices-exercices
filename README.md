# docker-microservices-exercices

**Day One :**

* <ins>*Lancer les serveurs*</ins> <br>
```sh
  npm start
```  

* <ins>*Créer les images Docker*</ins>
```sh
  cd serv<X>
  sudo docker build . -t <nom_image>
```

* <ins>*Lancer les images Docker*</ins>

```sh
  sudo docker run -p port:port -d <nom_image>
```

:arrow_right: *exemple*: 
```sh
  cd serv1
  sudo docker build . -t serv1
  sudo docker run -p 4567:4567 -d serv1
```
