function generateDistance(postIndex:number, tagIndex:number) :string {
    const radius = 50 + (postIndex * 20) + (tagIndex * 10); // Radio diferente por tag
    return `${radius}`;
}

export default generateDistance;