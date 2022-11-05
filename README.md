# Data-Warehouse - Umbert André

Link del repositorio: https://github.com/AndreUmbert/Data-Warehouse

# Descripción general:

El trabajo consta de desarrollar una herramienta que permite a una compañia de Marketing administrar todos los contactos de sus clientes para sus campañas.

Dicho proyecto se ha trabajado de manera individual y se ha realizado desde cero.

---

# Entregables:

El entregable cuenta en generar un sitio web que permite realizar distintas operaciones CRUD a una base de datos de contactos que incluyen sus datos personales, sus preferencias, datos de contacto, lugar donde trabajan, y lugar donde viven.

Dichos archivos entregables son:
\*Carpeta Front que incluye subcarpetas para los archivos HTML, CSS y JS:

- Carpeta assets: Cuenta con todas las imagenes con formato PNG y SVG que se han utilizado para emular iconos y demases dentro del sitio web.

- Carpeta frontScripts: En esta carpeta se pueden encontrar todos los archivos de JavaScript que se utilizan para las funcionalidades e interacciones del frontend con las que el usuario de la web podra interactuar.

- Carpeta styles: Aca se podran encontrar todos los archivos SCSS que se han utilizado para el estilado a traves del compilador.

- Carpeta views: Son todos los archivos HTML que se han utilizado para renderizar las distintas paginas y secciones: Dashboard que muestra todos los contactos del usuario, Company, Region/City, Index que es el Login y por ultimo el Registro que es el archivo signup.html.

- Archivos principales encontrados en la carpeta Front:
  - style.scss, style.css y style.css.map: En el primero de ellos se realizan el import de cada uno de los archivos SCSS, al utilizar el compilador, este genera dos archivos, el style.css y style.css.map. El archivo style.css es el que se importa en las distitnas views para que se aplique el estilado general a cada una de ellas y a cada parte en especifico.

\*Carpeta Backend: Cuenta con todos los archivos y recursos necesarios para inicializar el servidor y hacer la conexion con el mismo, el mismo cuenta con subcarpetas y archivos sueltos:

    - Carpeta config: En la misma se puede encontrar el archivo "db.js", en dicho archivo se establece el uso de los datos traidos desde el archivo ".env", que contiene las variables de entorno. Ademas en el mismo archivo db.js se encuentra la utilizacion del ORM sequelize. En conjunto ambas dos herramientas descriptas con anterioridad hacen que el archivo "db.js" sea aquel encargado de establecer la conexion con el servidor y la base de datos.

    - Carpeta controlers: Se puede encontrar un unico archivo llamado "adminVerification.js": es un middleware encargado de verificacar que el usuario que esta intentando realizar algun proceso CRUD sea administrador. Si es administrador le otorgara permiso y si es usuario sera rechazado.

    - Carpeta models: Dentro de la carpeta models podemos encontrar el archivo "index.js" y los demas archivos.

        - "index.js": Aquí se importan todos los modelos, se establecen las relaciones entre las distintas llaves foraneas y se las exporta.

        - "channel.js, channelHasContact.js, city.js, company.js, contact.js, country.js, region.js, rol.js y user.js": Son los modelos de cada una de las tablas que conforman la estructura de los datos en la base elaborada, donde cada fila concuerda tanto en el modelo como en la base de datos para que que la app corra correctamente. Todos ellos estan trabajados con el ORM de sequelize y se exportan para luego establecer las conexiones en el archivo "index.js" y luegos volverlos a exportar para trabajar con ellos desde otras partes del proyecto.

    - Carpeta services: Esta carpeta cuenta con dos archivos, una que lleva el servicio propiamente dicho y otro archivo "index.js", el cual sirve para trabajar todos los archivos de servicios desde uno solo y poder exportarlos. Cabe aclarar que esto fue creado con el objeto de cumplir con una de las tareas optativas, aquella sobre mostrar los canales en el dashboard, pero debido a cuestiones de tiempo he decidido a omitir dicha tarea, por lo cual ambos archivos y sus respectivos importes estan comentados.

    -Archivos sueltos encontrados dentro de la carpeta "Backend":

        -"DATABASE.sql": Es un archivo de queries, que se puede ejecutar desde MySQLWorkbench y el mismo generara las tablas y las conexiones necesarias para empezar a trabajar.

        -"DBQueries.sql": Este archivo cuenta con queries que he utilizado para generar algunas interacciones mas complejas con la base de datos, para cumplir con los requerimientos del proyecto.

        -"server.js": Este archivo es muy importante, dado que es aquel que junta los modelos, la conexion, los middlewares, importa un monton de herramientas necesarias para conectar el proyecto con la base de datos y el encargado de poner el funcionamiento el servidor.

        -"data-warehouse.json" y "data-warehouse.yaml": Es la documentacion de la aplicacion, en la misma cuenta como deberian ser los modelos y la informacion cada una de ellas, asi como tambien los procesos CRUDs que se deben realizar para cada uno de ellos.

