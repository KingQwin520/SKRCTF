
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
