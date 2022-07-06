import {
  Dispatch, SetStateAction, useMemo, useState,
} from 'react';
import {
  onlyMobile, onlyTablet, onlySmallDesktop, onlyDesktop, largeDesktop,
} from '@/utils/styles/mixins';
import useResize from './useResize';

enum MediaListKey {
  IS_MOBILE = 'isMobile',
  IS_TABLET = 'isTablet',
  IS_SMALL_DESKTOP = 'isSmallDesktop',
  IS_DESKTOP = 'isDesktop',
  IS_LARGE_DESKTOP = 'isLargeDesktop',
}

const mediaList: Record<MediaListKey, string> = {
  [MediaListKey.IS_MOBILE]: onlyMobile,
  [MediaListKey.IS_TABLET]: onlyTablet,
  [MediaListKey.IS_SMALL_DESKTOP]: onlySmallDesktop,
  [MediaListKey.IS_DESKTOP]: onlyDesktop,
  [MediaListKey.IS_LARGE_DESKTOP]: largeDesktop,
};
const mediaListKey = Object.keys(mediaList) as MediaListKey[];

const checkMediaQueries = (queries: string) => window.matchMedia(queries).matches;

export default function useResponsive() {
  const [isMobile, setIsMobile] = useState(
    () => checkMediaQueries(mediaList.isMobile),
  );
  const [isTablet, setIsTablet] = useState(
    () => checkMediaQueries(mediaList.isTablet),
  );
  const [isSmallDesktop, setIsSmallDesktop] = useState(
    () => checkMediaQueries(mediaList.isSmallDesktop),
  );
  const [isDesktop, setIsDesktop] = useState(
    () => checkMediaQueries(mediaList.isDesktop),
  );
  const [isLargeDesktop, setIsLargeDesktop] = useState(
    () => checkMediaQueries(mediaList.isLargeDesktop),
  );
  const isSmallDesktopAndAbove = useMemo(
    () => isSmallDesktop || isDesktop || isLargeDesktop,
    [isSmallDesktop, isDesktop, isLargeDesktop],
  );

  const isTabletAndBelow = useMemo(
    () => isMobile || isTablet,
    [isMobile, isTablet],
  );

  const actionMapper: Record<MediaListKey, Dispatch<SetStateAction<boolean>>> = useMemo(() => ({
    [MediaListKey.IS_MOBILE]: setIsMobile,
    [MediaListKey.IS_TABLET]: setIsTablet,
    [MediaListKey.IS_SMALL_DESKTOP]: setIsSmallDesktop,
    [MediaListKey.IS_DESKTOP]: setIsDesktop,
    [MediaListKey.IS_LARGE_DESKTOP]: setIsLargeDesktop,
  }), []);

  useResize(() => {
    mediaListKey.forEach((mediaKey) => {
      const isMatchingQuery = checkMediaQueries(mediaList[mediaKey]);

      actionMapper[mediaKey]?.(isMatchingQuery);
    });
  }, [actionMapper]);

  return {
    isMobile,
    isTablet,
    isSmallDesktop,
    isDesktop,
    isLargeDesktop,
    isSmallDesktopAndAbove,
    isTabletAndBelow,
  };
}
