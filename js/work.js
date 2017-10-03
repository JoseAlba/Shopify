function backgroundColor(){
    switch(Math.floor(Math.random() * 3)){
        //orange
        case 0: document.body.style.background ='#ffa500';
            break;
        //blue
        case 1: document.body.style.background = '#007788';
            break;
        ////hotpink
        //case 2: document.body.style.background = '#ff69b4';
        //    break;
        //// purple
        //case 3: document.body.style.background = '#4b0082';
        //    break;
        //grey
        case 2: document.body.style.background = '#808080';
            break;
        //chartreuse
        default: document.body.style.background = '#7fff00';
    }
}