\*Archivos sueltos en la carpeta integral del proyecto "Data-Warehouse":

    - "README.md" (actualmente en lectura): Trae los detalles de como inicializar el proyecto y la informacion con la que cuenta cada uno de los archivos del proyecto.

    - ".gitignore": Este archivo se utiliza para que la carpeta "node_modules" no se pueda pushear al repositorio.

    - "package.json": Archivo de vital importancia para el proyecto, el mismo cuenta con los scripts que se utilizan para startear la conexion y el servidor, como asi todas las dependencias del proyecto.

    - ".env": Este archivo contiene las variables de entorno que se importan en el archivo "db.js" que tiene las configuraciones de la conexion.

    - "package-lock.sjon": Este surge de hacer la instalacion de las dependencias.

---

# Uso de librerías:

La selección de tecnología es libre tanto en el modo compañía cómo el modo freelance, puedes utilizar la librería o framework que desees solo debes asegurarte que tengan una licencia libre de uso.Trabaja Bootstrap o maqueta desde cero, selecciona las librerías que necesites o desarrolla todas las funcionalidades por tu cuenta, elige las librerías de Node que creas más convenientes y por último selecciona tu motor de base de datos preferido: Mongo DB o MariaDB.

---

# Modalidad del trabajo:

Modo Freelance. Crea tu propia interfaz con la experiencia de usuario que desees para tu proyecto. Si eliges esta opción, sólo evaluaremos que tu proyecto cumpla con los requisitos de funcionalidades de la checklist (que podrás encontrar al final de este documento).

---

# Consignas:

Tienes mucho trabajo por delante, pero antes de poner manos a la obra, lo mejor que puedes hacer es planificar. Habiendo visto el prototipo interactivo, te sugerimos que tu siguiente paso sea leer la guía completa antes de empezar a desarrollar.

Sabiendo de qué se trata el entregable que debes desarrollar, busca un esquema para dividirlo en tareas que te sirva a tí. Puedes apoyarte en Trello y crear tarjetas para cada tarea o post-its pegados en un pizarrón. Puedes también armar un Gantt chart.

Una vez que tengas todo el universo de tareas para realizar no hay una receta mágica o un flujo a seguir. Dependiendo cuáles sean tus fuertes, puedes comenzar por el front, por el back, la documentación o cualquier otro aspecto del desarrollo.

Verás a continuación un índice con seis módulos de trabajo que podrás tomar para trabajar individualmente, cada uno en el orden que prefieras.

Índice de módulos:

1. Header
2. Login
3. Sección
4. Usuarios
5. Sección Región / Ciudad
6. Sección Compañías
7. Sección Contactos

---

1. Header

La imagen de arriba representa el header del sitio. A la izquierda, en donde dice “LOGO” se supone que va el logo de la compañía para la cual estás desarrollando el sitio. Puedes elegir el logo que más te guste y ponerlo en ese lugar. A la derecha verás las 4 secciones que presenta el menú:

• Contactos: son los contactos que tiene almacenados la compañía para la cual estás desarrollando este sitio. Es el ítem más importante, ya que tu sitio está diseñado para facilitar su administración. Ten en cuenta que un contacto trabaja en una Compañía y también vive en una Ciudad (que es parte de una Región).

• Usuarios: se trata de los usuarios de la compañía para la cual estás desarrollando este sitio que utilizarán este sitio (ej.: personas de Marketing, Comerciales, etc.).

• Compañías: son las compañías para las cuales trabajan los contactos almacenados en este sitio. Es una sección del sitio —distinta a Contactos— porque permite trabajar las compañías de manera individual. A cada contacto se le asignará una compañía previamente cargada.

• Región / Ciudad: refiere a la Región / Ciudad en la cual trabajan los contactos y también donde están situadas las compañías almacenadas en tu sitio (puedes pensarlo como una forma de organizar la información). Un posible caso de uso es querer organizar un evento en Bogotá, Colombia y que el sitio nos permita filtrar todos los contactos que viven en esas ciudad.

Por lo tanto, trabajar inicialmente en estas cuatro vistas facilitará tu trabajo ya que, por ejemplo, cuando crees un nuevo Contacto, deberás seleccionar en qué Compañía trabaja y en qué Región / Ciudad vive (datos previamente cargados en tu DB).
Si piensas en la arquitectura del sitio, verás que los datos tienen relación entre sí. Por lo tanto, debes definir un modelo de base de datos que soporte el almacenamiento de todos ellos y luego te permita recuperar la información a medida que navegas tu sitio.
Entonces, recapitulando lo que tenemos hasta aquí:

