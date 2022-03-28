
## Forensics
### 1. Forensics Warm Up 1
We can try to extract the flag.zip file first
<br>If you're on Windows just unzip it with 7zip or Winrar
<br>If you're on Linux do ``unzip flag.zip``
<br>For me, I'm using Linux
<br><img width="479" alt="image" src="https://user-images.githubusercontent.com/79892065/158356429-087904c5-a651-41ab-8486-a7cc31487ced.png">
<br>After extracting it it gives us another 7zip file so just extract it again 
<br>In Windows just use 7zip and on Linux use ``7z e flag.7z``
<br>And just view the flag.jpg to view the flag!

### 2. Forensics Warm Up 2
For this challenge we're gonna have to use a tool called ``exiftool`` 
<br>Running ``exiftool safety.jpeg`` and view the "Artist" category and you'll find the flag!
<br>In windows right click on the file and choose properties, go to the details tab and look for "Authors" and you'll find the flag as well

### 3. File Signature
In this challenge the file has no file signature so let's use a tool called "binwalk"
<br>Running ``binwalk file`` and you'll see it saying it's a jpeg and zip file
<br>So let's try renaming it to .jpg extension by using ``mv file file.jpg``
<br>It's mirrored so let's just use an online tool like https://www.resizepixel.com/mirror-image/ and we got the flag!
<br>Note: The zip file is for the "File Signature 2" challenge

### 4. Shark Of Wire
We got a .pcap file so let's use a tool called "Wireshark" to analyze it
<br><b>Wireshark is available in both Windows and Linux</b>
<br>There's many tcp packets inside huh
<br><img width="918" alt="image" src="https://user-images.githubusercontent.com/79892065/158358781-9a89a740-0228-40ac-b6fc-ea7a84e6c03b.png">
<br>We can randomly select a tcp packet and click follow tcp stream
<br><img width="810" alt="image" src="https://user-images.githubusercontent.com/79892065/158359024-de0d7a8e-e8a7-43b0-8572-a72c75661e38.png">
<br>We increase the tcp stream to 5 and we got the flag inside the content!
<br><img width="627" alt="image" src="https://user-images.githubusercontent.com/79892065/158359399-909d3080-ae42-46bf-920b-6ee271e2e44d.png">

### 5. File Signature 2
So we know that the "File Signature" challenge, there's a zip file so let's try unzipping it 
<br>The zip file is locked with a password so you can try using john the ripper to crack the password but I successfully cracked the password in just one try XD
<br>Basically since the flag format is SKR{} i thought that the password could be "skr" and I didn't thought it would actually work but it did lol
<br>Inside the zip file there's a secret_msg file just use the command ``cat secret_msg`` or open it in notepad and it'll give the flag!

### 6. Corrupted Image
Based on the title we know that it could be an image and it's corrupted
<br>We can use hexeditor to view and modify the hex of the image so the command would be ``hexeditor corruptedFile``
<br>Seems like the header has been modified to .SKR
<br><img width="951" alt="image" src="https://user-images.githubusercontent.com/79892065/158362700-3229e236-e93a-4e61-95f1-1241a8fb514f.png">
<br>Let's try modifying it to .PNG
<br>This is the file format for PNG files from wikipedia
<br><img width="828" alt="image" src="https://user-images.githubusercontent.com/79892065/158363077-762ccd59-23cb-486d-be01-f723ef795d40.png">
<br>So we can modify the headers according to the image 
<br><img width="949" alt="image" src="https://user-images.githubusercontent.com/79892065/158363311-fef31cb2-54e8-49e8-86d4-00332b0207f2.png">
<br>Now CTRL-X to save the file
<br>Rename the file extension ``mv corruptedFile corruptedFile.jpg``
<br>Viewing the image would give us a poem and in the poem find out the captial letters and combine them together and you'll get the flag!

