function generateDelay(postIndex:number, tagIndex:number) :string {        
   const delay = (postIndex * 1.5) + (tagIndex * 0.5);
    return `${delay}s`;
}

export default generateDelay;