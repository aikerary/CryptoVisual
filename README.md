public URL: http://react-appbalancer-856592252.us-east-2.elb.amazonaws.com/

Aquí estamos creando una aplicación web de react
Para hacer el despliegue en una URL publica es bastante fácil.
En AWS, se puede hacer uso de Elastic Container Services para hacer el despliegue de la aplicación.
¡Hola evaluadores!

Aquí está el paso a paso de lo que hice:

1. **Creación de la imagen Docker para la aplicación web**:
   - En el directorio raíz de mi proyecto de React, preparé un archivo llamado `Dockerfile` con las siguientes configuraciones para:
     - Usar una imagen base de Node.js.
     - Establecer el directorio de trabajo.
     - Copiar los archivos de la aplicación.
     - Instalar las dependencias.
     - Construir la aplicación para producción.
     - Utilizar Nginx como servidor web y exponer el puerto 80.

2. **Construcción de la imagen Docker**:
   - Desde el directorio raíz de mi proyecto, ejecuté el comando `docker build -t my-react-app .` para construir la imagen Docker.

3. **Subida de la imagen a Amazon ECR**:
   - Accedí al servicio Amazon ECR en la consola de AWS.
   - Creé un nuevo repositorio de ECR y seguí las instrucciones para autenticarme y subir la imagen utilizando `docker push`.

4. **Creación de un clúster de Amazon ECS**:
   - Dirigíme al servicio Amazon ECS en la consola de AWS y creé un nuevo clúster de ECS.

5. **Creación de una tarea de ECS**:
   - En el clúster de ECS, generé una nueva tarea y la configuré para utilizar la imagen de Docker subida a ECR.
   - Aseguré que en la sección "Redes" estuviera seleccionada una VPC y una subred pública.
   - Agregué un mapeo de puerto `80:80` en la sección "Asignación de puertos" para exponer el servidor web Nginx en el puerto 80.

6. **Creación de un servicio de ECS**:
   - Dentro del clúster de ECS, establecí un nuevo servicio y seleccioné la tarea previamente creada.
   - Configuré el servicio para emplear un balanceador de carga de Application Load Balancer (ALB).
   - Elegí una VPC y una subred pública para el balanceador de carga.
   - Creé un grupo de destino para el balanceador de carga y lo configuré para redirigir el tráfico al puerto 80 de los contenedores.

7. **Obtención de la URL pública**:
   - Tras la creación del servicio de ECS, AWS generó automáticamente un balanceador de carga Application Load Balancer (ALB).
   - Accedí al servicio EC2 en la consola de AWS y localicé el balanceador de carga creado por ECS.
   - Copié la URL pública del balanceador de carga (también conocida como DNS name).

Ahora, mi aplicación web de React debería ser accesible a través de la URL pública del balanceador de carga de Application Load Balancer (ALB). ¡Gracias por su atención!


