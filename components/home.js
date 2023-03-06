// ------------> function slider
    var currentImg=0
    let imgs=["0.png","1.png","2.png","3.png"];

    function next(){
        if(currentImg==imgs.length-1)
            currentImg=0;
        else
            currentImg++;

    }
    function prev(){
        if(currentImg==0)
            currentImg=imgs.length-1
        else
            currentImg--
    }
    let outPlaySilder=setInterval(function(){
        next();
        changSilder();
    },3000)
    function changSilder(){
    document.getElementById("slider").src=`./assets/${imgs[currentImg]}`;
    }


////////////////// ----------------------> news sectio 

var numOfPages=0
var conturyOptions=document.getElementById("contury");
var categOPtion=document.getElementById("categ");
var contury=conturyOptions.value;
var categ=categOPtion.value;
conturyOptions.addEventListener("change",function(){
    contury=conturyOptions.value;
    
})
categOPtion.addEventListener("change",function(){
    categ=categOPtion.value;
  
})

async function getNews(){
    let searchNow=document.getElementById("searchNow").value;
    document.querySelector(".news").innerHTML = "";
    console.log(contury);
    console.log(categ);

     let res=await fetch(`https://newsapi.org/v2/top-headlines?country=${contury}&q=${searchNow}&category=${categ}&pageSize=20&page=0&apiKey=56deb1a4e29b4ff3aba1a1ec3808797a`);
     let data=await res.json() 
     numOfPages=data.totalResults/20
     console.log(data.articles);
     displayNewsCard(data.articles);
     paginationWebSite(numOfPages);
 
}


document.getElementById("searchNow").addEventListener("input",getNews)
document.getElementById("searchButton").addEventListener("click",getNews)

getNews();

function paginationWebSite(numOFPages){
    var pages=document.getElementById("pagination")
    console.log(pages.lastElementChild)
    for(let i=0 ;i<=numOFPages;i++){
        var newLI=document.createElement("li");
        newLI.innerHTML=`<li class="page-item"><a class="page-link" id="page-${i}" href="#">${i+1}</a></li>`
        pages.insertBefore(newLI,pages.lastElementChild)
        newLI.addEventListener("click", async function(){
            console.log(i);
           let  res = await fetch(`https://newsapi.org/v2/top-headlines?country=${contury}&&category=${categ}&pageSize=20&page=${i+1}&apiKey=56deb1a4e29b4ff3aba1a1ec3808797a`)   //fetch(`https://newsapi.org/v2/top-headlines?country=${contury}&q=${searchNow}&category=${categ}&pageSize=20&page=${i+1}&apiKey=56deb1a4e29b4ff3aba1a1ec3808797a`);
           let  data = await res.json();
           console.log(data);
           displayNewsCard(data.articles);
        })
    }


}




var counter=0

function displayNewsCard(news) {
    let news_cards = "";
   // var news= [0,1,2,3,4,5,6,4,7,8,9]
    news.forEach(e => news_cards += getPetCard(e));
    document.querySelector(".news").innerHTML = news_cards;
    let arr =document.getElementsByClassName("iconButton");
    for(let i = 0 ;i<arr.length ; i++){
        arr[i].addEventListener("click",function(){
            counter++;
            document.getElementById("numOfCounter").innerHTML=counter;
            console.log(counter);
        })
    }
    let loveArr=document.getElementsByClassName("iconLove")
    for(let i = 0 ; i< loveArr.length ; i++){
        loveArr[i].addEventListener("click",function(){
        let isLove;
        })
    }
}

function getPetCard(news) {
    return `
  

<div class=" newsContainer col-lg-4 col-md-5 col-sm-10  ">
    <div class=" card newsItem my-3 mx-1"  >
    <img  src="${news.urlToImage??`./assets/0.png`}" class="newsItem-img  ">
    <div class="card-body py-1">
        <div style="newsItem-title">
            <p class="card-title text-justify py-2 fs-4  " >${news.title??"title"}</p>
        </div>
        <div class"newsItem-desc">
            <p class="text-justify newsItem-desc">${news.description??""}</p>
            <button class="iconButton"><i class="fa-regular fa-star star"></i></button>
            <button class="iconButton iconLove"><i class="fa-regular fa-heart love" id></i></button>

     
        </div > 
    </div>
    </div>
</div>
   
    `;
}


