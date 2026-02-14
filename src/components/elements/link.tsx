import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { withBasePath } from '@/lib/with-base-path'

export function Link({
  href,
  className,
  ...props
}: {
  href: string
} & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <a
      href={withBasePath(href)}
      className={clsx('inline-flex items-center gap-2 text-sm/7 font-medium text-mist-950 dark:text-white', className)}
      {...props}
    />
  )
}
