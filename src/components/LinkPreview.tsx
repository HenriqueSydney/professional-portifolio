"use server";

import { envVariables } from "@/env";
import { httpClient } from "@/lib/httpClient";
import Image from "next/image";
import Link from "next/link";

type Metadata = {
  title: string;
  description: string;
  image: string;
  url: string;
  favicon?: string;
  domain?: string;
};

interface ILinkPreview {
  id: string;
  bookmarkUrl: string;
}

export async function LinkPreview({ id, bookmarkUrl }: ILinkPreview) {
  const [metadataError, metadata] = await httpClient<Metadata>(
    `https://api.linkpreview.net/?key=${envVariables.LINK_PREVIEW}&q=${encodeURIComponent(bookmarkUrl)}`,
    {
      cache: "default",
      next: {
        revalidate: 24 * 60 * 60, // 24 hours
        tags: [`link:preview:${bookmarkUrl}`],
      },
    }
  );

  if (metadataError)
    return (
      <a href={bookmarkUrl} className="text-primary hover:underline">
        {bookmarkUrl}
      </a>
    );

  return (
    <div
      key={id}
      className="max-h-40 h-40 border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
    >
      <Link
        href={bookmarkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline!"
      >
        <div className="flex justify-between">
          <div className="flex-1 p-2">
            <div className="flex items-center gap-1 mb-1">
              {metadata.favicon && (
                <Image
                  src={metadata.favicon}
                  alt="Teste"
                  className="w-4 h-4"
                  fill
                />
              )}
              {metadata.domain && (
                <span className="text-sm text-muted-foreground">
                  {metadata.domain}
                </span>
              )}
            </div>
            <div className="h-full flex flex-col justify-between pb-2 pr-2">
              <h3 className="text-xl! font-semibold mb-1! mt-1!">
                {metadata.title}
              </h3>
              <p className="m-0! text-sm text-muted-foreground line-clamp-2">
                {metadata.description}
              </p>
              <p className="m-0! text-xs text-muted-foreground mt-1 truncate">
                {bookmarkUrl}
              </p>
            </div>
          </div>
          {metadata.image && (
            <div className="relative w-[30%] max-h-40 h-40 flex-shrink-0 m-0 hidden sm:block">
              <Image
                src={metadata.image}
                alt={`${metadata.title} image`}
                className="m-0! object-cover"
                fill
              />
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
