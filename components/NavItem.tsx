import { memo } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cn from 'classnames';

interface NavItemProps {
  href: string;
  text: string;
  disabled?: boolean;
}

const NavItem = memo(function NavItem({ href, text, disabled }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink
      href={href}
      aria-disabled={disabled}
      className={cn(
        isActive
          ? 'font-semibold text-gray-800 dark:text-gray-200'
          : 'font-normal text-gray-600 dark:text-gray-400',
        'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
      )}
    >
      <span className="capsize">{text}</span>
    </NextLink>
  );
});

export default NavItem;
