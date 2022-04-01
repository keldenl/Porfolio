---
layout: post
title: Kommunicate
cat: Side Project
role: Front-end Developer (Web App)
---

Kommunicate takes English words, translates it to Japanese and reads aloud the translated Japanese... IN MY VOICE!

<br>
**What? Why?**

Same. I thought about it one day and realized that due to the nature of the Japanese language, there must be only a certain amount of sounds in the language...right? I was *technically* right, and my sister-in-law helped me with my pronounciation. 

<br>
**An Issue....**

One of the biggest issues I've ran into this project is being able to deploy this project properly. (I worked on this project well over a year ago but have come back every now and then to try to solve the problem).

I'm still struggling getting it to work, *BUT* you can serve it on your own local machine *if you really want to*.

*Note: You need an API key to deploy it yourself, it's free and can be obtained [here (Google Cloud)](https://cloud.google.com/translate/).

<br>
**Demo**

<iframe width="560" height="315" src="https://www.youtube.com/embed/vl42R5v-UBc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br>
**Installation**

<a href="https://github.com/keldenl/Chrome-Dark-Mode" target="_blank" class="product" style="background-color: #666">Github</a>

I'm honored that you want to try out a translator with my name... I'll try to make this as simple as possible!

1. Install or clone this Git repository onto your local machine

2. `cd` into the directory that contains this repo

3. Run `npm install` in the directory

4. Create a new file called `config.js` and populated as following: 
    ```
    var config = {
        GOOGLE_API_KEY: YOUR_API_KEY_HERE
    }
    ```
    (You're going to have to have a [Google Cloud Translator API Key](https://cloud.google.com/translate/) for this)

5. Now run `npm run serve` and go on the server address it's served on after firing up a browser!

<br>
*Please leave your questions or feedback below! What do you think about Kommunicate?*

<br>
