# Hola grupo 611 configuraremos SSH conexion.

## Pasos para configurar SSH

1. Instalar [git bash](https://git-scm.com/install/windows)

### Comando para listar la configuracion de git en local:

```
git config --list 
```

### Con el siguiente comando configuramos el correo en nuestro git local
```
git config --global user.email "pepito@correo.com"
```

### Con el siguiente comando configuramos el nombre en nuestro git local

```
git config --global user.email "Pepito Perez"
```

## Crear carpeta SSH en la ruta de usuario de session de tu sistema

```
mkdir .ssh
```

## Generar llave publica/privada SSH

```
ssh-keygen -t ed25519-sk -C "your_email@example.com"
````
Nota: reemplazar por tu correo de github.

Luego debes configurar llave en [github settings](https://github.com/settings/keys)

## Copiar llave publica y crear en github settings

```
clip < ~/.ssh/id_ed25519.pub
# Copies the contents of the id_ed25519.pub file to your clipboard
```
`
o

```
cat ~/.ssh/id_ed25519.pub | clip
# Copies the contents of the id_ed25519.pub file to your clipboard
```

## Probar conexion por ssh es exitosa:

```
ssh -T git@github.com
```

si todo salio correcto debes ver este mensaje en la terminal.

```
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```