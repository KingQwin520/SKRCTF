Based on the title we know that it could be an image and it's corrupted
<br>We can use hexeditor to view and modify the hex of the image so the command would be ``hexeditor corruptedFile``<br>
<br>Seems like the header has been modified to .SKR
<br><img width="951" alt="image" src="https://user-images.githubusercontent.com/79892065/158362700-3229e236-e93a-4e61-95f1-1241a8fb514f.png">
<br>Let's try modifying it to .PNG<br>
<br>This is the file format for PNG files from wikipedia
<br><img width="828" alt="image" src="https://user-images.githubusercontent.com/79892065/158363077-762ccd59-23cb-486d-be01-f723ef795d40.png"><br>
<br>So we can modify the headers according to the image 
<br><img width="949" alt="image" src="https://user-images.githubusercontent.com/79892065/158363311-fef31cb2-54e8-49e8-86d4-00332b0207f2.png">
<br>Now CTRL-X to save the file
<br>Rename the file extension ``mv corruptedFile corruptedFile.png``
<br>Viewing the image would give us a poem and in the poem find out the captial letters and combine them together and you'll get the flag!
