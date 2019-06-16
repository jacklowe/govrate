DELIMITER $$
CREATE TRIGGER after_gov_delete
	BEFORE DELETE ON users
    FOR EACH ROW
BEGIN
 DELETE FROM reviews
 WHERE userId = OLD.userId;
END$$

DELIMITER ;