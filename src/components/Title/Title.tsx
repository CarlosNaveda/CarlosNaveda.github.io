import TitleType from './TitleType';


const Title = ({title}: {title: TitleType}) =>{
   return (
        <div className="max-w-2xl w-full flex flex-col gap-1">
          <h2 className="text-6xl" style={{color: 'var(--titles)'}}>
          {title.title}
          </h2>        
          <h3 className="text-xl italic" style={{color: 'var(--titles)'}}>
          {title.annotation}
          </h3>
        </div>
    );   
}

export default Title;