'use client'

import { useEffect, useState } from 'react'

import { ButtonLink } from '@/components/elements/button'

type ObfuscatedEmailLinkProps = {
  label: string
  size?: 'md' | 'lg'
  className?: string
}

export function ObfuscatedEmailLink({
  label,
  size = 'md',
  className,
}: ObfuscatedEmailLinkProps) {
  const [href, setHref] = useState<string | null>(null)

  useEffect(() => {
    const user = 'info'
    const domain = 'schurter-movea.ch'
    setHref(`mailto:${user}@${domain}`)
  }, [])

  return (
    <ButtonLink
      href={href ?? '#'}
      size={size}
      className={className}
      aria-disabled={!href}
    >
      {label}
    </ButtonLink>
  )
}
