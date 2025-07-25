
let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
let scoreHome = 0;
let scoreGuest = 0;


 function homeScore1(){
    scoreHome +=1
    homeScore.textContent = scoreHome ;    
    }
 
  function homeScoreMin1(){
    scoreHome -=1
    homeScore.textContent = scoreHome ;    
    }
 
  function homeScore2(){
    scoreHome +=2
    homeScore.textContent = scoreHome ;     
    }
    
  function homeScoreMin2(){
    scoreHome -=2
    homeScore.textContent = scoreHome ;    
    }
    
  function homeScore3(){
    scoreHome +=3
    homeScore.textContent = scoreHome  ; 
    }
    
  function homeScoreMin3(){
    scoreHome -=3
    homeScore.textContent = scoreHome ;    
    }
    
  function guestScore1(){
    scoreGuest +=1
    guestScore.textContent = scoreGuest ;    
    }
 
  function guestScoreMin1(){
    scoreGuest -=1
    guestScore.textContent = scoreGuest ;    
    }
 
  function guestScore2(){
    scoreGuest +=2
    guestScore.textContent = scoreGuest ;
      }
      
  function guestScoreMin2(){
    scoreGuest -=2
    guestScore.textContent = scoreGuest ;    
    }
    
  function guestScore3(){
    scoreGuest +=3
    guestScore.textContent = scoreGuest ;
       }
       
  function guestScoreMin3(){
    scoreGuest -=3
    guestScore.textContent = scoreGuest ;    
    }
    
  function newGame(){
    scoreHome = 0
    scoreGuest = 0
    homeScore.textContent = scoreHome;
    guestScore.textContent = scoreGuest;
    }



 
 
