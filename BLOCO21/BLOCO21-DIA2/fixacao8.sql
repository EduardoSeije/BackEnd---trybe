SELECT first_name , last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;