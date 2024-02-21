import { createTheme } from "@mantine/core";

const Theme = createTheme({
    fontFamily: "Arial Nova, Montserrat, sans-serif",
    colors: {
        'bid-blue': [
            "#f1f4f9",
            "#e1e5ec",
            "#bec8d9",
            "#9aaac7",
            "#7a90b8",
            "#151F30",
            "#5c78ab",
            "#4c6697",
            "#425b87",
            "#354e79"
        ],
        'bid-orange': [
            "#ffeee5",
            "#ffdcce",
            "#ffb79c",
            "#fe8f65",
            "#fe6e38",
            "#fe581b",
            "#fe4d0b",
            "#e33e00",
            "#ca3500",
            "#b12a00"
        ],
        'bid-teal': [
            "#ebfdfe",
            "#d8f7fb",
            "#adf1f7",
            "#81ebf5",
            "#64e4f3",
            "#56e1f2",
            "#4de0f1",
            "#40c6d7",
            "#30b0bf",
            "#0699a7"
        ]
    },
    primaryColor: "bid-blue",
    primaryShade: 5,
    defaultRadius: "5px"
});


export default Theme;