// Design System Constants for Consistency

// Spacing Scale (following Tailwind conventions)
export const spacing = {
  xs: 'p-2',     // 8px
  sm: 'p-3',     // 12px
  md: 'p-4',     // 16px
  lg: 'p-6',     // 24px
  xl: 'p-8',     // 32px
  '2xl': 'p-12', // 48px
} as const

export const marginBottom = {
  xs: 'mb-2',
  sm: 'mb-3',
  md: 'mb-4',
  lg: 'mb-6',
  xl: 'mb-8',
  '2xl': 'mb-12',
} as const

export const gaps = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
} as const

// Color System
export const colors = {
  primary: {
    bg: 'bg-blue-600',
    bgHover: 'hover:bg-blue-700',
    text: 'text-blue-600',
    border: 'border-blue-600',
  },
  secondary: {
    bg: 'bg-gray-100',
    bgHover: 'hover:bg-gray-200',
    text: 'text-gray-600',
    border: 'border-gray-300',
  },
  success: {
    bg: 'bg-green-600',
    bgHover: 'hover:bg-green-700',
    text: 'text-green-600',
    border: 'border-green-600',
  },
  warning: {
    bg: 'bg-amber-500',
    bgHover: 'hover:bg-amber-600',
    text: 'text-amber-600',
    border: 'border-amber-500',
  },
  danger: {
    bg: 'bg-red-600',
    bgHover: 'hover:bg-red-700',
    text: 'text-red-600',
    border: 'border-red-600',
  },
} as const

// Typography Scale
export const typography = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-semibold',
  h6: 'text-base font-semibold',
  body: 'text-base',
  small: 'text-sm',
  caption: 'text-xs',
} as const

// Component Variants
export const cardVariants = {
  default: 'bg-white border border-gray-200 rounded-lg shadow-sm',
  elevated: 'bg-white border border-gray-200 rounded-lg shadow-md',
  primary: 'bg-blue-50 border border-blue-200 rounded-lg',
  success: 'bg-green-50 border border-green-200 rounded-lg',
  warning: 'bg-amber-50 border border-amber-200 rounded-lg',
  danger: 'bg-red-50 border border-red-200 rounded-lg',
} as const

export const buttonVariants = {
  primary: `${colors.primary.bg} ${colors.primary.bgHover} text-white font-medium px-4 py-2 rounded-md transition-colors`,
  secondary: `${colors.secondary.bg} ${colors.secondary.bgHover} text-gray-900 font-medium px-4 py-2 rounded-md border transition-colors`,
  outline: `border ${colors.primary.border} ${colors.primary.text} hover:bg-blue-50 font-medium px-4 py-2 rounded-md transition-colors`,
  ghost: 'hover:bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-md transition-colors',
} as const

// Layout Patterns
export const layouts = {
  container: 'container mx-auto px-4',
  section: 'py-8',
  card: `${cardVariants.default} ${spacing.lg}`,
  grid: 'grid gap-6',
  flex: 'flex items-center gap-4',
  stack: 'space-y-4',
} as const

// Animation Classes
export const animations = {
  fadeIn: 'animate-in fade-in duration-200',
  slideIn: 'animate-in slide-in-from-bottom-4 duration-200',
  scaleIn: 'animate-in zoom-in-95 duration-200',
  hover: 'transition-all duration-200 hover:scale-105',
} as const

// Focus States
export const focus = {
  ring: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  visible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
} as const