# joseplorenzini.com

Portafolio personal desarrollado con React y Vite, con una API Node.js/Express para consultar proyectos en MongoDB y enviar mensajes de contacto mediante Nodemailer.

Este README documenta los archivos locales revisados el 23 de septiembre de 2026. Distingue la implementación actual del plan de reorganización: la migración a CSS Modules y la extracción de servicios todavía no están implementadas. No se verificó el servidor de producción ni se ejecutaron pruebas funcionales para esta revisión.

## Ubicación y alcance

La carpeta de trabajo fue renombrada de `joselorenzini.com` a `joseplorenzini.com`. La aplicación continúa dentro de `react1/amazon1`, y su paquete todavía se llama `amazon1`.

Este README está en `react1/amazon1/README.md`. Las rutas de la estructura general se expresan desde la carpeta de trabajo `joseplorenzini.com`, salvo indicación contraria. El repositorio Git detectado está en `react1/amazon1/.git`: el backend externo y los archivos de infraestructura no forman parte de ese repositorio por su ubicación actual.

Dominio utilizado por el código: `https://joseplorenzini.com`.

## Tecnologías actuales

| Área | Implementación observada |
| --- | --- |
| Interfaz | React 19, JavaScript y JSX |
| Compilación | Vite 7 y plugin React SWC |
| Navegación | React Router 7 con BrowserRouter |
| Estilos | Tailwind CSS 4 mediante PostCSS, más CSS propio |
| Iconos | lucide-react |
| Peticiones activas revisadas | Fetch API |
| API | Node.js y Express 5 |
| Datos | MongoDB mediante Mongoose |
| Correo | Nodemailer con servicio Gmail |
| Desarrollo del backend | nodemon |

Las versiones exactas y las dependencias varían entre copias del backend. Axios está declarado en el frontend, pero los tres flujos documentados aquí utilizan `fetch`.

## Estructura actual

```text
joseplorenzini.com/
├── react1/
│   ├── amazon1/                 # Aplicación y repositorio Git
│   │   ├── src/
│   │   │   ├── main.jsx         # Montaje de React y BrowserRouter
│   │   │   ├── App.jsx          # Rutas de la aplicación
│   │   │   ├── Layout/
│   │   │   │   └── Layout.jsx   # Header, contenido y Footer
│   │   │   ├── pages/
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   └── Portafolio.jsx
│   │   │   ├── components/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── ContactForm.jsx
│   │   │   │   ├── FetchGithub.jsx
│   │   │   │   └── RickandMorty.jsx
│   │   │   ├── assets/
│   │   │   ├── index.css        # Importación de Tailwind y estilos globales
│   │   │   └── App.css
│   │   ├── public/images/      # Imágenes y capturas de proyectos
│   │   ├── server/             # Una copia del backend
│   │   ├── dist/               # Salida de compilación existente
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── vite.config.js
│   │   ├── postcss.config.js
│   │   └── README.md
│   ├── documents/             # Grabación del sitio
│   └── package.json           # Dependencias adicionales de CSS
├── backend/
│   ├── localserver/
│   │   ├── server.js
│   │   ├── server-original-bkp.js
│   │   ├── schema/vientodelsur.model.js
│   │   └── package.json
│   └── server-bkp/             # Otra copia del backend
├── aws-commands
├── mongoDBqueries.js
├── joseplorenzini.conf
├── joseplorenzini.conf.conf
└── joseplorenziniLast.conf
```

También existen archivos de entorno, certificados y claves en el espacio de trabajo. Sus valores no se reproducen en esta documentación.

## Páginas y componentes

| Ruta | Página | Función |
| --- | --- | --- |
| `/` | `Home.jsx` | Presentación e integración de repositorios GitHub |
| `/about` | `About.jsx` | Perfil y experiencia |
| `/contact` | `Contact.jsx` | Información de contacto y ContactForm |
| `/portafolio` | `Portafolio.jsx` | Tarjetas obtenidas desde la API de proyectos |

`main.jsx` inicializa React y BrowserRouter. `App.jsx` define las rutas y envuelve cada página con `Layout.jsx`, que incorpora Header y Footer.

## Flujo de datos actual

### GitHub

`src/components/FetchGithub.jsx` consulta directamente:

```text
https://api.github.com/users/josepedrolorenzini/repos?sort=updated&per_page=5
```

