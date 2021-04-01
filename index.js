let dateModified, datePublished;

if(document.querySelector('script[type="application/ld+json"')){
    dateModified = JSON.parse(document.querySelector('script[type="application/ld+json"').innerHTML)['dateModified']
    datePublished = JSON.parse(document.querySelector('script[type="application/ld+json"').innerHTML)['datePublished']
}else if(document.querySelector('meta[itemprop="datePublished"]')){
    datePublished = document.querySelector('meta[itemprop="datePublished"]').content
}

if(datePublished || dateModified){
    console.log( datePublished )
    let dateDiff = (new Date() - new Date( datePublished ) ) / (1000*60*60*24)
    console.log(dateDiff)
}
