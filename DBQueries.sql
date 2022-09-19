USE data_house;
SELECT * FROM usertable;
SELECT * FROM contact;
SELECT * FROM region;
SELECT * FROM country;
SELECT * FROM city;
SELECT * FROM company;
SELECT * FROM userTableHasContact;

DELETE FROM `userTableHasContact` WHERE `contactId` = '8';

SELECT t1.username, t2.name FROM contact as t1 INNER JOIN company as t2 ON t1.companyId = t2.id;
SELECT t2.* FROM usertable as t1 INNER JOIN contact as t2 ON t1.id = t2.id;
SELECT t1.username, t1.interest, t2.name, t3.regionName FROM contact as t1 INNER JOIN company as t2 ON t1.companyId = t2.id INNER JOIN region as t3 ON t1.regionId = t3.id;

SELECT t1.*, t2.cityName, t2.countryId, t3.countryName, t3.regionId, t4.regionName FROM contact as t1 INNER JOIN city as t2 ON t1.cityId = t2.id INNER JOIN country as t3 ON t2.countryId = t3.id INNER JOIN region as t4 ON t3.regionId = t4.id;