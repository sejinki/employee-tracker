DROP DATABASE IF EXISTS EMPLOYEE_TRACKER;

CREATE DATABASE EMPLOYEE_TRACKER;
use EMPLOYEE_TRACKER;
CREATE TABLE DEPARTMENT(ID INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(30));

CREATE TABLE ROLES(ID INT PRIMARY KEY AUTO_INCREMENT,
TITLE VARCHAR(30), SALARAY DECIMAL(12,2), 
DEPARTMENT_ID INT REFERENCES DEPARTMENT(ID));

CREATE TABLE EMPLOYEE(ID INT PRIMARY KEY AUTO_INCREMENT,
FIRST_NAME VARCHAR(30), LAST_NAME VARCHAR(30),
ROLE_ID INT REFERENCES ROLES(ID),
MANAGER_ID INT REFERENCES EMPLOYEE(ID) ON DELETE SET NULL
);


