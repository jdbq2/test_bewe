# Prueba Técnica Bewe React

### Herramientas Utilizadas:

- Vite + Typescript
- React 18
- React Router v6
- Material UI
- Axios
- Zustand
- React Hook Form
- React GeoCode
- React Google Maps

### Scripts:

Instalar el proyecto usamos:

```bash
npm install
```

Modo de desarrollo:

```bash
npm run dev
```

Bundle :

```bash
npm run build
```

### Explicación de la estructura del proyecto:

- Se utiliza axios para realizar las peticiones HTTP, se crean las bases de cada API en la carpeta api.
- En la ruta src > components se encuentran los componentes de uso general en el proyecto, los componentes que solo se usan en una pagina se encuentran dentro de la carpeta de dicha pagina.
- En la carpeta context se encuentra el setup del theme de Material UI.
- En la carpeta hooks se encuentra el custom hook utilizado para traducir de un string a las coordenadas que usa el mapa de google maps.
- En la carpeta interfaces se encuentran las interfaces de Typescript de los dos principales componentes de este proyecto y que usan a lo largo del mismo (users, links).
- En la carpeta pages se encuentran cada una de las paginas/vistas que se utilizan en la aplicación, dentro de las mismas se encuentran los componentes u otros posibles elementos que solo se ultilicen dentro de dicho scope.
- En la carpeta router esta la configuración de las rutas, al igual que los componentes de rutas privadas y rutas públicas.
- En la carpeta store se encuentra la configuracion de Zustand.

### Decisiones técnicas:

- Se utiliza el local storage para la persistencia de datos del usuario, obteniendo asi que esta solo se cargue al momento de hacer login dentro de la APP.
- Al momento de hacer login, se hace el fetch de todos los links que este usuario tiene en el server y se utiliza el local storage para la persistencia de los datos.
- Al momento de hacer el signup, se procede al loggear al usuario dentro de la app, con el fin de no tener que redirigirlo a la vista de loggin para que haga de nuevo el proceso de escribir credenciales.
- Debido al tamaño de la app (pequeño), se utiliza un unico store de Zustand para la gestion del estado, para una app mas grande o con mas funcionalidades es recomendado dividir el store en varios para hacer mas facil su gestión.
- Se agrega un pagina sencilla de terminos y condiciones ya que estaba presente la opción en el formulario de registro.
- Se agrega un modal para confirmar la eliminación de uno de los links, ya que se podia dar click por error en el botón, generando una mala experiencia de usuario.
- Las llamadas a la API derivadas del uso de formularios se hace dentro del mismo componente de formulario con el fin de dar feedback al usuario en la misma vista.
- El token se guarda directamente dentro del localstorage y en ningun momento se une al estado dentro de Zustand.

### Decisiones de diseño/ UI:

- Se conserva el look and feel de los componentes de input de los formularios dentro de material UI.
- Se crea un Layout de dos columnas para las pantallas desktop.

### Aspectos a mejorar:

- Utilizar emotion para crear archivos de componentes custom con el fin de mejorar la legibilidad de los componentes de Material UI, debido a que se utilizo durante el desarrollo la propiedad sx.
- Se podria mejorar la composición de algunos componentes para tener un producto final mas pulido y mas facil de manejar.
