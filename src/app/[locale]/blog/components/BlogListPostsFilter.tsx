'use client'


import { Search } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl";
import { useDebouncedCallback } from 'use-debounce';

import { Button } from "@/components/ui/button"

interface IBlocgListPostFilterParams {
  categories: string[]
}

export function BlogListPostsFilter({ categories }: IBlocgListPostFilterParams) {
  const t = useTranslations('blog.blogListPostsFilter')
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();


  function handleCategoryChange(value: string) {
    const params = new URLSearchParams(searchParams)
    params.delete('nextCursor');
    if (value === t('categories.all')) {
      params.set('category', t('categories.all'))
    } else {
      params.set('category', value)
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const handleQueryChange = useDebouncedCallback((value: string) => {

    const params = new URLSearchParams(searchParams)
    params.delete('nextCursor');
    if (value) {
      params.set('query', value)
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  const selectedCategory = searchParams.has('category') ? searchParams.get('category')?.toString() : t('categories.all')

  return (
    <div>
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder={t('search.placeholder')}
          defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up mt-10">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === selectedCategory ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category)}
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {category}
          </Button>
        ))}
      </div>

    </div>
  )
}