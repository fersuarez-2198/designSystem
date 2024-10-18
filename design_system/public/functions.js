// Archivo script.js
function handleDownload() {
    // Definir el contenido CSS por defecto
    const contenidoCSS = `/* Estilos por defecto para tu app, acá le ponemos algo bien bonito :) */
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&display=swap");
:root {
  --principal-color: rgba(0, 255, 42, 0.514);
  --secondary-color: rgb(192, 80, 76);
  --third-color: rgb(146, 146, 0);
  --small-size: 15px;
}
body {
  font-family: "Noto Serif", serif;
}

.button {
  height: 46px;
  border-radius: 20px;
  color: var(--principal-color);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  /* Espacio entre el icono y el texto */
  font-family: "Noto Serif", serif;
}

.button:hover {
  filter: brightness(1.2);
}

.button-icon {
  font-size: 20px !important;
}

.button-variant1 {
  background: var(--secondary-color);
  font-size: var(--small-size);
}

.button-variant2 {
  background: var(--third-color)
}

.button-variant3 {
  background: linear-gradient(180deg, #008f8d 0%, rgba(0, 45, 98, 0.65) 100%);
}

.button-variant4 {
  background: linear-gradient(180deg, #015a58 0%, rgba(0, 45, 98, 0.65) 100%);
}

.button-variant5 {
  background: linear-gradient(180deg, #023535 0%, rgba(0, 45, 98, 0.65) 100%);
}

.button-variant6 {
  background: linear-gradient(180deg, #008f8d 0%, rgba(0, 45, 98, 0.65) 100%);
}

.button-variant7 {
  background: linear-gradient(180deg, #070f26 0%, #1a2c60 100%);
}

.button-variant8 {
  background: linear-gradient(180deg,
      #ff7569 0%,
      rgba(255, 117, 105, 0.85) 100%);
}
`;

    // Crear un objeto Blob con el contenido CSS
    const blob = new Blob([contenidoCSS], { type: 'text/css' });

    // Crear un enlace temporal para la descarga
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'nttdata-desing-system__styles.css';  // Nombre del archivo que se descargará

    // Añadir el enlace al DOM, hacer clic y luego removerlo
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
}