La petición se realiza al montar el componente; los resultados se guardan en estado y se muestran como una lista de nombres de repositorios.

### Portafolio

`src/pages/Portafolio.jsx` consulta `https://joseplorenzini.com/api/posts`. Guarda la respuesta en estado y genera tarjetas con imagen, categoría, título, descripción, cuerpo y enlace.

En `backend/localserver/schema/vientodelsur.model.js`, Mongoose conecta mediante `MONGO_URL`. El modelo se llama `VientoDelSurNet` y utiliza la colección `posts`, con campos como `id`, `title`, `body`, `category`, `description`, `image`, `url`, `created_at` y `updated_at`.

### Contacto

`src/components/ContactForm.jsx` envía un POST JSON a `https://joseplorenzini.com/api/submit-form` con `name`, `email` y `message`.

La copia `backend/localserver/server.js` contiene validaciones de campos, formato de email y longitud del mensaje, además de escape de HTML para el correo. Nodemailer utiliza `EMAIL_USER` y `EMAIL_PASS`; el destinatario es `EMAIL_USER` y el remitente del formulario se utiliza como `replyTo`.

### Rutas del backend local

| Método | Ruta en backend/localserver | Función |
| --- | --- | --- |
| GET | `/` y `/root` | Respuestas de identificación del servidor |
| GET | `/api/posts` | Consulta de documentos MongoDB |
| POST | `/api/submit-form` | Validación y envío de correo |
| GET | `/api/chile-elections` | Consulta de un servicio externo de Polymarket |

Estas rutas describen el código; no implican que esta copia pueda arrancar en su estado actual. Consultar los hallazgos antes de ejecutarla.

## Desarrollo local

### Frontend

Desde la carpeta general `joseplorenzini.com`:

```powershell
cd react1/amazon1
npm install
npm run dev
```

Vite tiene configurado el puerto **3173** y `host: true`. Utilizar la dirección que muestre la terminal; si el puerto está ocupado, Vite puede seleccionar otro.

Comandos disponibles desde esa misma carpeta:

```powershell
npm run lint
npm run build
npm run preview
```

La compilación genera `dist/`. La existencia de esa carpeta no confirma que corresponda al código actual.

**El frontend todavía consulta producción directamente**, incluso al enviar el formulario. Arrancar Vite no redirige estas peticiones automáticamente a un backend local.

### Backend

Antes de arrancarlo, hay que identificar la copia principal y resolver los problemas registrados abajo. En `backend/localserver`, el script declarado es `npm start`, que ejecuta `nodemon server.js`.

Variables utilizadas por esa copia:

| Variable | Uso |
| --- | --- |
| `MONGO_URL` | Conexión MongoDB |
| `EMAIL_USER` | Cuenta Gmail utilizada para el correo |
| `EMAIL_PASS` | Credencial de correo |
| `PORT` | Puerto del servidor; por defecto 5000 |

No se ha comprobado el contenido de las credenciales ni la conexión a servicios externos. El script `test` del backend es un marcador que termina con error, no una suite de pruebas.

## Infraestructura documentada

La documentación anterior describe AWS EC2 con Ubuntu, Nginx, PM2, Cloudflare y MongoDB Atlas. Esa infraestructura no fue verificada en vivo durante esta revisión.

Las configuraciones Nginx locales apuntan a `/var/www/joseplorenzini.com/dist` e incluyen fallback a `index.html` para React Router y referencias a certificados Cloudflare.

`joseplorenzini.conf.conf` incluye un proxy de `/api/` a `http://127.0.0.1:5000/`. La barra final implica que el prefijo `/api/` se sustituye al reenviar: `/api/posts` llega al backend como `/posts`. Esto debe alinearse con las rutas de la copia de backend seleccionada. No se ha determinado cuál de las configuraciones está instalada en producción.

## Hallazgos de la revisión local

