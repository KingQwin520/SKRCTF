
## Web
### 1. Web warmup

<img width="710" alt="image" src="https://user-images.githubusercontent.com/79892065/158336979-5dca0a6f-1a92-4f15-ad90-40cb2a7b1a2e.png">
<br>Viewing the web source code gives the flag

### 2. Where is the flag?

<img width="868" alt="image" src="https://user-images.githubusercontent.com/79892065/158337113-9e7beecc-7de8-4eaf-9797-fb2b717d7b07.png">
<br>Since it's saying it's too bright, we can try to look into styles.css
<br>Viewing styles.css gives the flag

### 3. My First SQL

So the title gives us clue that it's relatable to sql injection
<img width="729" alt="image" src="https://user-images.githubusercontent.com/79892065/158309354-9833cdad-671c-4f39-a5c5-cdbea5cd82b8.png">
<br>In the login page we can try to perform SQL injection on both username and password like ``' or 1=1--``
<br>Performing sql injection gives us the flag
<br>Notes: if you want to view the query you can submit some random value and view page source
<br><img width="701" alt="image" src="https://user-images.githubusercontent.com/79892065/158337585-386fd419-81e1-4bf9-a9af-f3072e454afb.png">

### 4. My First XSS

Title gives us clue that it's relatable to XSS (Cross-Site Scripting)
<img width="578" alt="image" src="https://user-images.githubusercontent.com/79892065/158337799-923dee17-5983-48a9-8932-51052ca6a1b3.png">
<br>In the website we see an "Add Comment" section
<br><img width="797" alt="image" src="https://user-images.githubusercontent.com/79892065/158310595-1d164f6d-a485-483c-ac5d-33492e343400.png">
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

## 13. Juggling Clown
Hint: I heard PHP got two types of equal symbol: == and === but what's the difference?
Juggline clowm... hm
<br>The name seems like it has something to do with type juggling 
<br>What's type juggline?
<br>https://medium.com/swlh/php-type-juggling-vulnerabilities-3e28c4ed5c09
<br>Let's look into the wesite
<br><img width="316" alt="image" src="https://user-images.githubusercontent.com/79892065/158335998-ba03a882-938e-48a7-b326-10949fc56f25.png">
<br>We can see that there's an input for user to type
<br>Viewing the page source code and viewing the ?source gives us some interesting information
<br><img width="523" alt="image" src="https://user-images.githubusercontent.com/79892065/158336327-eb96bbb0-3b90-4f0a-bff3-d6e653bc4359.png">
<br>Since it's using == and it doesn't compare the data type, why not we try to compare it with an array?
<br>``/index.php?answer[]=hi`` gives us the flag

## 14. Admin Dashboard
Hint 1: I'm quite lazy when develop this website
<br>Hint 2: How request is redirected?
<br><img width="392" alt="image" src="https://user-images.githubusercontent.com/79892065/158338262-b90d64b8-0f7a-4370-9a06-e2a6aceb8116.png">
<br>Entering the website we can see there's a login page. I tried SQL injection but didn't work so I had to find another way
<br>Register is also disabled....
<br><img width="327" alt="image" src="https://user-images.githubusercontent.com/79892065/158338441-e00162d9-b5fa-4ca0-ada6-9e5bd178e6c5.png">
<br>Since the hint says how request is redirected why not we try to curl the index.php as its going to be the one that's redirecting it to login.php
<br><img width="527" alt="image" src="https://user-images.githubusercontent.com/79892065/158338874-d358848d-44cd-4296-b914-15f9913a60d9.png">
<br>Interesting..... looks like it's an admin page and has 2 php files (logs.php and S3cr3t_P4g3.php)
<br>Let's try to curl the logs.php
<br><img width="577" alt="image" src="https://user-images.githubusercontent.com/79892065/158339197-31c09c52-e9d7-4031-b018-ffdb1436e2bf.png">
<br>Looks like there's a server.log file that stores the server logs! Let's try to download it from the website
<br><img width="954" alt="image" src="https://user-images.githubusercontent.com/79892065/158339618-dcac186f-6333-4a74-a3dd-c8324b55d343.png">
<br>Nice! The username seems to be admin and password is U_W1ll_N3V3R_GU355_TH15_P%4055w0rD%21LOL, let's try decoding it a little more
<br>``U_W1ll_N3V3R_GU355_TH15_P@55w0rD!LOL``
<br>Let's try logging into the website with the provided username and credentials!
<br>After logging into the website as admin, let's try to go to  ``S3cr3t_P4g3.php``
<br><img width="946" alt="image" src="https://user-images.githubusercontent.com/79892065/158340251-03dbf566-f5c2-40a6-aed9-69f5db989b37.png">
<br>Hm... Entering the admin password that we got earlier gives us the flag!

