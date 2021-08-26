SELECT f1.title, f1.rental_duration, f2.title, f2.rental_duration
FROM sakila.film AS f1, sakila.film AS f2
WHERE f1.rental_duration = f2.rental_duration
HAVING f1.rental_duration BETWEEN 2 AND 4;

