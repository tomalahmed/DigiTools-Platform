const baseClasses =
  'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-base-300 bg-base-200 text-xs font-semibold uppercase text-base-content'

function PlaceholderIcon({ label, className = '' }) {
  return (
    <span className={`${baseClasses} ${className}`.trim()} aria-hidden="true">
      {label}
    </span>
  )
}

export function CopywriterIcon(props) {
  return <PlaceholderIcon label="CP" {...props} />
}

export function SeoIcon(props) {
  return <PlaceholderIcon label="SEO" {...props} />
}

export function DesignIcon(props) {
  return <PlaceholderIcon label="UI" {...props} />
}

export function EmailIcon(props) {
  return <PlaceholderIcon label="EM" {...props} />
}

export function SocialIcon(props) {
  return <PlaceholderIcon label="SOC" {...props} />
}

export function VideoIcon(props) {
  return <PlaceholderIcon label="VID" {...props} />
}

export function AnalyticsIcon(props) {
  return <PlaceholderIcon label="AN" {...props} />
}

export function BillingIcon(props) {
  return <PlaceholderIcon label="BIL" {...props} />
}

export function SupportIcon(props) {
  return <PlaceholderIcon label="SUP" {...props} />
}

export const iconByName = {
  copywriter: CopywriterIcon,
  seo: SeoIcon,
  design: DesignIcon,
  email: EmailIcon,
  social: SocialIcon,
  video: VideoIcon,
  analytics: AnalyticsIcon,
  billing: BillingIcon,
  support: SupportIcon,
}

export const UnknownIcon = PlaceholderIcon
