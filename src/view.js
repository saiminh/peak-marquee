function initMarquee(){
  if ( document.querySelector('.peak-marquee') ){
    let marquees = document.querySelectorAll('.peak-marquee');
    
    marquees.forEach( (marquee) => {
      let marqueeTotalWidth = 0;
     
      marquee.querySelectorAll('.peak-marquee-headline').forEach( (marqueeItem) => {
        marqueeTotalWidth += marqueeItem.offsetWidth;
        let clone = marqueeItem.cloneNode(true);
        marquee.appendChild(clone);
      })
  
      marquee.style.setProperty('--marqueeTotalWidth', marqueeTotalWidth + 'px');
  
    });

    document.querySelectorAll('.peak-marquee-headline').forEach( (marqueeItem) => {
      marqueeItem.style.animation = "marquee " + document.querySelectorAll('.peak-marquee-headline').length * 2 + "s linear 0s infinite forwards";
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMarquee();
})
