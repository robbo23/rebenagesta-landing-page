import resolutions from 'utils/resolutions';

export function mapBreakpoints(breakpoints) {
  if (breakpoints && typeof breakpoints === 'object') {
    return Object.keys(breakpoints).reduce(
      (map, breakpoint) => ({
        ...map,
        [resolutions[breakpoint]]: breakpoints[breakpoint]
      }),
      {}
    );
  }

  return breakpoints;
}
