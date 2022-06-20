We got another pcap file so let's try analyzing it with wireshark
<br>Hmm.. Seems like it has some http and tcp packets
<img width="894" alt="image" src="https://user-images.githubusercontent.com/79892065/158387479-6bb248c7-df2c-4779-9c9d-15f1f30598f5.png">
<br>Following tcp stream 0 we can see it says "Not that easy anymore" lol
<br><img width="632" alt="image" src="https://user-images.githubusercontent.com/79892065/158387658-815e4379-1ae6-4008-b4ee-685c01db1c42.png"><br>
<br>Tcp stream 1 seems like it has some login page template
<br><img width="628" alt="image" src="https://user-images.githubusercontent.com/79892065/158387787-4e5dc396-886a-40e9-bc6f-43d4fa2c60ef.png"><br>
<br>Tcp stream 2 and 3 gives us the username and password for the login page (godam and ilovebinwalk)
<br><img width="640" alt="image" src="https://user-images.githubusercontent.com/79892065/158387911-4195958e-cf3d-4f8c-ad5c-0ded08b381da.png"><br>
<br>Tcp stream 4 is a flag.html page
<br><img width="634" alt="image" src="https://user-images.githubusercontent.com/79892065/158388146-cfe83b50-61a9-4085-ae9a-8b23c766276f.png"><br>
<br>And the rest is basically some gifs and images
<br>Let's try exporting those html and image files 
<br><img width="371" alt="image" src="https://user-images.githubusercontent.com/79892065/158388328-90ec3d4f-f31a-4d5d-a088-f57642e6bcea.png"><br>
<br>Contents inside the pcap file
<br><img width="741" alt="image" src="https://user-images.githubusercontent.com/79892065/158388532-edd271c2-d7ab-4238-968c-d49d8c56d8fb.png"><br>
<br> I tried to run binwalk on every image/gif and found one has a hidden zip file
<br><img width="951" alt="image" src="https://user-images.githubusercontent.com/79892065/158389029-fc5a6beb-17f9-4f98-8e4b-ea53fb1bfb24.png"><br>
<br>Changing it to .zip by using ``mv s3cr3t_fl4g.jpg s3cr3t_fl4g.zip`` 
<br>The password for the zip file is "ilovebinwalk" stated above 
<br>After extracting we got mystery_letter.jpg, opening it tells us we have to use steghide
<br><img width="267" alt="image" src="https://user-images.githubusercontent.com/79892065/158389355-fe1fd488-8c47-41b9-a58c-fa9f1a41f94e.png"><br>
<br>Under the "Notes:" we can see some weird text so i assume it's caeser cipher encoded
<br>Going to https://www.dcode.fr/caesar-cipher and deciphered a litle i got this
<br><img width="583" alt="image" src="https://user-images.githubusercontent.com/79892065/158389867-d175d68b-c1d2-450b-8580-0f79d3f677b8.png"><br>
<br>I knew it wasn't correct but at least i got the shifts so I head off to another website which is https://cryptii.com/pipes/caesar-cipher
<br>In there I succesfully managed to decipher it 
<br><img width="945" alt="image" src="https://user-images.githubusercontent.com/79892065/158390147-2605a44a-e237-40cd-88ed-53549f4881e6.png"><br>
<br>Password is H4ck3r5t3g, great!
<br>Since steghide needs a password to extract the information hidden in the image, why not we use this password to extract it
<br>So running the command ``steghide extract -sf mystery_letter.jpg``
<br>Entering the passphrase H4ck3r5t3g and got flag.jpg
<br><img width="395" alt="image" src="https://user-images.githubusercontent.com/79892065/158390837-622382d8-2e04-4752-939c-38e7041827e7.png"><br>
<br>I didn't knew this type of encoding so I head off using CyberChef https://gchq.github.io/CyberChef/ 
<br>Magic pen appears in CyberChef means it has probably solved it for me :>
<br><img width="475" alt="image" src="https://user-images.githubusercontent.com/79892065/158391341-1f6403b1-14e3-4126-bec3-aa10ec8256cc.png"><br>
<br>Clicking the magic pen it tells us it was using "A1Z26 Cipher Decode" and we got the flag!
<br>This was probably one of the best SKRCTF challenge!
