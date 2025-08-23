import { useState, useEffect } from 'react';

interface UseVisibleAnchorOptions {
  threshold?: number; // Percentual da seção que precisa estar visível (0-1)
  rootMargin?: string; // Margem para o observer
}

export const useVisibleAnchor = (
  anchorIds: string[],
  options: UseVisibleAnchorOptions = {}
) => {
  const [visibleAnchor, setVisibleAnchor] = useState<string>('');
  const { threshold = 0.3, rootMargin = '-100px 0px -50% 0px' } = options;

  useEffect(() => {
    const elements = anchorIds
      .map(id => document.querySelector(id))
      .filter(Boolean) as Element[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Filtrar apenas elementos que estão visíveis
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => {
            // Ordenar por posição no viewport (mais próximo do topo primeiro)
            const aRect = a.boundingClientRect;
            const bRect = b.boundingClientRect;
            return Math.abs(aRect.top) - Math.abs(bRect.top);
          });

        if (visibleEntries.length > 0) {
          // Pegar o ID do elemento mais próximo do topo
          const topElement = visibleEntries[0];
          const anchorId = `#${topElement.target.id}`;
          setVisibleAnchor(anchorId);
        } else {
          // Se nenhum elemento está visível, manter o último estado ou limpar
          setVisibleAnchor('');
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observar todos os elementos
    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [anchorIds, threshold, rootMargin]);

  return visibleAnchor;
};