"use strict";

// then((data)=>{
//   const dataActors = data.filter((d)=>d.firstName!=='' && d.profilePicture!==null);
//   dataActors.forEach();
// })

const socialMap = new Map();
socialMap.set("www.facebook.com", "fb-icon");
socialMap.set("twitter.com", "tw-icon");
socialMap.set("www.instagram.com", "in-icon");
socialMap.set("www.tiktok.com", "tt-icon");

const sources = [
  "https://www.facebook.com/DwayneJohnson",
  "https://www.instagram.com/therock/?hl=ru"
]

const links = sources.map((src)=>{
  const socialIcon = socialMap.get(new URL(src).host);
  return createElement('a', {classNames:['icon', socialIcon], attrs:{'href':src, 'target':'_blank'}});
})

document.getElementById('root').append(...links);