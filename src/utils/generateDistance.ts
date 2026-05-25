function generateDistance(postIndex:number, tagIndex:number, isDesktop:boolean) :number {    
    const radius = 50 + (postIndex * 20) + (tagIndex * 10); // Radio diferente por tag
     //Para mobile tiene que ser más chico
    return isDesktop ? radius : radius/2;
}

export default generateDistance;