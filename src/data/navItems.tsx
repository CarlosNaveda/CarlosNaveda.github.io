    //Items de navegación
    import {HouseHeart, UserStar, BriefcaseBusiness, CirclePlay, NotebookPen} from 'lucide-react';
    
    const icon_size = 20;   

    const navItems = [
        { id: 'inicio', label: 'INICIO', icon: <HouseHeart size={icon_size} /> },
        { id: 'sobreMi', label: 'SOBRE MÍ', icon: <UserStar size={icon_size} /> },
        { id: 'experiencia', label: 'EXPERIENCIA', icon: <BriefcaseBusiness size={icon_size} /> },
        { id: 'tonextaxis', label: 'TONEXTAXIS', icon: <CirclePlay size={icon_size} /> },
        { id: 'blog', label: 'BLOG', icon: <NotebookPen size={icon_size} /> },
    ];
    
    export default navItems;