use EMPLOYEE_TRACKER;

insert into DEPARTMENT(name) values
('IT'),
('Marketing'),
('SALES');

insert into roles(title,salaray,DEPARTMENT_ID) values
('Manager',23422,1),
('Manager',43904, 2),
('Manager', 100000, 3);

insert into EMPLOYEE(first_name,LAST_NAME,role_id)values
('Andrew','Smith', 1),
('Andy', 'Thompson', 2),
('Connor', 'Smith', 3);