### 7. Shark Of Wire 2
We got another pcap file so let's try analyzing it with wireshark
<br>Hmm.. Seems like it has some http and tcp packets
<img width="894" alt="image" src="https://user-images.githubusercontent.com/79892065/158387479-6bb248c7-df2c-4779-9c9d-15f1f30598f5.png">
<br>Following tcp stream 0 we can see it says "Not that easy anymore" lol
<br><img width="632" alt="image" src="https://user-images.githubusercontent.com/79892065/158387658-815e4379-1ae6-4008-b4ee-685c01db1c42.png">
<br>Tcp stream 1 seems like it has some login page template
<br><img width="628" alt="image" src="https://user-images.githubusercontent.com/79892065/158387787-4e5dc396-886a-40e9-bc6f-43d4fa2c60ef.png">
<br>Tcp stream 2 and 3 gives us the username and password for the login page (godam and ilovebinwalk)
<br><img width="640" alt="image" src="https://user-images.githubusercontent.com/79892065/158387911-4195958e-cf3d-4f8c-ad5c-0ded08b381da.png">
<br>Tcp stream 4 is a flag.html page
<br><img width="634" alt="image" src="https://user-images.githubusercontent.com/79892065/158388146-cfe83b50-61a9-4085-ae9a-8b23c766276f.png">
<br>And the rest is basically some gifs and images
<br>Let's try exporting those html and image files 
<br><img width="371" alt="image" src="https://user-images.githubusercontent.com/79892065/158388328-90ec3d4f-f31a-4d5d-a088-f57642e6bcea.png">
<br>Contents inside the pcap file
<br><img width="741" alt="image" src="https://user-images.githubusercontent.com/79892065/158388532-edd271c2-d7ab-4238-968c-d49d8c56d8fb.png">
<br> I tried to run binwalk on every image/gif and found one has a hidden zip file
<br><img width="951" alt="image" src="https://user-images.githubusercontent.com/79892065/158389029-fc5a6beb-17f9-4f98-8e4b-ea53fb1bfb24.png">
<br>Changing it to .zip by using ``mv s3cr3t_fl4g.jpg s3cr3t_fl4g.zip`` 
<br>The password for the zip file is "ilovebinwalk" stated above 
<br>After extracting we got mystery_letter.jpg, opening it tells us we have to use steghide
<br><img width="267" alt="image" src="https://user-images.githubusercontent.com/79892065/158389355-fe1fd488-8c47-41b9-a58c-fa9f1a41f94e.png">
<br>Under the "Notes:" we can see some weird text so i assume it's caeser cipher encoded
<br>Going to https://www.dcode.fr/caesar-cipher and deciphered a litle i got this
<br><img width="583" alt="image" src="https://user-images.githubusercontent.com/79892065/158389867-d175d68b-c1d2-450b-8580-0f79d3f677b8.png">
<br>I knew it wasn't correct but at least i got the shifts so I head off to another website which is https://cryptii.com/pipes/caesar-cipher
<br>In there I succesfully managed to decipher it 
<br><img width="945" alt="image" src="https://user-images.githubusercontent.com/79892065/158390147-2605a44a-e237-40cd-88ed-53549f4881e6.png">
<br>Password is H4ck3r5t3g, great!
<br>Since steghide needs a password to extract the information hidden in the image, why not we use this password to extract it
<br>So running the command ``steghide extract -sf mystery_letter.jpg``
<br>Entering the passphrase H4ck3r5t3g and got flag.jpg
<br><img width="395" alt="image" src="https://user-images.githubusercontent.com/79892065/158390837-622382d8-2e04-4752-939c-38e7041827e7.png">
<br>I didn't knew this type of encoding so I head off using CyberChef https://gchq.github.io/CyberChef/ 
<br>Magic pen appears in CyberChef means it has probably solved it for me :>
<br><img width="475" alt="image" src="https://user-images.githubusercontent.com/79892065/158391341-1f6403b1-14e3-4126-bec3-aa10ec8256cc.png">
<br>Clicking the magic pen it tells us it was using "A1Z26 Cipher Decode" and we got the flag!
<br>This was probably one of the best SKRCTF challenge!
