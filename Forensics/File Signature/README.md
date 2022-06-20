In this challenge the file has no file signature so let's use a tool called "binwalk"
<br>Running ``binwalk file`` and you'll see it saying it's a jpeg and zip file
<br>So let's try renaming it to .jpg extension by using ``mv file file.jpg``
<br>It's mirrored so let's just use an online tool like https://www.resizepixel.com/mirror-image/ and we got the flag!
<br>Note: The zip file is for the "File Signature 2" challenge
