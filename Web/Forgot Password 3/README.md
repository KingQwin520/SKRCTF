<img width="322" alt="image" src="https://user-images.githubusercontent.com/79892065/177121917-d347f607-4db3-4ffc-b35f-73884333d57d.png"><br>
<br>Info: Username=godam
<br>We are greeted with a login page in the beginning<br>
<br><img width="957" alt="image" src="https://user-images.githubusercontent.com/79892065/177120688-b0f0fba1-c890-434e-9454-2c8330b68945.png"><br>
<br>We can register a username first<br>
<br><img width="499" alt="image" src="https://user-images.githubusercontent.com/79892065/177121014-729cbdcd-eb54-447b-8c47-5524a8be0267.png"><br>
<br>Notice that it uses md5 hash to encrypt our password and it's not secure at all! (i mean u can see my password is 123456 XD)
<br>After registering, I quickly launched burp suite and started intercepting the request when logging in<br>
<br><img width="691" alt="image" src="https://user-images.githubusercontent.com/79892065/177121455-56790d33-be5a-4983-8b08-9ae38ba5f204.png"><br>
<br>I quickly noticed that it has session.php?id=[number] so I assume they have some idor vulnerabilities
<br>Let's skip that for now, after forwarding the requests we see this<br>
<br><img width="958" alt="image" src="https://user-images.githubusercontent.com/79892065/177121819-dea07b0a-33d6-4b0b-98df-15eb0e295924.png"><br>
<br>We see that it has a function that stores user's secret, so maybe the flag is stored in godam's secret?
<br>Going to the profile and checking the source code, we can see that it stores our md5 hash in it<br>
<br><img width="482" alt="image" src="https://user-images.githubusercontent.com/79892065/177122312-b28df2bd-e881-4deb-b354-f08714a691ef.png"><br>
<br>We can now try to exploit the website by using the idor vulnerability, and I quickly found out that the url is http:/skrctf.me/[port]session.php?id=5
<br><img width="945" alt="image" src="https://user-images.githubusercontent.com/79892065/177122675-d3f54644-5353-4b5f-89f5-47cee3b2f6d8.png"><br>
<br>Checking the profile source code, we get the md5 hash "8d1beddb87179b224441ce3a7a66c6a9"
<br>I tried to crack the hash (which was stupid) because I didn't notice that we can directly see the secret by just entering a wrong password and replace the hash with the url<br>
<br><img width="700" alt="image" src="https://user-images.githubusercontent.com/79892065/177123014-68fe5ef5-81f8-4be1-b49c-77d793702008.png"><br>
<br><img width="952" alt="image" src="https://user-images.githubusercontent.com/79892065/177123126-725d9bb2-b035-48f2-9af4-80e974e6d1f6.png"><br>
<br>Entering the url and we got our flag!
