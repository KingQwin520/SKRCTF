Hint: What is CSRF? 
<br>Hint shows that we need to demonstrate a CSRF attack to the website
<br><img width="582" alt="image" src="https://user-images.githubusercontent.com/79892065/163944769-7cbeddcc-127b-48d0-aed6-88486e0063e6.png"><br>
<br>The website has a login page and a register page, let's register a normal user on this website first
<br><img width="940" alt="image" src="https://user-images.githubusercontent.com/79892065/163944851-57964248-1d1c-47c4-bfeb-cfc2432e1f2d.png"><br>
<br>XSS has been fixed but there's two hints 
* New add Admin user feauture(admin only)
* New report to admin feauture
<br>There's also a report feature so that the bot (admin) would check the website
<br>Checking the source code we see addadmin.php 
<br><img width="517" alt="image" src="https://user-images.githubusercontent.com/79892065/163945226-85b19446-aaf8-479e-bf7f-885f5be73d18.png"><br>
<br>Seems that we can't add admin since we have no permissions
<br><img width="569" alt="image" src="https://user-images.githubusercontent.com/79892065/163945428-b8135b7d-c1ac-415d-935a-47ed40c3fcc8.png"><br>
<br>So here's our plan
<br>First, we trick the admin to view a csrf file
<br>The csrf file would automatically send a post request to the addadmin.php
<br>Since the admin has privillages it will add a new admin and we can login into the new admin
<br>I created a csrf payload with the user and password being 'pwned" inside a html file 
<br>The next hint also says ``The admin session is in localhost, so your payload should perform request to the localhost domain``
<br>Change the url to localhost/addadmin.php and we're good to go
<br><img width="409" alt="image" src="https://user-images.githubusercontent.com/79892065/163948720-3ef998eb-6a21-4f4d-9cd5-9cae3ca1c29b.png"><br>
<br>Now we can just create a temporary web server in port 80 and store the csrf file in /var/www/html
<br><img width="572" alt="image" src="https://user-images.githubusercontent.com/79892065/163947520-849ba1af-2c19-4a44-b454-094df133d69f.png"><br>
<br>I port forwarded my virtual machine ip address and went to the report section 
<br><img width="911" alt="image" src="https://user-images.githubusercontent.com/79892065/163947950-b8bc5da6-fedd-4c51-8b64-9e55c00b5610.png"><br>
<br>Entering my public ip and hit "Report"
<br><img width="688" alt="image" src="https://user-images.githubusercontent.com/79892065/163948118-1a153432-ba5a-4a6b-b558-3175a9af2e4b.png"><br>
<br>What we see here is that the bot has viewed the csrf file and added the new admin "pwned"
<br>Now logging in with the username and password as pwned and the flag appears to be in the "Notes" section!
<br><img width="898" alt="image" src="https://user-images.githubusercontent.com/79892065/163948520-4e8c1452-507a-4e19-bfa6-8914ac69e4e1.png"><br>
