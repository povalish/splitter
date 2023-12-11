import { useLayoutEffect } from 'react';

type Options = {
  title: string;
};

export function useDocumentTitle({ title }: Options) {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  const setTitle = (t: string) => {
    document.title = t;
  };

  return { setTitle };
}
