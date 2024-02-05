# F2X

El proyecto se basa en la prueba de F2X sobre la web https://reqres.in/ en donde se debe automatizar algunos de los servicios con los cuales cuenta dicha web. 

<p align="left"> <img src="https://komarev.com/ghpvc/?username=angiemaldonado&label=Profile%20views&color=0e75b6&style=flat" alt="angiemaldonado" /> </p>

## Solucionadora

- [@AngieMaldonado](https://github.com/AngieMaldonado)


## Tecnologias utilizadas

Para esto se ha implementado un proyecto en Cypress con las siguientes caracteristicas:

* cypress 13.6.4 (https://www.npmjs.com/package/cypress)
* cypress-cucumber 4.3.1 (https://www.npmjs.com/package/cypress-cucumber-preprocessor)
* cypress-mochawesome-reporter (https://www.npmjs.com/package/cypress-mochawesome-reporter)


## Configurar/instalar

Para la instalación del proyecto solo bastará con descargar el repositorio y tener configurado previamente las herramientas para cypress las cuales las puede consultar en la documentación inicial (https://docs.cypress.io/guides/getting-started/installing-cypress)

Descargue el proyecto PruebaF2x en la ruta deseada

```bash
  git clone https://github.com/AngieMaldonado/PruebaF2x.git
```

Luego dirijase a la carpeta del proyecto

 ```bash
  cd PruebaF2x
```

Instale las dependencias en su servidor CI o local 
* Cypress
 ```bash
  npm install cypress --save-dev
```
* Cucumber para Cypress
 ```bash
  npm install --save-dev cypress-cucumber-preprocessor
```

* Reporter
 ```bash
  npm i --save-dev cypress-mochawesome-reporter
```
## Escenarios creados

- Creación de usuario
- Login con datos validos e invalidos
- Consultar usuario existente e inexistente
- Actualización de usuario


## Para ejecutar las pruebas

Para ejecutar todas las pruebas en las carpetas e2e y default

```bash
  npx cypress run
```
Pruebas específicas de Cucumber

```bash
  npm run cucumberTest
```


## Informes de las pruebas

Cuando se completa la ejecución de la prueba, los informes se guardan en formato html en la ubicación. cypress/reports/html/index.html Se adjunta un informe de muestra como referencia).

![Informe](https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYT25_yEx70rcs6HIJHgnKg6Rabsuv0FeU-OpHmO6nUQoLfzZRXSxZNb0rWsbwtj9q2LQTE47ay5rKr0tsShF0CpzUZ7uQ=w3456-h1918)

## Feedback

Si tiene algún comentario, comuníquese conmigo en:
* angiemaldonado1993@gmail.com


