"use client"
import {createTheme} from "@mui/material/styles"

const theme = createTheme({
	palette: {
		primary: {
			main: "#b4edee"
		},
		info: {
			main: "#c6c6c6"
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
