# Instructions to run NestJS app

1. Download source code from factored_test_back

## In the command line run the following commands

2. docker-compose up --build (It takes some time)

Until this point you can run the app without any problem. The following instructions are to see the database tables and how the app's database is constructed in pgadmin
   
## In a separate command line run the following command
3. docker container ls
   
4. Copy and paste the container id from the postgres container (An example of the id is like the one in the image c7c3d9b122b6)
![image](https://github.com/jngm8/factored_test_back/assets/68575075/c8d79df7-9ee3-4654-99b3-91e344ff9b2e)

## Run the following command
5. docker inspect "id you just copied, in this case c7c3d9b122b6". The whole command will be docker inspect c7c3d9b122b6
   
6. copy and paste the IP address
   
   ![image](https://github.com/jngm8/factored_test_back/assets/68575075/e7bef311-98ae-4064-80d1-084c52b11ecf)

7. Go to docker desktop and enter to the pgadmin image
   
![image](https://github.com/jngm8/factored_test_back/assets/68575075/aafb0699-d650-4cb5-8364-3a13f99c440e)

8. In the login page, enter as username: admin@admin.com. As password: admin

9. Add a new server

![image](https://github.com/jngm8/factored_test_back/assets/68575075/7d5365df-5de5-41bd-ac7c-924f14c82c1a)

11. Enter the database name as postgres_db

![image](https://github.com/jngm8/factored_test_back/assets/68575075/58748cfa-5afc-4abd-b3af-050827d8ccc5)

12. Enter the IP address you got from the step 7

    ![image](https://github.com/jngm8/factored_test_back/assets/68575075/c17066e8-7199-4a4f-b241-1a44ae748ed5)

13. Enter the username: postgres and password: postgres and the click save

    ![image](https://github.com/jngm8/factored_test_back/assets/68575075/73f4164c-646f-4c13-bdf6-b4f8cd1638b6)

14. Click on servers, then postgres, databases, factored, schemas and finally table

    ![image](https://github.com/jngm8/factored_test_back/assets/68575075/c43582bc-1c0c-455a-a7fc-ab6b7fc8a2d4)

16. In tables click on user and in the upper part of the screen click on the table icon. Youll see the users table and test with any user you want

  ![image](https://github.com/jngm8/factored_test_back/assets/68575075/c33a18f5-985a-473c-af76-dd1513089bf3)

17. Repeat with skills to see the information



