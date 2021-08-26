SELECT s.first_name, s.last_name, a.address_id
FROM sakila.staff AS s
INNER JOIN address AS a;