---
title: "Cómo convertir cursores de Windows (.ani) a Linux (Mint/Ubuntu/Debian)"
date: 2024-09-10
description: "Aprendiendo Astro desde cero para hacer un blog cyberpunk."
tags: ["wordpress", "migrated","legacy"]
lang: "es"
atUri: "at://did:plc:osxkkjbh7ownrbtkoo2lqlmf/site.standard.document/3mqu2a4evr72w"
---
<img id="bocchi-img-cursor" src="/img/bocchi_cursor.png" alt="Imagen de un cursor de Bocchi" />

Hoy he encontrado un cursor superchulo del personaje de Konata del anime Lucky Star (Que por cierto no he visto lo tengo pendiente…) y otros de bocchi the rock (Este si le he visto y me encanta) creados por xian_kuang (En la imagen no se ve animado pero te juro que se mueve haz clic en el link)

El problema es que el formato que he descargado era formato .ani, si estás en Windows creo que funciona perfectamente y no necesitas hacer nada más (no lo he probado tengo que probarlo en Windows) pero yo uso Linux Mint así que aquí te enseño cómo pasarlo a un formato para que Linux Mint lo pueda leer.

Para ello necesito usar Python:

El problema: El entorno gestionado (PEP 668)

En distros modernas, no puedes hacer pip install alegremente porque podrías romper cosas así que vamos a usar un entorno virtual temporal. O por lo menos es así en Linux mint (•᷄ᴗ•᷅ ᵕ)

Ve a la carpeta donde tienes tus archivos .ani y crea una «burbuja» aislada:

## 1. Crea el entorno
```bash
python3 -m venv venv_temp
```


## Actívalo
```bash
source venv_temp/bin/activate
```


## Instala el conversor (solo vivirá aquí dentro)
```bash
pip install win2xcur
```


Conversión masiva

No vamos uno a uno. Usamos el poder de la terminal para convertir todo el set de golpe y enviarlo a la carpeta cursors:

# El flag -o indica la carpeta de salida
```bash
win2xcur *.ani -o cursors/

```
Una vez terminada la conversión, salimos del entorno virtual
con deactivate y lo borramos:
```bash

deactivate
rm -rf venv_temp
```
# Creando Enlaces simbólicos (Symlinks)

Linux no reconoce nombres como Normal o Busy. Necesitamos crear enlaces simbólicos con los nombres que X11 o Wayland entienden. Entra en tu carpeta cursors y lanza estos comandos:
```bash
ln -s Normal left_ptr
ln -s Link hand2
ln -s Working left_ptr_watch
ln -s Busy watch
ln -s Text xterm
```
(Hay más nombres, pero estos son los básicos para que funcione).

# Crea el archivo index.theme

Para que el gestor de configuración de Linux Mint (o cualquier distro) lo detecte, crea un archivo llamado index.theme en la carpeta raíz de tu cursor:
```
[Icon Theme]
Name=Nombre de tu Cursor
```
¡Listo! 🚀

Ve a Configuración -> Ratón y Panel Táctil -> Puntero y ahí estará tu nuevo cursor.

Si ves que no se aplica o se aplica a medias como me ha pasado a mí, necesitas cerrar sesión y volver a entrar en el escritorio (En mi caso Cinnamon).

Saludos ＼(￣▽￣)／ Nekoprogram 🐾
