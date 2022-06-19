Hint: I heard PHP got two types of equal symbol: == and === but what's the difference?
Juggline clowm... hm
<br>The name seems like it has something to do with type juggling 
<br>What's type juggling?
<br>https://medium.com/swlh/php-type-juggling-vulnerabilities-3e28c4ed5c09
<br>Let's look into the wesite
<br><img width="316" alt="image" src="https://user-images.githubusercontent.com/79892065/158335998-ba03a882-938e-48a7-b326-10949fc56f25.png"><br>
<br>We can see that there's an input for user to type
<br>Viewing the page source code and viewing the ?source gives us some interesting information
<br><img width="523" alt="image" src="https://user-images.githubusercontent.com/79892065/158336327-eb96bbb0-3b90-4f0a-bff3-d6e653bc4359.png"><br>
<br>Since it's using == and it doesn't compare the data type, why not we try to compare it with an array?
<br>``/index.php?answer[]=hi`` gives us the flag
