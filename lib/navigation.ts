import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'as-needed' // مهم جداً بدل 'always'
});

export const {Link, usePathname, useRouter} = createNavigation(routing);
