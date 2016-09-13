Here in Mysql we created few tables;
	set the mysql Username and Password in backscript.js
	and create the table mentioned below:

		1. Create table firstname(fname varchar(20));
		2. create table lastname(lname varchar(20));
		3. create table first(fname varchar(20),lname varchar(20));
		4. create table last(fname varchar(20),lname varchar(20));
		5. create table global(fname varchar(20),lname varchar(20));
		6. create index findex ON first(fname);
		7. create index lindex ON last(lname);
		8. create index gindex ON global (fname, lname);


possible combination table:

			Insert into global(fname,lname) select fname , lname from first CROSS JOIN last;

for batch insert add value in this format(''),(''),(''),


When new values are inserted global table has to perform cross join with new values and insert into global,first and last table.