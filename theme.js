"use client"
import {createTheme} from "@mui/material/styles"

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#b4edee",
			contrastText: "#131313"
		},
		info: {
			main: "#c6c6c6"
		},
		text: {
			primary: "#fff",
			secondary: "#eee",
			disabled: "#aaa"
		}
	},
	typography: {
		fontFamily: [
			"Switzer",
			"ui-sans-serif",
			"system-ui",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			"Segoe UI Symbol",
			'"Noto Color Emoji"'
		].join(",")
	}
})

export default theme
