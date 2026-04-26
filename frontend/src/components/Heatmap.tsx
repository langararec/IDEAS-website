import { COURTENAY_COLOR_PALETTE } from "../pages/Statistics/constants/colors";

export interface HeatmapProps {
    /** Row labels (displayed on the left) */
    rows: string[];
    /** Column labels (displayed at the top) */
    columns: string[];
    /**
     * 2-D array of numeric values.
     * Outer index = row, inner index = column.
     * values[rowIndex][colIndex]
     */
    values: number[][];
    /** Optional unit appended to each cell value, e.g. "%" */
    unit?: string;
}

// COURTENAY_COLOR_PALETTE index 8 is lightest (#DCFAFE), index 0 is darkest (#023F47)
const LIGHT_HEX = COURTENAY_COLOR_PALETTE[8]; // lightest
const DARK_HEX  = COURTENAY_COLOR_PALETTE[0]; // darkest

function parseHex(hex: string): [number, number, number] {
    return [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16),
    ];
}

/**
 * Interpolates between two hex colours.
 * t = 0 → lightHex, t = 1 → darkHex
 */
function interpolateColor(t: number): string {
    const [r1, g1, b1] = parseHex(LIGHT_HEX);
    const [r2, g2, b2] = parseHex(DARK_HEX);
    const r = Math.round(r1 + (r2 - r1) * t);
    const g = Math.round(g1 + (g2 - g1) * t);
    const b = Math.round(b1 + (b2 - b1) * t);
    return `rgb(${r}, ${g}, ${b})`;
}

const Heatmap: React.FC<HeatmapProps> = ({
    rows,
    columns,
    values,
    unit = "%",
}) => {
    const flat = values.flat();
    const maxValue = Math.max(...flat);

    if (maxValue === 0 || rows.length === 0 || columns.length === 0) return null;

    return (
        <div className="overflow-x-auto w-full">
            <table
                className="w-full"
                style={{ borderCollapse: "separate", borderSpacing: "3px" }}
            >
                <thead>
                    <tr>
                        {/* Empty top-left corner */}
                        <th style={{ width: "90px", minWidth: "90px", maxWidth: "90px" }} />
                        {columns.map((col, ci) => (
                            <th
                                key={ci}
                                className="text-xs font-semibold text-gray-600 font-dm-sans text-center px-1 pb-2"
                                style={{ width: "80px", minWidth: "80px", maxWidth: "80px" }}
                                title={col}
                            >
                                <span className="block leading-tight">{col}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, ri) => (
                        <tr key={ri}>
                            {/* Row label */}
                            <td
                                className="text-xs font-medium text-gray-700 font-dm-sans pr-3 py-1 align-middle"
                                style={{ width: "90px", minWidth: "90px", maxWidth: "90px", whiteSpace: "normal", wordBreak: "break-word" }}
                            >
                                {row}
                            </td>

                            {/* Data cells */}
                            {columns.map((col, ci) => {
                                const val = values[ri]?.[ci] ?? 0;
                                const t = val / maxValue;
                                const bg = interpolateColor(t);
                                // Use white text when cell is dark enough (t > 0.45)
                                const textColor = t > 0.45 ? "#ffffff" : "#023F47";

                                return (
                                    <td
                                        key={ci}
                                        title={`${row} — ${col}: ${val}${unit}`}
                                        className="text-center text-xs font-dm-sans font-medium align-middle"
                                        style={{
                                            backgroundColor: bg,
                                            color: textColor,
                                            padding: "7px 4px",
                                            borderRadius: "5px",
                                            width: "80px",
                                            minWidth: "80px",
                                            maxWidth: "80px",
                                            height: "40px",
                                            transition: "opacity 0.15s",
                                        }}
                                    >
                                        {val}{unit}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Colour scale legend */}
            <div className="mt-4 flex items-center gap-3 text-xs text-gray-500 font-dm-sans">
                <span>Lower</span>
                <div
                    className="h-3 rounded flex-1 max-w-[180px]"
                    style={{
                        background: `linear-gradient(to right, ${LIGHT_HEX}, ${DARK_HEX})`,
                    }}
                />
                <span>Higher</span>
            </div>
        </div>
    );
};

export default Heatmap;
