 /*
 * Create a list that holds all of your cards
 */
var list=["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor","fa fa-bolt","fa fa-cube","fa fa-anchor","fa fa-leaf","fa fa-bicycle","fa fa-diamond","fa fa-bomb","fa fa-leaf","fa fa-bomb",
"fa fa-bolt",
"fa fa-bicycle",
"fa fa-paper-plane-o",
"fa fa-cube"];
var cardsShuffle=[];
var Display=[];
var cardsFlipped=0;
var cardsMoved=0;
var credits=0;
var hours=0;
var min=0;
var sec=0;
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
document.onload =startclock();
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(elements) 
{
    var currentIndex = elements.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = elements[currentIndex];
        elements[currentIndex] = elements[randomIndex];
        elements[randomIndex] = temporaryValue;
    }

    return elements;
}

    // here we take two classes deck and card and these have function activity which means by on clicking the car will open
 $('.deck ,.card').on('click','.card',function(activity)
{
    // conditional statements are used where we take only two matching cards so that length should be less than 2
 if($(this).attr('class')==='card' && Display.length<2)   
    {
        // here we want to push the card to display 
       if(Display.length===0)
       {
                // $(this).toggleClass('open');
                $(this).addClass('open  show card');
                Display.push($(this).children().attr('class'));

        }
        else if(Display.length===1) 
            // in this  if 
        {
            // $(this).toggleClass('open');
            $(this).addClass('open show card');
            Display.push($(this).children().attr('class'));
            if(Display[0]===Display[1])
            {
                $('.card').filter($('.open')).toggleClass('open match');

                cardsFlipped=cardsFlipped + 2;
                cardsMoved=cardsMoved+1;
                $('.moves').text(cardsMoved); 
                Display=[];// in display we take an empty array
                credits=credits+1;
                $('.score').text(credits);
                  min=0;
                $('mins').text(min);
                     sec=sec+0;
                $('secs').text(sec);  
            }
            else
            {
                // flip back function that
                function flipBack () 
                {
                    $('.card').filter($('.open')).attr('class',"card");
                    Display = [];
                    cardsMoved=cardsMoved+1;
                    $('.moves').text(cardsMoved);

                }
                setTimeout(flipBack, 600);
            }
        }
        if(credits===8)
            clearInterval(interval);
        
            // in this if it is equal to 8 then an alert will come
                {
                    alert("YOU WON THE GAME");
                }
// this conditions are  used for stars 
        if(cardsMoved==1)
        {
            sec=0;
            min=0;
            hours=0;
            startclock();
        }

        // here conditional statements are used .and if the moves are greater than 15 the starts will decrease
        if (cardsMoved > 16 && cardsMoved < 28) 
        {
            var star3 =$('.stars').find('li').eq(2);
            star3.css('color','red');
        }
        if (cardsMoved > 15) 
        {
            var star2 =$('.stars').find('li').eq(2);
            star2.css('color','red');
        }
        
        }
        });
       

        // this is used for setting clock
        var clock=document.querySelector(".clock");
        clock.innerHTML = "0 mins 0 secs";
        clearInterval(interval);
        var sec = 0, min = 0; hour = 0;
        var clock = document.querySelector(".clock");
        var interval;
        function startclock(){
        interval = setInterval(function(){
        clock.innerHTML = min+"mins" + sec+"secs";
        sec++;
        if(sec == 60){
            min++;
            sec=0;
        }
        if(min == 60){
            hours++;
            min = 0;
        }
         },1000);
        }
        if(cardsMoved == 1){
            startclock();
        }
// this functions are used for onclick it will restart the game and the cards will also shuffel

        $('.restart').on('click',function()
        {
        var cardsShuffle=shuffle(list);
        $(".card i").each(function(index){
        console.log(cardsShuffle[index]);
        console.log($(this).attr('class',cardsShuffle[index]));
        $(this).attr('class',cardsShuffle[index]);
        $('.deck li').attr("class","card");
        cardsMoved=0;
        $('.moves').text(cardsMoved);
        credits=0;
        $('.score').text(credits);
        min=0;
        $('mins').text(min);
        sec=0;
        $('secs').text(sec);

    })
});


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */