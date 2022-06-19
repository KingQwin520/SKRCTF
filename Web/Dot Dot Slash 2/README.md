This is another challenge related to directory traversal
<br>Like the last challenge, download the challenge file and let's see what's inside
<br><br>The setup.sh still shows that the flag is stored in flag.txt
<br><img width="177" alt="image" src="https://user-images.githubusercontent.com/79892065/174483457-71c35e50-60d3-4744-8d9f-43244ee7576d.png"><br>
<br>Checking main.py, we see that there's something new
<br><img width="335" alt="image" src="https://user-images.githubusercontent.com/79892065/174483504-a7eea598-4907-48df-b347-b18196084a0f.png">
<br>It seems that the code has a filter that replaces ../ with nothing and joins it to the url
<br>Hm.. I was stuck for a while but I eventually found a post that solves the problem
<br>https://systemweakness.com/how-to-exploit-directory-traversal-vulnerabilities-176eeb7f2655
<br><img width="531" alt="image" src="https://user-images.githubusercontent.com/79892065/174483585-72437720-6997-40fb-bfc0-77e41f47d26a.png">
<br>We can use nested traversal sequences to bypass the filter, great!
<br>The payload with the url should be http://skrctf.me:port/....//....//....//flag.txt
<br>Entering the url and we got our flag!
