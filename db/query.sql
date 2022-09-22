use EMPLOYEE_TRACKER;

select * from department;

select * from roles;


select * from employee;


select d.id,d.name,r.title,r.salaray,r.id 
from department d left join roles r on
d.id = r.DEPARTMENT_ID;

select e.id,e.first_name,e.last_name,r.id,r.title,r.salaray,d.id,d.name,
emp.FIRST_NAME as "Manager First name", emp.last_name as "Manager Last name"
from employee e left join roles r
on e.role_id = r.id left join department d
 on r.department_id = d.id left  join employee emp
 on  e.MANAGER_ID = emp.id;






