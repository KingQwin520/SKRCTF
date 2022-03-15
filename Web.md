
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

## 8. Secret Url

<img width="798" alt="image" src="https://user-images.githubusercontent.com/79892065/158314544-2a0c7b54-6e17-4473-8dbd-4028f413691d.png">
<br>Nothing in the source code....
<br>But according to the content saying "Only Mr. Robots knows where's the flag..." 
<br>We can know there's something related to robots
<br>I remember there is a txt file in websites known as robots.txt
<br><b>A robots.txt file tells search engine crawlers which URLs the crawler can access on your site. This is used mainly to avoid overloading your site with requests</b>
<br>Going to robots.txt we see something disallowed
<br><img width="478" alt="image" src="https://user-images.githubusercontent.com/79892065/158315364-e2838fbe-5e2f-4d7f-b500-8f82198000db.png">
We can access to that specific url and we got the flag!

## 9. Slot Machine

The website shows a program that works like a slot machine.
<br>Viewing the source code there's a javascript file ``slotEngine.js``
<br><img width="587" alt="image" src="https://user-images.githubusercontent.com/79892065/158318646-0cce58a6-b556-4d5e-b309-a8b1f931c62b.png">
<br>Seems like we can try modifying the price to popup the flag
<br>In the console we can try setting the price value to 1000000000 and just copy paste the above image into the console
<br><img width="436" alt="image" src="https://user-images.githubusercontent.com/79892065/158318929-038e52bb-7061-4658-9e40-53f3fbc66d98.png">
<br>Woohoo! We got the flag!

## 10. Kuki Cookies
This challenge is relatable to cookies so let's check out the cookies!
<br>I'm using Cookie Editor extension to check the cookies
<br><img width="369" alt="image" src="https://user-images.githubusercontent.com/79892065/158319173-1a0e5e9c-742a-4d68-b05d-04940fd157a1.png">
<br>Opening the flag cookie we can view the flag
<br>The flag is going to be url encoded so use online tools like https://www.urldecoder.org/

## 11. Kuki Cookies 2
This challenge is also relatable to cookies
<br><img width="365" alt="image" src="https://user-images.githubusercontent.com/79892065/158319543-0ce6b9ba-c1df-47a9-a444-b526cf054255.png">
<br>Checking the cookies we can see an admin cookie
<br>Changing it to true and save the cookie
<br>Pressing the "Get Flag" button will result in a flag

## 12. SQL Service
This challenge is going to be relatable to SQL injections
<br>The website disables us for singing up so let's try viewing the "Log In" source code
<br>  We can see a "<!-- Add ?source to show the source! -->" in the source code
<br>Viewing the source in https://skrctf.me/ports/~/login.php?source
<br><img width="868" alt="image" src="https://user-images.githubusercontent.com/79892065/158320152-990b3713-a4d3-4791-9434-ae1fcac7ac26.png">
<br>We can create a payload like ``' OR 'x'='x`` to bypass the filter
<br>Entering the payload into the login page will result in a flag
