import { ChakraComponent, useMediaQuery, useTheme } from '@chakra-ui/react';

/**
 * Hook to render a component based on the current breakpoint
 * Returns a component from two options passed in
 * @param breakpoint - the value checked against. This is a Chakra themed value
 * @param trueComponent - The component to render if the breakpoint matches
 * @param falseComponent - The component to render if the breakpoint does not match
 * @returns One named component for use in the app
 */
export default function useChakraBreakpointComponent(
  breakpoint: string,
  trueComponent: ChakraComponent<any, {}>,
  falseComponent: ChakraComponent<any, {}>
) {
  // Pull the breakpoint value from the Chakra theme
  const thisBreakpoint = useTheme().breakpoints[breakpoint];
  // Return boolean check for the breakpoint
  const [isLargerThanBreakpoint] = useMediaQuery(`(min-width: ${thisBreakpoint})`);
  // Define the component to render
  const Component = isLargerThanBreakpoint ? trueComponent : falseComponent;

  // return the component for use in the app;
  return Component;
}
