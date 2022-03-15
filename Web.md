
## Web
### 1. Web warmup

Viewing the web source code gives the flag

### 2. Where is the flag?

<img width="314" alt="image" src="https://user-images.githubusercontent.com/79892065/158309126-04dd63ec-b316-418c-93cc-69dd4f85d629.png">

Viewing styles.css gives the flag

### 3. My First SQL

So the title gives us clue that it's relatable to sql injection
<img width="729" alt="image" src="https://user-images.githubusercontent.com/79892065/158309354-9833cdad-671c-4f39-a5c5-cdbea5cd82b8.png">
<br>In the login page we can try some sql injection on both username and password like ``' or 1=1--``

### 4. My First XSS

Same as the last challenge it's relatable to XSS (Cross-Site Scripting)

In the website we see an "Add Comment" section
<img width="797" alt="image" src="https://user-images.githubusercontent.com/79892065/158310595-1d164f6d-a485-483c-ac5d-33492e343400.png">
<br>Executing the XSS will result in a flag 

### 5. Forgot Password

We were given a login page so let's try viewing the source code
<br>There's a javascript file ``login.js``
<br>In thee we see the login username and password 
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79892065/158312853-c5b1c873-1c83-41c7-928a-88e73242cef9.png">
<br>Logging into the website with the given username and password will give the flag

## 6. Forgot Password 2

So like the last challenge we can view the login.js file
<br>Looks like it added md5 hashing algorithm but its basically still useless
<img width="953" alt="image" src="https://user-images.githubusercontent.com/79892065/158312740-23b6893a-c3c3-41a0-94a6-33f39fba599d.png">
<br>We can try to crack the hash by using online tools like https://crackstation.net
<br>Logging into the website with the given username and cracked hash will give the flag

## 7. Admin Dashboard 2

We can try registering a username and password and logging into the website with the registered username and password
<img width="330" alt="image" src="https://user-images.githubusercontent.com/79892065/158313438-f39f835f-a6fa-4c5f-8c31-3c48f33493be.png">
<br>It seems that there's an impersonate feature so why not we look into the source code?
<br><img width="372" alt="image" src="https://user-images.githubusercontent.com/79892065/158313988-2f1b53df-f785-4bf6-b410-d01ad781d0bc.png">
<br>There's a php file named impersonate.php so let's go to the url ``https://skrctf.me:port/impersonate.php``
<br><img width="878" alt="image" src="https://user-images.githubusercontent.com/79892065/158314195-ddc70321-a6ef-4d1b-a3cf-99913b4d823a.png">
<br>Seems like we can impersonate as admin!
<br>Going to the admin's notes we can see the flag
