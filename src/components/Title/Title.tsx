import titleType from '@/src/components/Title/titleType';


const Title = ({title}: {title: titleType}) =>{
   return (
        <div className="max-w-2xl w-full flex flex-col gap-1 font-outfit">
          <h2 className="text-3xl md:text-6xl" style={{color: 'var(--titles)'}}>
          {title.title}
          </h2>        
          <h3 className="text-sm md:text-xl italic" style={{color: 'var(--titles)'}}>
          {title.annotation}
          </h3>
        </div>
    );   
}

export default Title;