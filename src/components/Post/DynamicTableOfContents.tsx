'use client';

import {
  useEffect,
  useState,
  MouseEvent,
} from 'react';

import { ArrowRight } from 'lucide-react';

interface Heading {  
  id: string;
  title: string;
}

export default function DynamicTableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');

  // detectar headings cuando el MDX ya exista
  useEffect(() => {
    const updateHeadings = () => {
      const content = document.querySelector('.mdx-content');

      if (!content) return;

      const elements = Array.from(
        content.querySelectorAll('h2')
      ) as HTMLElement[];

      const newHeadings = elements.map((el) => {
        const generatedId =
          el.id ||
          el.textContent
            ?.toLowerCase()
            .replace(/[^\w\s]/g, '')
            .replace(/\s+/g, '-')
            || '';

        el.id = generatedId;

        return {
          id: generatedId,
          title: el.textContent || '',
        };
      });

      setHeadings(newHeadings);
    };

    updateHeadings();

    const observer = new MutationObserver(() => {
      updateHeadings();
    });

    const content = document.querySelector(
      '.blog-slug-content'
    );

    if (content) {
      observer.observe(content, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  // Para detectar sección activa 
  useEffect(() => {
  
    if (headings.length === 0) return;

    const handleScroll = () => {
    const scrollPosition = window.scrollY + 120;

    let currentHeading = headings[0]?.id || '';

    headings.forEach((heading) => {
      const element = document.getElementById(
        heading.id
      );

      if (!element) return;

      if (element.offsetTop <= scrollPosition) {
        currentHeading = heading.id;
      }
    });

    setActiveId(currentHeading);
  };

  handleScroll();

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener(
      'scroll',
      handleScroll
      );
    }; 
  }, [headings]);

  const handleClick = (
    e: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    setActiveId(id);
  };

  if (headings.length === 0) return null;

  return (          
    <div className="index-content hidden lg:block self-start sticky top-20 md:p-5 text-sm w-[500px] shrink-0">
      <h2 className="index-content-title font-outfit">
        ÍNDICE DE CONTENIDOS
      </h2>

      <ul className="index-content-list font-dm-sans">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;

          return (
            <li
              key={heading.id}
              className={`index-content-text flex items-center justify-start gap-2 transition-all}`}
            >
              <ArrowRight
                size={isActive ? 20 : 16}
                className={`index-content-arrow
                  ${isActive
                    ? 'text-[#7E7ADE]'
                    : ''
                  }`}
              />

              <a
                href={`#${heading.id}`}
                onClick={(e) =>
                  handleClick(e, heading.id)
                }
                className={`transition-colors hover:text-[#ffffff] ${
                  isActive
                    ? 'text-[#7E7ADE]' 
                    : ''
                }`}
              >
                {heading.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}