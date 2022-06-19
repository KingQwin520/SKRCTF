The challenge title "Dot Dot Slash" looks something similar to directory traversal...
<br>What is directory traversal? https://portswigger.net/web-security/file-path-traversal<br>
<br><img width="931" alt="image" src="https://user-images.githubusercontent.com/79892065/174482944-0f2d26a0-8c05-4147-96aa-20d4810bdc6c.png"><br>
<br>Let's download the challenge file "dotdotslash.zip" and see what's inside
<br><img width="526" alt="image" src="https://user-images.githubusercontent.com/79892065/174483045-e38e83a6-68c0-42fe-83f7-5d0a11ba49d4.png"><br>
<br>The setup.sh tells us that the flag is stored inside flag.txt
<br><img width="230" alt="image" src="https://user-images.githubusercontent.com/79892065/174483075-c9d4af7b-4a86-4596-93db-ea19f7bde874.png"><br>
<br>Checking the main.py we also see this
<br><img width="276" alt="image" src="https://user-images.githubusercontent.com/79892065/174483121-526b41f7-2803-4ce7-a904-03ad61274aa8.png"><br>
<br>It seems that it just directly adds the path
<br>Here I assume that we can use directory traversal since there is no filter
<br>Going back to the website, we can enter some random letters after the url<br>
<br><img width="927" alt="image" src="https://user-images.githubusercontent.com/79892065/174482992-5b771d75-bbd0-4c70-952f-10cdbbe5752e.png"><br>
<br>Let's try to exploit the vulnerability now
<br>We can encode the payload ../../../ with %2E%2E%2F%2E%2E%2F%2E%2E%2F
<br>The whole url with the payload now should be http://skrctf.me:port/%2E%2E%2F%2E%2E%2F%2E%2E%2Fflag.txt
<br>Entering the url and we got out flag!
