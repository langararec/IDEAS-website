// Color palettes for charts

export const BURNABY_COLOR_PALETTE = [
    "#1D4322", // Darkest green
  "#275A2E", // Darkest green
  "#317039", // Darker green
  "#53895A", // Medium green
  "#75A37B", // Light green
  "#96BC9B", // Lighter green
  "#A7C9AC", // Lightest green
  "#C9E2CD", // Lightest green
];

export const COURTENAY_COLOR_PALETTE = [
  "#023F47", // Darkest teal
  "#034F59",
  "#1E6F79",
  "#398F9A",
  "#53AEBA",
  "#61BECA",
  "#7CDEEB",
  "#B8F5FD",
  "#DCFAFE", // Lightest teal
];

export const COURTENAY_COLOR = "#0d9488"; // Teal (legacy, use palette instead)

// Helper function to assign colors based on data intensity
export const generateBurnabyColors = (data: number[]): string[] => {
  // Sort data with indices to maintain original order
  const sortedIndices = data
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value)
    .map((item, sortedIndex) => ({ ...item, sortedIndex }));

  // Assign colors based on sorted position
  const colors = new Array(data.length);
  sortedIndices.forEach((item) => {
    const colorIndex = Math.floor(
      item.sortedIndex / Math.ceil(data.length / BURNABY_COLOR_PALETTE.length)
    );
    colors[item.index] =
      BURNABY_COLOR_PALETTE[
        Math.min(colorIndex, BURNABY_COLOR_PALETTE.length - 1)
      ];
  });

  return colors;
};

// Helper function to assign colors based on data intensity for Courtenay
export const generateCourtenayColors = (data: number[]): string[] => {
  // Sort data with indices to maintain original order
  const sortedIndices = data
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value)
    .map((item, sortedIndex) => ({ ...item, sortedIndex }));

  // Assign colors based on sorted position
  const colors = new Array(data.length);
  sortedIndices.forEach((item) => {
    const colorIndex = Math.floor(
      item.sortedIndex / Math.ceil(data.length / COURTENAY_COLOR_PALETTE.length)
    );
    colors[item.index] =
      COURTENAY_COLOR_PALETTE[
        Math.min(colorIndex, COURTENAY_COLOR_PALETTE.length - 1)
      ];
  });

  return colors;
};

// Get specific color from palette by index
export const getBurnabyColor = (index: number): string => {
  return BURNABY_COLOR_PALETTE[index % BURNABY_COLOR_PALETTE.length];
};

export const getCourtenayColor = (index: number): string => {
  return COURTENAY_COLOR_PALETTE[index % COURTENAY_COLOR_PALETTE.length];
};

// Get color palette for a specific number of items
export const getBurnabyColorPalette = (count: number): string[] => {
  if (count <= BURNABY_COLOR_PALETTE.length) {
    return BURNABY_COLOR_PALETTE.slice(0, count);
  }

  // If we need more colors than we have, repeat the pattern
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(BURNABY_COLOR_PALETTE[i % BURNABY_COLOR_PALETTE.length]);
  }
  return result;
};

export const getCourtenayColorPalette = (count: number): string[] => {
  if (count <= COURTENAY_COLOR_PALETTE.length) {
    return COURTENAY_COLOR_PALETTE.slice(0, count);
  }

  // If we need more colors than we have, repeat the pattern
  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    result.push(COURTENAY_COLOR_PALETTE[i % COURTENAY_COLOR_PALETTE.length]);
  }
  return result;
};
