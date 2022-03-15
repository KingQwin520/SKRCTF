
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
<br>Rename the file extension ``mv corruptedFile corruptedFile.jpg
<br>Viewing the image would give us a poem and in the poem find out the captial letters and combine them together and you'll get the flag!