---

2. Login

¡Comenzar tu proyecto por el login puede ser una buena idea! Crea tu vista de login con los componentes en los assets provistos para que los usuarios accedan al sitio. Aquí tienes un boceto tentativo para que diseñes tu propia pantalla de ingreso (recuerda que para crearla puedes utilizar los assets provistos en el UI Kit).

Recuerda que debes devolver a tu sitio un JWT si la validación es satisfactoria. Así podrás realizar los próximos request dentro del sitio y estar seguro/a de que un usuario logueado los está realizando.
En la home de tu sitio puedes mostrar momentáneamente un “Hola Mundo” para validar que solo usuarios logueados pueden acceder allí.

El sistema no permite que un usuario no registrado pueda crear una cuenta. Esto se debe a que los usuarios deben ser creados desde dentro del sitio (lee la sección “Usuarios” para conocer cómo administrar cada uno de los usuarios y perfiles).

---

3. Sección Usuarios

Comenzamos por esta sección, ya que no tiene relación con las otras 3 secciones del header. Esto se debe a que los usuarios son personas de la compañía para la cual estás haciendo el sitio y que, por ende, no guardan relación con los contactos, compañías, o regiones a almacenar en la DB.

En la sección de Usuarios debes crear un CRUD para brindar las credenciales de acceso a la plataforma. Permite el ingreso de los siguientes datos para crear acceso:
• Nombre
• Apellido
• Email
• Perfil
• Admin (Puede realizar todas las acciones sobre la entidad contactos y puede crear usuarios nuevos)
• Básico (Puede realizar todas las acciones sobre la entidad contactos pero no puede crear usuarios nuevos)
• Contraseña
• Repetir contraseña

Aquí tienes un boceto tentativo para que diseñes esta sección (recuerda que para crearla puedes utilizar los assets provistos en el UI Kit):

No olvides generar tu lista de usuarios para poder editar o eliminar cuando lo necesites.

Una recomendación: bloquea todos los request a tus endpoints y users a todos los usuarios que no tengan perfil administrador a través de un Middleware.

---

4. Sección Región / Ciudad

Teniendo el Header, el Login, y la sección de Usuarios internos, te sugerimos continuar por la sección Región / Ciudad debido a que las otras dos —Contactos y Compañías— dependen de ésta. ¿Por qué? Piénsalo así: un contacto o una compañía pertenece a una ciudad y no al revés. Entonces, cuando intentes crear un nuevo contacto o compañía deberás asignar una ciudad existente, por lo que si no tienes completo este módulo en tu sitio no podrás hacerlo.

El siguiente árbol te ayudará a trabajar el modelado de tu base de datos para definir las relaciones:
• Sudamérica
• Argentina
• Buenos Aires
• Córdoba
• Colombia
• Bogotá
• Cúcuta
• Medellín
• Chile
• Atacama
• Santiago
• Valparaíso
• Uruguay
• Canelones
• Maldonado
• Montevideo
• Norteamérica
• México
• Ciudad de México
• Tijuana
• Estados Unidos
• Florida
• Texas

Verás que aparecen países además de la Región y la Ciudad (¡y es lógico!). En el header decidimos poner solo Región / Ciudad para acotar el nombre entre el término más amplio —Región— y el más acotado —Ciudad. El trabajo que debes realizar en esta sección es generar una vista que permita, listar, crear, editar y eliminar cualquiera de las ramas del árbol.
Aquí tienes un boceto que puede ayudarte (recuerda que para crearla puedes utilizar los assets provistos en el UI Kit):

Puedes reutilizar todos los componentes de la vista de Contactos para armar ésta o plantear un nuevo diseño ordenando la información de manera diferente (solo necesitas tomar el estilo de un texto, algunos íconos para las acciones y un botón para agregar una nueva región).

---

5. Sección Compañías
   Al igual que en el caso de “Región / Ciudad”, deberás crear las vistas necesarias para realizar las operaciones CRUD sobre esta sección. Nuevamente, puedes reutilizar los componentes de la vista de Contactos.

Aquí tienes el boceto de una estructura tentativa para mostrar la información (recuerda que para crearla puedes utilizar los assets provistos en el UI Kit):

Estos son los datos mínimos que debe tener la sección “Compañías”:
• Nombre
• Dirección
• Email
• Teléfono
• Ciudad (ya que tiene asociado un país y éste su región)

---

6. Sección Contactos

