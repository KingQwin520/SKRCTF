This challenge is going to be related to SQL injections
<br>The website disables us for singing up so let's try viewing the "Log In" source code
<br>  We can see a "<!-- Add ?source to show the source! -->" in the source code
<br>Viewing the source in https://skrctf.me/ports/~/login.php?source
<br><img width="868" alt="image" src="https://user-images.githubusercontent.com/79892065/158320152-990b3713-a4d3-4791-9434-ae1fcac7ac26.png"><br>
<br>We can create a payload like ``' OR 'x'='x`` to bypass the filter
<br>Entering the payload into the login page will result in a flag
