var stars = [
    {
        image : "https://static.namava.ir/Content/Upload/Images/e10c2fa2-8131-4b2f-b35c-6348b0ebcc1c.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "آنا د آرماس",
        link : "https://www.namava.ir/person-13941-%D8%A2%D9%86%D8%A7_%D8%AF_%D8%A2%D8%B1%D9%85%D8%A7%D8%B3",
    },
    {
        image : "https://static.namava.ir/Content/Upload/Images/7d9eb816-674f-4c33-bb9c-a1aefd63ba07.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "کریس ایوانز",
        link : "https://www.namava.ir/person-588-%DA%A9%D8%B1%DB%8C%D8%B3_%D8%A7%DB%8C%D9%88%D8%A7%D9%86%D8%B2",
    },
    {
        image : "https://static.namava.ir/Content/Upload/Images/33ef2e87-ec14-43af-bb99-1ae2c2b7d6fb.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "کیت بلانشت",
        link : "https://www.namava.ir/person-990-%DA%A9%DB%8C%D8%AA_%D8%A8%D9%84%D8%A7%D9%86%D8%B4%D8%AA",
    },
    {
        image : "https://static.namava.ir/Content/Upload/Images/710f6070-1be1-4ff0-9856-cfc2070d4c2b.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "کالین فرل",
        link : "https://www.namava.ir/person-1278-%DA%A9%D8%A7%D9%84%DB%8C%D9%86_%D9%81%D8%B1%D9%84",
    },
    {
        image : "https://static.namava.ir/Content/Upload/Images/dc8f18d1-20bd-476e-b0da-715d5d9ebd3a.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "برندن فریزر",
        link : "https://www.namava.ir/person-1134-%D8%A8%D8%B1%D9%86%D8%AF%D9%86_%D9%81%D8%B1%DB%8C%D8%B2%D8%B1",
    },
    {
        image : "https://static.namava.ir/Content/Upload/Images/4fa33014-3fb2-4b8b-bb55-d77590fbb83c.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "میشل یئو",
        link : "https://www.namava.ir/person-10589-%D9%85%DB%8C%D8%B4%D9%84_%DB%8C%D8%A6%D9%88",
    },
    {
        image : "https://static.namava.ir/Content/Upload/Images/006e6d8d-a6c6-491d-95ed-17296835d93f.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "کی هوی کوان",
        link : "https://www.namava.ir/person-92089-%DA%A9%DB%8C_%D9%87%D9%88%DB%8C_%DA%A9%D9%88%D8%A7%D9%86",
    },
    {
        image : "https://static.namava.ir/Content/Upload/Images/7f833d9d-af32-4985-9202-c72642914a3b.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "جیمی لی کرتیس",
        link : "https://www.namava.ir/person-8539-%D8%AC%DB%8C%D9%85%DB%8C_%D9%84%DB%8C_%DA%A9%D8%B1%D8%AA%DB%8C%D8%B3",
    },
    {
        image : "https://static.namava.ir/Content/Upload/Images/f33e96e3-3966-411f-a003-101d08852971.jpg?anchor=middlecenter&crop=auto&scale=both&w=180&h=180",
        actorName : "تام سایزمور",
        link : "https://www.namava.ir/person-718-%D8%AA%D8%A7%D9%85_%D8%B3%D8%A7%DB%8C%D8%B2%D9%85%D9%88%D8%B1",
    },
]

// ----------Method-1-------------

var starsSeciton = "<div id=starsSection><div id=title><h3>ستارگان</h3></div>"
var listElement = "<ul>"
for(i = 0; i < stars.length; i++){
    listElement += "<li> <a id=starsLink href=" + stars[i].link +"> <img src= " + stars[i].image + "> <div class=actorName><h3>" + stars[i].actorName +"</h3></div> </a> </li>"
}
listElement += "</ul>"
starsSeciton += "<div id=stars> " + listElement + " </div></div>"
document.getElementById("container").innerHTML = starsSeciton

// ----------Method-2-------------

/* Get the container element */
var container2 = document.getElementById("container2")

/* Create a div for the stars section */
var starsSection2 = document.createElement("div")
starsSection2.id = "starsSection2";

/* Create a h3 for the title */
var h3Element = document.createElement("h3")
h3Element.innerHTML = "ستارگان"

/* Create a div for the title */
var title = document.createElement("div")
title.id = "title2";
title.appendChild(h3Element)

/* Create a div for the stars list */
var starsList = document.createElement("div")
starsList.id = "stars2";


var ulElement = document.createElement("ul")
for(i = 0; i < stars.length; i++){
    
    var imageElement = document.createElement("img")
    imageElement.src = stars[i].image;
    var h3Element2 = document.createElement("h3")
    h3Element2.innerHTML = stars[i].actorName;
    var actorName2 = document.createElement("div")
    actorName2.className = "actorName2"
    actorName2.appendChild(h3Element2)
    var aElement = document.createElement("a")
    aElement.href = stars[i].link;
    aElement.appendChild(imageElement)
    aElement.appendChild(actorName2)
    var liElement = document.createElement("li")
    liElement.appendChild(aElement)
    ulElement.appendChild(liElement)
}
starsList.appendChild(ulElement)
starsSection2.appendChild(title)
starsSection2.appendChild(starsList)
container2.appendChild(starsSection2)