Como te comentamos más arriba, esta sección es la más importante del sitio y, por eso, la dejamos para el final. Si observas nuevamente el prototipo interactivo o las pantallas, podrás notar que podemos dividir la sección Contactos en cuatro operaciones relacionadas al CRUD:

a. Pantalla de inicio de la sección Contactos (aquí es donde tienes la vista de los contactos de tu base).

b. Crear contactos: en la vista de arriba, cuando un usuario hace click en el botón ‘Agregar contacto’, debes llevarlo a una nueva pantalla en donde podrá ingresar los datos.

c. Editar contactos.

d. Eliminar contactos.

---

# Condiciones para entregar el proyecto:

*Una carpeta Front que incluya subcarpetas para tus archivos HTML, CSS y JS.
*Una carpeta Backend con todos los archivos necesarios para iniciar tu servidor.
*README.MD con instrucciones de instalación.
*URL de repositorio.

---

# Condiciones para aprobar:

a. Si elegiste Modo Compañía: el diseño debe ser igual al de referencia (tanto la estética como el flujo de pantallas).

b. Login: el sitio debe permitir el registro y login únicamente de usuarios creados en el sitio.

c. Header: si el usuario logueado no es administrador no debe mostrar el link de Usuarios.

d. CRUD de Usuario (solo usuarios de perfil administrador):
-Nombre
-Apellido
-Email
-Perfil
-Contraseña

e. CRUD de Región / País / Ciudad:
-Ciudades deben estar relacionadas con países
-Países deben estar relacionados con regiones

f. CRUD de Compañías:
-Nombre
-Teléfono
-Email
-Ciudad: relación con tabla o colección de ciudades.
-Dirección

g. CRUD de Contactos:
Datos de contacto:
-Nombre
-Apellido
-Email
-Compañía: relación con tabla o colección de compañías.
-Ciudad: relación con tabla o colección de ciudades.
-Dirección
-Canales de contacto: relación con uno o más canales de contacto. Si bien debes incluir Canales de contacto al cargar nuevos contactos, visibilizar esta información en la información de cada contacto en la vista principal es opcional .

h. Buscador de contactos: debes realizar al menos 1 de las 3 opciones ofrecidas en la guía de este documento.
-Añadir tags según búsquedas del usuario es una funcionalidad opcional.
-Selección múltiple: debe mostrar la cantidad de contactos a medida que se van seleccionando; debe permitir eliminarlos.
-Editar contacto: debe permitir editar cualquier dato de cualquier contacto.
-Eliminar contacto: debe permitir eliminar un contacto con la previa confirmación de esta acción.
-Importar / Exportar masivamente es una funcionalidad opcional.

-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

## INSTRUCCIONES DE EJECUCIÓN:

# Prender servidor:

Comenzaremos poniendo todo en marcha por lo tanto comenzaremos iniciando los programas que se requieren para la ejecución y luego iremos paso por paso hasta iniciar el servidor. Los pasos para inicializar el servidor son los siguientes:

1. Abrir Visual Studio Code y abrir la carpeta DATA-WAREHOUSE -> Data-Warehouse, donde encontraremos el archivo ".env" que contendra los valores de las variables de entorno. Abrir dicho archivo en el editor de código.

2. Abrir MySQL Workbench y establecer una nueva conexión, donde pondremos el usuario, el ip y el puerto de la base de datos. Crear la conexión con dichos datos.

3.Abrir XAMPP y poner en funcionamiento MySQL desde el panel de control. Luego revisar que el puerto de la base de datos que aparece en el panel sea el 3306 (dado que es aquel que corresponde con las variables de entorno perteneciente al puerto de la base de datos).

4. Abrir la base de datos en MySQL Workbench.

5. Utilizar el archivo "DATABASE.sql" para la obtención de la estructura de los datos (tablas y relaciones) en MySQL Workbench.

6. Abrir una nueva terminal en el editor de código y en ella dirigirse a la direccion " D:\Proyectos AcamicaEntregables\Data-Warehouse\Data-Warehouse\Backend"

7. En dicha terminal ejecutar el comando "npm run start". Donde "start" es el script en el archivo "package.json" que nos permitira prender el servidor. Si el servidor se conecta correctamente debe mostrar los siguientes mensajes en consola:
   "mysql://root@127.0.0.1:3306/data_warehouse
   escuchando en puerto 3000
   Executing (default): SELECT 1+1 AS result
   todo OK"

8. Crear un usuario administrador de manera manual desde la base de datos para poder logearse correctamente. No se puede crear un usuario sin ser administrador, dado que se entiende que es un producto de venta para una compañia, es decir de entorno cerrado.

9. Apretar en "Go Live" para inicializar la aplicacion de manera local y poder verla e interactuar con ella desde su navegador.
