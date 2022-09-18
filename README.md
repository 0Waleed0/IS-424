# Learning node.js and express with MySql
---
## Technology
- ### **Download and install  [Node.js](https://nodejs.org/en/download/)**.
- ### **Download and install [MySql](https://dev.mysql.com/downloads/windows/installer/8.0.html)**
-  #### Craete database called bookstore
-  #### Create table called book {id char(3), title varchar(45), year char(4), auther_name varchar(45)}
-  #### insert the following data 

```sql
INSERT INTO `bookstore`.`book` (`id`, `title`, `year`, `auther_name`) VALUES ('1', 'Neural Networks', '2005', 'Milan Hajek ');
INSERT INTO `bookstore`.`book` (`id`, `title`, `year`, `auther_name`) VALUES ('2', 'Introduction to Artificial Intelligence', '1989', 'Mike Sharples');
INSERT INTO `bookstore`.`book` (`id`, `title`, `year`, `auther_name`) VALUES ('3', 'Applied Artificial Neural Networks', '2016', 'Christian Dawson');
INSERT INTO `bookstore`.`book` (`id`, `title`, `year`, `auther_name`) VALUES ('4', 'Advances in Knowledge Representation', '2012', 'Carlos Ramírez Gutiérrez');
INSERT INTO `bookstore`.`book` (`id`, `title`, `year`, `auther_name`) VALUES ('5', 'Data Structures and Algorithms', '2017', 'Catherine Leung');
```

# Now Open the folder in VSCode , Open The Terminal And write the following : 

- **install express**

```
$ npm install express
```

- **pug (Html Template Engine)
which will alow us to make our pages dynamic**

```
$ npm install pug 
```

- **MySQL driver**

```
$ npm install mysql 
```

- **To run the project** 
```bash
$ npm start
```
---