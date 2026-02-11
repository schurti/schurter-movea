'use client'

import { Button } from '@/components/elements/button'

type ObfuscatedEmailLinkProps = {
  label: string
  size?: 'md' | 'lg'
  className?: string
}

const userParts = ['in', 'fo'] as const
const domainParts = ['schurter', 'movea', 'ch'] as const

function openMailto() {
  const email = `${userParts.join('')}@${domainParts[0]}${domainParts[1]}.${domainParts[2]}`
  window.location.href = `mailto:${email}`
}

export function ObfuscatedEmailLink({
  label,
  size = 'md',
  className,
}: ObfuscatedEmailLinkProps) {
  return (
    <Button type="button" size={size} className={className} onClick={openMailto}>
      {label}
    </Button>
  )
}
