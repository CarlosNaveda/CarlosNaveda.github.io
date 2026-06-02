'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../../lib/supabase';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  postSlug: string;
}

function getOrCreateAnonymousId(): string {
  const key = 'anonymous_id';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export default function LikeButton({ postSlug }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchLikes = useCallback(async () => {
    
    const anonymousId = getOrCreateAnonymousId();

    const { count: totalCount } = await supabase
        .from('likes')
        .select('*', { count: 'exact', head: true })
        .eq('post_slug', postSlug);

        setCount(totalCount ?? 0);

        const { data } = await supabase
        .from('likes')
        .select('id')
        .eq('post_slug', postSlug)
        .eq('anonymous_id', anonymousId)
        .maybeSingle();

        setLiked(!!data);
        }, [postSlug]);

        useEffect(() => {
        const fetchData = async () => {
        await fetchLikes();
  };

    fetchData();
    }, [fetchLikes, postSlug]);

    async function handleLike() {
        if (loading) return;
        setLoading(true);

        const anonymousId = getOrCreateAnonymousId();

        if (liked) {
            // Quitar like
            await supabase
            .from('likes')
            .delete()
            .eq('post_slug', postSlug)
            .eq('anonymous_id', anonymousId);

            setLiked(prevLiked => !prevLiked); // Use a callback function to update state
            setCount(prevCount => prevCount - 1);
        } else {
            // Dar like
            const { data: existing } = await supabase
                .from('likes')
                .select('id')
                .eq('post_slug', postSlug)
                .eq('anonymous_id', anonymousId)
                .maybeSingle();

            // Verificar que no exista ya antes de insertar        
            if (!existing) {
                await supabase
                .from('likes')
                .insert({ post_slug: postSlug, anonymous_id: anonymousId });
            }

            setLiked(prevLiked => !prevLiked);
            setCount(prevCount => prevCount + 1);
            
        }
    }
  return (
    <button
      onClick={handleLike}
      disabled={loading}
      className={`pt-5 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${liked ? 'text-pink-500' : 'text-[var(--paragraph)]'} hover:text-pink-400`}>
      <Heart
        size={24}
        className={`transition-all duration-200 ${liked ? 'fill-pink-500' : ''}`}
      />
      <span className="font-dm-sans text-lg">{count}</span>
    </button>
  );
}