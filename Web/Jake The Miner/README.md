<img width="822" alt="image" src="https://user-images.githubusercontent.com/79892065/158341394-c9323cdb-44a6-4170-828c-e04a65c22b5a.png"><br>
<br>When clicking the submit score button it tells us we need to mine over 1M hashes... and basically thats impossible
<br><img width="326" alt="image" src="https://user-images.githubusercontent.com/79892065/158341482-713e7641-2c40-4e4f-9792-a32050f3ad3a.png"><br>
<br>I was stuck on here for a moment until my friend helped me out
<br>He told me he modified the api request since it said it needed 1 million
<br>Until that i knew it was going to be xxe injection so I'm need a payload
<br>I also noticed that when I clicked submit score it gives a post request payload
<br><img width="957" alt="image" src="https://user-images.githubusercontent.com/79892065/177120176-8c8b35c2-9b9c-442c-80ee-f910ca208abf.png"><br>
<br>The request payload is <score>, so let's manipulate it!
<br>Using a website https://reqbin.com/, I created the payload to manipulate the request 
<br><img width="788" alt="image" src="https://user-images.githubusercontent.com/79892065/158342507-47efa9af-6a62-4db7-9829-3b74734e9b73.png"><br>
<br>And we got the flag!
