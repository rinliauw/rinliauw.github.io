export const breakpoints = {
  phone: "320px",
  tablet_portrait: "600px",
  tablet_landscape: "900px",
  desktop: "1200px",
  large_desktop: "1800px",
};

export const devices = {
  phone: `(min-width: ${breakpoints.phone})`,
  tablet_portrait: `(min-width: ${breakpoints.tablet_portrait})`,
  tablet_landscape: `(min-width: ${breakpoints.tablet_landscape})`,
  desktop: `(min-width: ${breakpoints.desktop})`,
  large_desktop: `(min-width: ${breakpoints.large_desktop})`,
};
