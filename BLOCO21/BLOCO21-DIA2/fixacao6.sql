SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost
FROM sakila.film AS f1, sakila.film as f2
WHERE f1.replacement_cost = f2.replacement_cost;
