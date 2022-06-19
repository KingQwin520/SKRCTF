Hint 1: I'm quite lazy when develop this website
<br>Hint 2: How request is redirected?
<br><img width="392" alt="image" src="https://user-images.githubusercontent.com/79892065/158338262-b90d64b8-0f7a-4370-9a06-e2a6aceb8116.png"><br>
<br>Entering the website we can see there's a login page. I tried SQL injection but didn't work so I had to find another way
<br>Register is also disabled....
<br><img width="327" alt="image" src="https://user-images.githubusercontent.com/79892065/158338441-e00162d9-b5fa-4ca0-ada6-9e5bd178e6c5.png"><br>
<br>Since the hint says how request is redirected why not we try to curl the index.php as its going to be the one that's redirecting it to login.php
<br><img width="527" alt="image" src="https://user-images.githubusercontent.com/79892065/158338874-d358848d-44cd-4296-b914-15f9913a60d9.png"><br>
<br>Interesting..... looks like it's an admin page and has 2 php files (logs.php and S3cr3t_P4g3.php)
<br>Let's try to curl the logs.php
<br><img width="577" alt="image" src="https://user-images.githubusercontent.com/79892065/158339197-31c09c52-e9d7-4031-b018-ffdb1436e2bf.png"><br>
<br>Looks like there's a server.log file that stores the server logs! Let's try to download it from the website
<br><img width="954" alt="image" src="https://user-images.githubusercontent.com/79892065/158339618-dcac186f-6333-4a74-a3dd-c8324b55d343.png"><br>
<br>Nice! The username seems to be admin and password is U_W1ll_N3V3R_GU355_TH15_P%4055w0rD%21LOL, let's try decoding it a little more
<br>``U_W1ll_N3V3R_GU355_TH15_P@55w0rD!LOL``
<br>Let's try logging into the website with the provided username and credentials!
<br>After logging into the website as admin, let's try to go to  ``S3cr3t_P4g3.php``
<br><img width="946" alt="image" src="https://user-images.githubusercontent.com/79892065/158340251-03dbf566-f5c2-40a6-aed9-69f5db989b37.png"><br>
<br>Hm... Entering the admin password that we got earlier gives us the flag!
