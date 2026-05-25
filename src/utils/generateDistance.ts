function generateDistance(postIndex:number, tagIndex:number) :string {
    const radius = 50 + (postIndex * 20) + (tagIndex * 10); // Radio diferente por tag
    if (typeof window !== 'undefined' && window.innerWidth <= 768) //Para mobile tiene que ser más chico
        return `${radius / 2}`;
        
    return `${radius}`;
}

export default generateDistance;