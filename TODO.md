# To do (Crypto):

- [x] Crear la base de datos de AWS (Dynamo DB) que tenga como partition key un `id` y como order key la `fecha`.
  
  **Solución**: Un código bash que automatice la creación.
  
  ```bash
  aws dynamodb create-table \
      --table-name CryptoPrecios \
      --attribute-definitions \
          AttributeName=CryptoId,AttributeType=S \
          AttributeName=Fecha,AttributeType=S \
      --key-schema \
          AttributeName=CryptoId,KeyType=HASH \
          AttributeName=Fecha,KeyType=RANGE \
      --provisioned-throughput \
          ReadCapacityUnits=5,WriteCapacityUnits=5
  ```

- [x] Verificar los datos necesarios para la lectura (js) y escritura (python) en lambda.
  
  **Solución:** Código fuente de la solución y explicación en el README.md del [repositorio](https://github.com/aikerary/PythonLambdaFunctionCoinmarketCapQuotes).

- [x] Crear la función en lambda con los parametros de la API-key de coinmarketcap usando el SDK de Python para AWS.
  
  **Solución:** Código fuente de la solución y explicación en el README.md del [repositorio](https://github.com/aikerary/PythonLambdaFunctionCoinmarketCapQuotes).

- [x] Crear la prueba unitaria (sencilla) con el módulo `Mock` para verificar que ingrese correctamente los datos a la tabla.
  
  **Solución:** Código fuente de la solución y explicación en el README.md del [repositorio](https://github.com/aikerary/PythonLambdaFunctionCoinmarketCapQuotes).

- [x] Configurar un trigger con CloudWatch Events a dicha función para que se ejecute cada 6 horas.
  
  **Solución:** Código fuente de la solución y explicación en el README.md del [repositorio](https://github.com/aikerary/PythonLambdaFunctionCoinmarketCapQuotes).

- [x] Crear una función lambda en python que use de endpoints el id de la crypto y devuelva toda la data que tenga a través de un table scan.
  
  **Solución:** Código fuente de la solución y explicación en el README.md del [repositorio](https://github.com/aikerary/getCoinMarketCapDataDynamoDb).

- [x] Configurar una API-rest asociada a esa lambda function.
  
  **Solución:** Código fuente de la solución y explicación en el README.md del [repositorio](https://github.com/aikerary/getCoinMarketCapDataDynamoDb).

- [x] Crear y terminar los estilos base de la PWA de React.

- [x] Instalar dentro del proyecto recharts para poder usarlo.

- [x] Crear el componente dinámico en React que reciba como props el `symbol` de la criptomoneda y haga la solicitud correspondiente a la Dynamo DB usando SDK.

- [x] Añadir esos componentes a dos section separadas.

- [x] Crear una imagen de Docker con node y alpine.

- [x] Introducir el proyecto dentro de la imagen creada de docker.

- [x] Añadir instrucciones para correr la PWA y exponer el puerto correspondiente.

- [x] Desplegar la imagen de docker con ECS.

- [x] Configurar un load balance para obtener una DNS que dé una URL pública.
