import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';


const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'tokyo-night',         
          
          onVisitLine(node: Record<string, unknown>) {
            if ((node.children as []).length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },        

          onVisitHighlightedLine(node: Record<string, unknown>) {
            const className = node.properties as Record<string, unknown>;
            if (!className.className) className.className = [];
            (className.className as string[]).push('highlighted');
          },
          
          onVisitHighlightedWord(node: Record<string, unknown>) {
            const className = node.properties as Record<string, unknown>;
            className.className = ['word-highlight'];
          },          

          filterMetaString: (string: string) => 
            string.replace(/filename="[^"]*"/, ''),        
        },
      ],      
    ],
  },
};

export default options;