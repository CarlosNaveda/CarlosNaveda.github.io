import titleType from '@/src/components/Title/titleType';


const Title = ({title}: {title: titleType}) =>{
   return (
        <div className="max-w-2xl lg:max-w-[600px] xl:max-w-[860px] 2xl:max-w-[1100px] w-full flex flex-col gap-1 font-outfit">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl" style={{color: 'var(--titles)'}}>
          {title.title}
          </h2>
          <h3 className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl italic" style={{color: 'var(--titles)'}}>
          {title.annotation}
          </h3>
        </div>
    );   
}

export default Title;