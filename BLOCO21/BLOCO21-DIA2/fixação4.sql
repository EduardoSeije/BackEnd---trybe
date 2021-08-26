SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';