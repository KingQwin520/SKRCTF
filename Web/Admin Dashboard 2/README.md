We can try registering a username and password and logging into the website with the registered username and password
<img width="330" alt="image" src="https://user-images.githubusercontent.com/79892065/158313438-f39f835f-a6fa-4c5f-8c31-3c48f33493be.png"><br>
<br>It seems that there's an impersonate feature so why not we look into the source code?
<br><img width="372" alt="image" src="https://user-images.githubusercontent.com/79892065/158313988-2f1b53df-f785-4bf6-b410-d01ad781d0bc.png"><br>
<br>There's a php file named impersonate.php so let's go to the url ``https://skrctf.me:port/impersonate.php``
<br><img width="878" alt="image" src="https://user-images.githubusercontent.com/79892065/158314195-ddc70321-a6ef-4d1b-a3cf-99913b4d823a.png"><br>
<br>Seems like we can impersonate as admin!
<br>Going to the admin's notes we can see the flag
