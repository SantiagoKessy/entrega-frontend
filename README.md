# Más abajo se encuentra el texto creado por CRA #

## CodeSandbox con proyecto funcionando: https://codesandbox.io/s/github/SantiagoKessy/entrega-frontend ##

**Primer evaluación entregable de Front-end III para C.T.D.**

 - Pueden ver el deploy de la aplicación en:
   https://nostalgic-wilson-b2a04e.netlify.app/ 
 - Para descargar React    developer tools:   
   https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
   
 - Para utilizarlo: Ctrl + Shift + i  => Components:
![Ubicación de Components](https://github.com/Ivanszs/ctd-frontend3-primer-evaluacion/blob/main/reactComponents.PNG?raw=true)

¡Hola! Llegó el momento de poner a prueba los conocimientos adquiridos. Esta es la oportunidad para validar tu aprendizaje hasta el momento. Se trata de una evaluación entregable, donde tendrás la posibilidad de resolver el trabajo por cuenta propia y entregarlo antes de la fecha límite.
Recordá: La fecha límite de entrega es el viernes 10, 23:59 hs Argentina, 21:59 hs Colombia. 

**¿Cuáles son los temas que no me pueden faltar?**

 - Utilizar CRA para crear una aplicación.
 - Estructura de archivos y
   carpetas en React. 
 - Componentes de clase 
 - Props.
 - Estados.
 - Key props y .map().
 - Ciclo de vida.

 
¿A qué nos referimos con que no te pueden faltar? Bueno la aplicación que queremos que hagas puede realizarse de incontables formas, pero vamos a hacerla demostrando todo lo que fuimos aprendiendo hasta ahora.

**Consigna**

Entonces, se requiere que en algún punto del código se utilicen:

 - Props.
 - Estados mediante this.state y setState.
 - .map() y Key Props sobre una lista.
 - Algún método del ciclo de vida.
 - En caso que necesites crear un componente que tenga estados,
   necesariamente deberás utilizar componentes de clase. En caso de
   tener alguno que no tenga la necesidad de utilizar estados, podés
   utilizar componentes funcionales.

**La app**

La aplicación que vas a crear se trata de un “Elige tu propia aventura”.
Te presentaremos un texto que describa una situación y dos opciones (A o B) para reaccionar ante la situación. 
Cada una de estas opciones te llevará por el recorrido de la historia de una forma u otra, dependiendo de tus elecciones.
Dentro de la carpeta "components", encontrarás un archivo llamado "data.json" en el cual verás un array de objetos, que es el que se utiliza para el texto de la historia así como también para las opciones.
Como podrás ver, se trata de una historia prácticamente lineal. 
Si elegís una opción, esta te dará un texto único. Sin embargo, tendrás las mismas consecuencias de si hubieras elegido la otra opción.
Esto es así para evitar tener un JSON extremadamente confuso, con el cual tengas que perder mucho tiempo descifrando.
 
**Otras funcionalidades**

A medida que hagas elecciones "A" o "B", estas deben quedar en dos registros:

 - Uno que muestre en pantalla la última elección que realizó el usuario
   (por ejemplo, "Selección previa: A").
 - Otro registro mostrando todas las selecciones anteriores (por
   ejemplo, "Anteriores: A B A").

**También** tendrás a disposición un archivo llamado index.CSS dentro de la carpeta src para dejar la app algo más estética. Recordá asignar className a los distintos elementos que ahí se nombran. 
Igualmente tené en cuenta que el CSS no es algo que se evaluará, por lo tanto es completamente opcional.

**Entrega**

La app se tiene que entregar en un repositorio de GitHub, mediante un formulario que se te entregará posteriormente.
Tendrás tiempo hasta el viernes 10, 23:59 hs Argentina, 21:59 hs Colombia. 
**Cualquier modificación en el repositorio de GitHub, posterior al tiempo límite establecido, no será evaluada.**


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
