
import theme from '../theme'

type Breakpoint =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'

/** up() targets selected breakpoint and everything larger than that */
export const up = (breakpoint: Breakpoint) => {
  const width = theme.breakpoints.values[breakpoint]

  return `@media (min-width: ${width}px)`
}

/** down() targets selected breakpoint minus 1px and everything smaller than that */
export const down = (breakpoint: Breakpoint) => {
  const width = theme.breakpoints.values[breakpoint]

  return `@media (max-width: ${width - 1}px)`
}

export const between = (min: Breakpoint, max: Breakpoint) => {
  const minWidth = theme.breakpoints.values[min]
  const maxWidth = theme.breakpoints.values[max]

  return `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth - 1}px)`
}

export const isMobile = () => {
  if (window && window.navigator) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
  }
  return false
}
