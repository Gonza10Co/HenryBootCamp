.mode column
.header on

.tables

.SCHEMA actors

--1. Buscá todas las películas filmadas en el año que naciste.
SELECT *
from movies
WHERE year = 1976;

--2. Cuantas películas hay en la DB que sean del año 1982?
-- SELECT count(*)
SELECT count(*) as TOTAL
from movies
WHERE year = 1982;

--3. Buscá actores que tengan el substring stack en su apellido.
SELECT *
FROM  actors
WHERE last_name LIKE '%stack%';

--4. Buscá los 10 nombres y apellidos más populares entre los actores. Cuantos actores tienen cada uno de esos nombres y apellidos?
SELECT first_name, last_name, COUNT(*) as total
FROM actors
GROUP BY first_name, last_name
ORDER BY total DESC
LIMIT 10;

--Para pasar todo a minuscula antes de agrupar:
SELECT first_name, last_name, COUNT(*) as total
FROM actors
GROUP BY lower(first_name), lower(last_name)
ORDER BY total DESC
LIMIT 10;

--5. Listá el top 100 de actores más activos junto con el número de roles que haya realizado.
SELECT a.first_name, a.last_name, COUNT(*) as total_roles
FROM actors as a
JOIN roles as r ON a.id = r.actor_id
GROUP BY a.id
ORDER BY total_roles DESC
LIMIT 100;

--6. Cuantas películas tiene IMDB por género? Ordená la lista por el género menos popular.
SELECT genre, COUNT(*) as total
FROM movies_genres
GROUP BY genre
ORDER BY total;

--7. Listá el nombre y apellido de todos los actores que trabajaron en la película "Braveheart" de 1995, ordená la lista alfabéticamente por apellido.
--Para saber q tablas necesito .tables -> necesito actores, movies. No tengo tengo forma de relacionar movies con actors, es una relacion de muchos a muchos, por lo que debe haber una tabla intermedia para relacionar estas otras 2 tablas. Esta tabla es Roles.       actors ---- roles ---- movies 
SELECT a.first_name, a.last_name
FROM actors as a
JOIN roles as r ON a.id = r.actor_id
JOIN movies as m on r.movie_id = m.id
WHERE m.name = 'Braveheart' AND m.year = 1995
ORDER BY a.last_name;

--8. Listá todos los directores que dirigieron una película de género 'Film-Noir' en un año bisiesto (para reducir la complejidad, asumí que cualquier año divisible por cuatro es bisiesto). Tu consulta debería devolver el nombre del director, el nombre de la peli y el año. Todo ordenado por el nombre de la película.

-- tablas q necesito -> directors, movies_genres, movies. Como los conecto?
-- directors ----> movies_directors ----> movies ----> movie_id ----> movies_genres
SELECT d.first_name, d.last_name, m.name, m.year
FROM directors as d
JOIN movies_directors as md ON d.id = md.director_id
JOIN movies as m ON md.movie_id = m.id
JOIN movies_genres as mg ON m.id = mg.movie_id
WHERE mg.genre = 'Film-Noir' AND m.year % 4 = 0
ORDER BY m.name;

-- 9. Listá todos los actores que hayan trabajado con Kevin Bacon en películas de Drama (incluí el título de la peli). Excluí al señor Bacon de los resultados.
-- tablas que necesito -> actors ----> movies ----> movie.id ----> movies_genres
--Tengo que hacer una subquery, tengo que traer primero todas las pelis en las q trabajo Kevin Bacon.
-- actors ---- roles ---- movies 
SELECT m.id
FROM movies as m
JOIN roles as r ON m.id = r.movie_id
JOIN actors as a ON r.actor_id = a.id
WHERE a.first_name = 'Kevin' AND a.last_name = 'Bacon';

SELECT DISTINCT a.first_name, a.last_name --DISTINCT ES PARA ELIMINAR LOS REPETIDOS
FROM actors as a
JOIN roles as r ON a.id = r.actor_id
JOIN movies as m on r.movie_id = m.id
JOIN movies_genres as mg ON m.id = mg.movie_id
WHERE mg.genre = 'Drama' AND m.id IN (
  SELECT m.id
FROM movies as m
JOIN roles as r ON m.id = r.movie_id
JOIN actors as a ON r.actor_id = a.id
WHERE a.first_name = 'Kevin' AND a.last_name = 'Bacon'
) AND (a.first_name || ' ' || a.last_name != 'Kevin Bacon')
ORDER BY a.last_name;

--10. Qué actores actuaron en una película antes de 1900 y también en una película después del 2000?

-- primera parte, actores en peliculas de antes de 1900
SELECT r.actor_id
FROM roles as r
JOIN movies as m ON r.movie_id = m.id
WHERE m.year < 1900;

-- segund parte, actores en peliculas despues de 2000
SELECT r.actor_id
FROM roles as r
JOIN movies as m ON r.movie_id = m.id
WHERE m.year > 2000;

-- Unimos todo
SELECT *
FROM actors
WHERE id in (
  SELECT r.actor_id
  FROM roles as r
  JOIN movies as m ON r.movie_id = m.id
  WHERE m.year < 1900
  ) AND id in (
  SELECT r.actor_id
  FROM roles as r
  JOIN movies as m ON r.movie_id = m.id
  WHERE m.year > 2000
  );

-- 11. Buscá actores que actuaron en cinco o más roles en la misma película después del año 1990. Noten que los ROLES pueden tener duplicados ocasionales, sobre los cuales no estamos interesados: queremos actores que hayan tenido cinco o más roles DISTINTOS (DISTINCT cough cough) en la misma película. Escribí un query que retorne los nombres del actor, el título de la película y el número de roles (siempre debería ser > 5).

--Necesito ----> actors ----> roles ----> movie

SELECT a.first_name, a.last_name, m.name, COUNT (DISTINCT role) as total_roles
FROM actors as a
JOIN roles as r ON a.id = r.actor_id
JOIN movies as m ON r.movie_id = m.id
WHERE m.year > 1900
GROUP BY a.id, m.id
HAVING total_roles > 5;

-- 12. Para cada año, contá el número de películas en ese años que sólo tuvieron actrices femeninas.

-- Hay que hacerlo a la inversa, es mejor buscar si tuvo un actor masculino, no la considere.

-- actors -- roles

-- Quiero ID de peliculas con al menos un hombre
SELECT r.movie_id
FROM roles as r
JOIN actors as a ON r.actor_id = a.id
WHERE a.gender = 'M';

-- Ahora quiero traerme el ano donde las peliculas no esten las anteriores
SELECT year, COUNT(id) as total 
FROM movies 
WHERE id NOT IN (
  SELECT r.movie_id
  FROM roles as r
  JOIN actors as a ON r.actor_id = a.id
  WHERE a.gender = 'M'
)
GROUP BY year
ORDER BY year DESC;
