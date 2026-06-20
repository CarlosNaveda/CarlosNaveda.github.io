'use client';

import SwitchSound from '@/src/components/NavBar/SwitchSound';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TopBarBlogNav() {

    const router = useRouter();

    return (
        <div className="w-full px-4 sm:px-6 md:px-0 flex justify-center">
            <div className="top-bar-blog-nav w-full max-w-2xl lg:max-w-[600px] xl:max-w-[860px] 2xl:max-w-[1100px] flex flex-row items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2">
                <button
                    className="flex flex-row items-center gap-1 cursor-pointer text-[var(--paragraph)] hover:text-[var(--titles)] transition-colors"
                    onClick={() => { router.back(); }}>
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    <span className="text-sm sm:text-base md:text-lg font-dm-sans">Volver</span>
                </button>
                <SwitchSound />
            </div>
        </div>
    );
}
