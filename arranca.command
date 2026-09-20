#!/bin/bash
# Mesa — doble clic en este archivo y la mesa arranca.
# Vive en la carpeta del proyecto: al hacer doble clic, macOS lo abre en Terminal
# con el directorio equivocado, así que lo primero es ponerse en el suyo.
cd "$(dirname "$0")" || exit 1

printf '\n  Mesa — preparando la mesa...\n\n'

if ! command -v node > /dev/null 2>&1; then
  cat <<'AYUDA'
  Falta Node. Es lo único que hace falta instalar, una sola vez:

    1. Abre  https://nodejs.org/es/download
    2. Baja el instalador para macOS (el botón grande, versión LTS)
    3. Ábrelo y dale a Continuar hasta el final
    4. CIERRA esta ventana y vuelve a hacer doble clic en arranca.command

AYUDA
  read -r -p '  Enter para cerrar. '
  exit 1
fi

if [ ! -d node_modules ]; then
  printf '  Primera vez: bajando lo que falta (30 s)...\n\n'
  npm install --no-audit --no-fund || {
    printf '\n  No pude bajar las dependencias. ¿Hay internet?\n'
    read -r -p '  Enter para cerrar. '; exit 1; }
fi

printf '  Listo. La mesa abre sola en el navegador.\n'
printf '  Para apagarla: cierra esta ventana.\n\n'

# abrir el navegador cuando el servidor ya esté escuchando
( for _ in $(seq 1 40); do
    if curl -s -o /dev/null http://localhost:3000/ ; then open http://localhost:3000/; break; fi
    sleep .25
  done ) &

exec npm start
