# Laboratorio 02 - Node.js y API REST

Este repositorio contiene los ejercicios desarrollados en el
**Laboratorio 02** del curso de *Desarrollo de Aplicaciones Web
Avanzadas*.

## Ejercicio 1 - Servidor básico con Node.js

-   Se creó un servidor HTTP con Node.js que responde a diferentes rutas
    (`/`, `/about`, `/students`).
-   Se usó **Handlebars** como motor de plantillas para renderizar
    páginas dinámicas.
-   Se mostró una lista de estudiantes con condicionales para resaltar
    notas mayores a 15.

## Ejercicio 2 - Listado dinámico con Handlebars

-   Se agregó una vista `students.hbs` que muestra estudiantes con sus
    notas en una tabla.
-   Se utilizó `{{#each}}` para recorrer la lista de estudiantes y
    condicionales `{{#if}}` para resaltar aprobados.

## Ejercicio 3 - API REST de estudiantes

-   Se implementó un repositorio en memoria con operaciones CRUD:
    -   `GET /students` → listar todos los estudiantes.
    -   `GET /students/:id` → obtener estudiante por ID.
    -   `POST /students` → crear nuevo estudiante.
    -   `PUT /students/:id` → actualizar estudiante.
    -   `DELETE /students/:id` → eliminar estudiante.
-   Se validó que al crear un estudiante no falten campos obligatorios
    (nombre, email, carrera, celular).
-   Se agregaron nuevos endpoints:
    -   `POST /ListByStatus` → listar estudiantes filtrados por estado.
    -   `POST /ListByGrade` → listar estudiantes filtrados por promedio.

## Requisitos

-   Node.js v22+
-   Dependencias: `handlebars`

Instalar dependencias:

``` bash
npm install
```

## Ejecución

Para correr el servidor del Ejercicio 3:

``` bash
node server.js
```

El servidor se ejecutará en:

    http://localhost:4000

## Pruebas

Las pruebas se realizaron en **Postman** verificando cada endpoint con
datos de ejemplo.

------------------------------------------------------------------------

### Autor

**Sonaly Vania Sifuentes Carranza**\
Tecsup - 2025