| Hallazgo | Evidencia y efecto |
| --- | --- |
| Tres copias del backend | Existen `backend/localserver`, `backend/server-bkp` y `react1/amazon1/server`; falta identificar la fuente principal. |
| Error de sintaxis | `backend/localserver/server.js` contiene `awcait response.json()` en vez de `await response.json()`, lo que impide analizar correctamente ese archivo. |
| Dependencias sin declarar | `backend/localserver/server.js` importa `cors` y `dotenv`, pero no aparecen en su package.json. Una instalación aislada no queda descrita de forma completa. |
| Copia interna incompleta | `react1/amazon1/server/server.js` usa `nodemailer` sin importarlo y referencia `./schema/vientodelsur.model`; no existe esa carpeta schema en la copia revisada. |
| Rutas diferentes | La copia interna expone `/posts`; localserver expone `/api/posts`. Deben revisarse junto al proxy. |
| Configuración Nginx con error textual | `joseplorenzini.conf.conf` comienza con `erver {` en lugar de `server {`. No usarla directamente como configuración validada. |
| URLs de producción en componentes | Contacto y portafolio apuntan directamente al dominio publicado. |
| Nombre interno pendiente | El paquete frontend conserva el nombre `amazon1`. |
| README anterior desalineado | Indicaba puerto 5173, variable MONGODB_URI y carpetas que no reflejaban completamente esta copia. Este documento corrige esas descripciones. |

Los hallazgos se basan en lectura de archivos. No se ejecutaron build, lint, backend, pruebas en navegador, envíos de correo ni comprobaciones de producción para actualizar este README. Los problemas de código listados permanecen pendientes.

## Plan de reorganización propuesto — pendiente

Objetivo: conservar el diseño, las rutas y la funcionalidad mientras se organiza el código. El cambio de nombre de la carpeta general ya se realizó; los siguientes cambios todavía no.

### 1. Extraer peticiones a servicios

Crear dentro de `src/services/`:

- `githubApi.js`: obtener repositorios.
- `portfolioApi.js`: obtener proyectos.
- `contactApi.js`: enviar el formulario.

Los servicios realizarán las peticiones y comprobarán las respuestas HTTP. Los componentes conservarán la gestión de carga, datos y errores visibles. Centralizar la dirección base en `src/config/api.js`, utilizando una variable propuesta `VITE_API_BASE_URL` para seleccionar el backend según el entorno. Esta variable todavía no está implementada y no debe contener secretos: las variables VITE se incorporan al frontend.

### 2. Migrar a CSS Modules

Agrupar cada componente o página con su archivo `.module.css`. Mantener reset, tipografía y estilos compartidos en `styles/globals.css`, y colores y valores comunes en `styles/variables.css`.

Migrar por componente, verificando escritorio y móvil. Retirar Tailwind, su plugin y sus dependencias solo cuando no queden consumidores activos. Actualizar el lockfile junto con cualquier cambio de dependencias.

### 3. Reorganizar carpetas y nombres

Mover `react1/amazon1` a `frontend` y proponer `joseplorenzini-frontend` como nombre del paquete. Preservar el repositorio `.git` y los cambios locales existentes. Decidir el alcance del repositorio antes de incorporar carpetas externas.

Revisar referencias al nombre anterior individualmente. No renombrar automáticamente dominios, certificados o rutas de despliegue. Identificar el backend principal antes de consolidar copias; no eliminar respaldos sin una decisión expresa.

### Estructura objetivo

```text
joseplorenzini.com/
├── frontend/
│   ├── public/images/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.module.css
│   │   │   ├── Footer/
│   │   │   ├── ContactForm/
│   │   │   └── FetchGithub/
│   │   ├── layouts/
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.module.css
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── About/
│   │   │   ├── Contact/
│   │   │   └── Portafolio/
│   │   ├── services/
│   │   │   ├── githubApi.js
│   │   │   ├── portfolioApi.js
│   │   │   └── contactApi.js
│   │   ├── config/api.js
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── variables.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Organización interna por definir
├── docs/
└── README.md
```

La ubicación futura del README en la raíz también forma parte de la propuesta. Este archivo permanece actualmente en `react1/amazon1`.

### Orden y criterios de validación

1. Registrar el estado inicial e identificar el backend principal y la configuración desplegada.
2. Extraer servicios y comprobar respuestas correctas, errores y resultados vacíos.
3. Migrar estilos por componente, comparando la apariencia en escritorio y móvil.
4. Reorganizar carpetas, imports y nombres preservando Git y los cambios existentes.
5. Ejecutar lint y build; comprobar las cuatro rutas, navegación directa, GitHub, portafolio y estados del formulario.
6. Actualizar este README para reflejar lo realmente implementado.

El envío real de correo y el despliegue a producción son pasos separados. La actualización de este documento no realiza la migración ni corrige los problemas de código identificados.
