import React from 'react';

import useScroll from '@/components/hooks/useScroll';

const usePagination = (ref: any, defaultPage: number = 0) => {
  const [currentPage, setCurrentPage] = React.useState<number>(defaultPage);

  const isFirstPage = React.useMemo(() => currentPage === 1, [currentPage]);

  const { isScrollBottom } = useScroll(
    ref,
    {
      threshold: 100,
    },
  );

  React.useEffect(() => {
    if (!isScrollBottom) {
      return;
    }

    setCurrentPage(currentPage + 1);
  }, [isScrollBottom]);

  return ({
    isFirstPage,
    currentPage,
    setCurrentPage,
  });
};

export default usePagination;
