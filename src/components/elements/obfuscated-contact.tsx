'use client'

import { clsx } from 'clsx/lite'
import type { ReactNode } from 'react'

import { Button, PlainButton } from '@/components/elements/button'

type ButtonSize = 'md' | 'lg'

const emailUserParts = ['in', 'fo'] as const
const emailDomainParts = ['schurter', 'movea', 'ch'] as const

const phoneDisplayParts = ['+41', '79', '611', '78', '62'] as const
const phoneDialParts = ['+41', '79', '611', '78', '62'] as const

function getEmail() {
  return `${emailUserParts.join('')}@${emailDomainParts[0]}${emailDomainParts[1]}.${emailDomainParts[2]}`
}

function getPhoneDial() {
  return phoneDialParts.join('')
}

function openMailto() {
  window.location.href = `mailto:${getEmail()}`
}

function callPhone() {
  window.location.href = `tel:${getPhoneDial()}`
}

export function ObfuscatedEmailTextLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openMailto}
      className={clsx('cursor-pointer text-left underline underline-offset-4', className)}
      aria-label="E-Mail senden"
    >
      {emailUserParts.join('')}@{emailDomainParts[0]}{emailDomainParts[1]}.{emailDomainParts[2]}
    </button>
  )
}

export function ObfuscatedPhoneTextLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={callPhone}
      className={clsx('cursor-pointer text-left underline underline-offset-4', className)}
      aria-label="Telefonnummer anrufen"
    >
      {phoneDisplayParts.join(' ')}
    </button>
  )
}

export function ObfuscatedEmailButtonLink({
  label,
  size = 'md',
  className,
}: {
  label: string
  size?: ButtonSize
  className?: string
}) {
  return (
    <Button type="button" size={size} className={className} onClick={openMailto}>
      {label}
    </Button>
  )
}

export function ObfuscatedPhonePlainButtonLink({
  label,
  size = 'md',
  className,
  children,
}: {
  label: string
  size?: ButtonSize
  className?: string
  children?: ReactNode
}) {
  return (
    <PlainButton type="button" size={size} className={className} onClick={callPhone}>
      {children ?? label}
    </PlainButton>
  )
}
