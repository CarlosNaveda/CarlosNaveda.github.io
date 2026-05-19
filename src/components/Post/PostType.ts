interface PostType {
    index: number;
    imageSource: string;
    publishDate: Date;
    tag: string | string[];
    title: string;
    shortDescription: string; 
    tableOfContents: {index: number, title: string}[];
    content: string;  

}

export default PostType;