## 15. Jake The Miner
<img width="822" alt="image" src="https://user-images.githubusercontent.com/79892065/158341394-c9323cdb-44a6-4170-828c-e04a65c22b5a.png">
<br>When clicking the submit score button it tells us we need to mine over 1M hashes... and basically thats impossible
<br><img width="326" alt="image" src="https://user-images.githubusercontent.com/79892065/158341482-713e7641-2c40-4e4f-9792-a32050f3ad3a.png">
<br>I was stuck on here for a moment until my friend helped me out
<br>He told me he modified the api request since it said it needed 1 million
<br>Until that i knew it was going to be xxe injection so i tried the following payload using a website https://reqbin.com/
<br><img width="788" alt="image" src="https://user-images.githubusercontent.com/79892065/158342507-47efa9af-6a62-4db7-9829-3b74734e9b73.png">
<br>And ye we got the flag!

## 16. SQL That You Can't See
Hint: Whai is Blind SQL Injection?
<br>Hmm, looks like we are heading back to the ``My First SQL`` challenge to check back what's going on
<br><img width="577" alt="image" src="https://user-images.githubusercontent.com/79892065/158343061-934c084d-ba05-4a46-8c5d-8b6f5db229ec.png">
<br>So let's try submitting some random values and check the source code
<br>This is the query we're getting ``SELECT email, password FROM users WHERE email = '1' and password = '1'-->``
<br>So let's make a payload that retrieves the password character by character
<br>``Payload that returns true: Email : godam@kuki.com' and 1=1-- ``
<br>``Payload that returns false: Email : godam@kuki.com' and 2=1-- ``
<br><br>So what this payload does is that you assume the first letter of the flag is a and the % represents zero, one, or multiple characters
<br>We can try something like ``godam@kuki.com' and password like 'a%'-- -->`` on the username and type random values like 1 on password
<br>So if a is not the first letter of the flag (aka false statement) it will give the false statement
<br><img width="527" alt="image" src="https://user-images.githubusercontent.com/79892065/158351805-02c647db-8e29-4a50-9347-30d4c94f3a6f.png">
<br>So since i know the flag i'll say the first letter of the flag is k (in small letters)
<br>The payload for verifying the first letter ``godam@kuki.com' and password like 'k%'-- -->``
<br>So what this payload does is that the first letter of the flag is k and the % represents zero, one, or multiple characters
<br>And since the statement is true it should give out the flag from the "My First SQL" flag but remember <b>THIS IS NOT THE REAL FLAG</b>
<br><img width="639" alt="image" src="https://user-images.githubusercontent.com/79892065/158352852-5769bf98-65cb-413a-b59c-ed7777cba369.png">
<br>Remember the flag consists of 11 characters and it's all lower characters
<br>If you want to keep repeating the process you can try like 
<br>Ex. if you wanna brute force the second character of the flag
<br>``godam@kuki.com' and password like 'ka%'-- -->``
<br>``godam@kuki.com' and password like 'kb%'-- -->``
<br>``godam@kuki.com' and password like 'kc%'-- -->``
<br> and so on
<br>Tip: If you know some python knowledge why not try to use python to automate itself!
