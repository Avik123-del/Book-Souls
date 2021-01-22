let count=0;
function move(){
    let x = document.getElementById("first-comment");
    let y = document.getElementById("second-comment");
    if(count%2==0){
        x.innerHTML='"The application is spot on. I recommend it to everyone who wants to maximize their "readingtime". You can\'t go wrong in subscribing to their service." <br><strong class="pl-5 m-5">- User3</strong>';
        y.innerHTML='"This is the killer app for your smartphone and your life. With a deep and growing library of instantly available books (both new and old), one is both enabled and empowered to engage with the best thing about being human, learning to be the best you that you can be. " <br><strong class="pl-5 m-5">- User4</strong>';
    }else{
        x.innerHTML='"This is the most beneficial knowledgable app ever" <br><strong class="pl-5 m-5">- User1</strong>';
        y.innerHTML='"I love it so much!" <br><strong class="pl-5 m-5">- User2</strong>';
    }
    count++;
}



