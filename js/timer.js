function timer()
{
    countDown = 3 ;
    timersIntervalID = setInterval(function(){
        if(countDown > 0)
        {
            console.log(countDown)
            countDown-- ;
        }else
        {
            console.log("Times up!");
            clearInterval(timersIntervalID) ;
        }
    },1000) ;
}
timer() ;       