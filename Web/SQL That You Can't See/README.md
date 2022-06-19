Hint: Whai is Blind SQL Injection?
<br>Hmm, looks like we are heading back to the ``My First SQL`` challenge to check back what's going on
<br><img width="577" alt="image" src="https://user-images.githubusercontent.com/79892065/158343061-934c084d-ba05-4a46-8c5d-8b6f5db229ec.png"><br>
<br>So let's try submitting some random values and check the source code
<br>This is the query we're getting ``SELECT email, password FROM users WHERE email = '1' and password = '1'-->``
<br>So let's make a payload that retrieves the password character by character
<br>``Payload that returns true: Email : godam@kuki.com' and 1=1-- ``
<br>``Payload that returns false: Email : godam@kuki.com' and 2=1-- ``
<br><br>So what does the payload below means is that you assume the first letter of the flag is "a" and the % represents zero, one, or multiple characters
<br>We can try something like ``godam@kuki.com' and password like 'a%'-- -->`` on the username and type random values like 1 on password
<br>So if "a" is not the first letter of the flag it will give the false statement
<br><img width="527" alt="image" src="https://user-images.githubusercontent.com/79892065/158351805-02c647db-8e29-4a50-9347-30d4c94f3a6f.png"><br>
<br>So since i know the flag i'll say the first letter of the flag is k (in small letters)
<br>The payload for verifying the first letter ``godam@kuki.com' and password like 'k%'-- -->``
<br>So what this payload does is that the first letter of the flag is k and the % represents zero, one, or multiple characters
<br>And since the statement is true it should give out the flag from the "My First SQL" flag but remember <b>THIS IS NOT THE REAL FLAG</b>
<br><img width="639" alt="image" src="https://user-images.githubusercontent.com/79892065/158352852-5769bf98-65cb-413a-b59c-ed7777cba369.png"><br>
<br>Remember the flag consists of 11 characters and it's all lower characters
<br>Ex. if you wanna brute force the second character of the flag
<br>``godam@kuki.com' and password like 'ka%'-- -->``
<br>``godam@kuki.com' and password like 'kb%'-- -->``
<br>``godam@kuki.com' and password like 'kc%'-- -->``
<br> and so on
<br>Tips: If you know some python knowledge why not try to use python to automate itself!
