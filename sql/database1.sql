-- resolve promblem with mi connection
-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

-- CREATE DATABASE Ice_Cream_Ordering;

-- USE Ice_Cream_Ordering;

-- CREATE TABLE orden(
--     id_order INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     order_description TEXT,
--     price decimal(10, 2),
--     id_user INT(11) NOT NULL,
--     pay_method VARCHAR(20),
--     payed BOOLEAN,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE order_pack(
--     id_order_pack INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     creator INT(11) NOT NULL,
--     orders INT(11) NOT NULL,
--     expiration_date DATE,
--     CONSTRAINT fk_orders2 FOREIGN KEY (orders) REFERENCES orden (id_order),
--     CONSTRAINT fk_user FOREIGN KEY (creator) REFERENCES user (id_user)
-- );

-- CREATE TABLE user(
--     id_user INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     user_names VARCHAR(40) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     user_password VARCHAR(40) NOT NULL,
--     orders INT(11) NOT NULL,
--     order INT(11) NOT NULL,
--     CONSTRAINT fk_orders FOREIGN KEY (orders) REFERENCES order_pack (id_order_pack),
--     CONSTRAINT fk_order FOREIGN KEY (order) REFERENCES orden (id_order)
-- );

-- ALTER TABLE fk_orders2 FOREIGN KEY(orders) REFERENCES order(id_order);
-- ALTER TABLE fk_user FOREIGN KEY(creator) REFERENCES user(id_user);

-- ALTER TABLE fk_orders FOREIGN KEY(orders) REFERENCES order_pack(id_order_pack);
-- ALTER TABLE fk_order FOREIGN KEY(order) REFERENCES order(id_order);