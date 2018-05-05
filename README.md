# MasseyHacks-IV-Hackenger-Hunt

The source code for the legendary Hackenger Hunt at MasseyHacks IV

To start server: `node app.js`

Visit `localhost:3000` for Hackenger 1 or `localhost:3001` for Hackenger 2

## Solutions
Hackenger 1
1. World
2. 2
3. ecoo
4. champion fuel
5. 108841
6. 9003
7. the current time in 12hr or 24hr format (Ex 1:23)
8. Canda
9. Mario
10. CLEARCUT
<br><br>

Hackenger 2

0. jerrbear
1. 65922
2. 50
3. Yoshi (or anything with "yoshi")
4. the current unix time stamp
5. you had to access the 403 server on the masseyhacks.ca domain (for example go to masseyhacks.ca/css) and you'll see a page that says "*Error 403* Hey, you don't have access to that!" You notice that "ACCESS" was in all caps in question 5, so you click "ACCESS" on the 403 page to access the question. It asks "What did I say?" to which you respond "You shall not pass"
6. Although practicality beats purity
7. there are 2 apache helicopters, which represents the apache 2 server. so you have to find the router (it was in locker 1511) and connect to it using the password  1Jk2Zd62y8MFIOrpXL1cGto0gEwF6s5HXN66xfWcTgSnE7oChG.
8. After connecting to the router (which is a raspberry pi in a locker), you must perform a "[heart bleed exploit](https://xkcd.com/1354/)" to get to the next step. In this case, it was a Python socket server running on port 1511.
<br><br>
In the example data set (["Pineapple", 9]), the numerical value after the string corresponds to the length of the string. This determines the amount of data that is sent back. To solve, you must send a request with a very large "size". (["Pineapple",99999]) In return, the server sends a dump with gcode encoded in base64. The gcode can then be ran on a 3D printer which causes it to play a song (chasing cars).<br>

Hackenger website programmed by You Zhou<br>

Questions by [Henry Tu](https://github.com/henrytwo), [Ryan Zhang](https://github.com/ryanz34), [Aaron Li](https://github.com/AaronLi), Anita Hu, Hamza Sayed-Ali
