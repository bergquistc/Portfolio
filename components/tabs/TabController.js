"use client"
import {Box, Tabs, Tab} from "@mui/material"
import React from "react"
import Projects from "../projects/projects"
import Skills from "../skills/skills"
import About from "../about/about"

export default function TabController() {
	/** Refs */
	/** State */
	const [tabValue, setTabValue] = React.useState("1")
	/** Hooks */
	/** Effects */
	/** Functions */
	const handleChange = (event, newValue) => {
		setTabValue(newValue)
	}
	/** Components */

	return (
		<React.Fragment>
			<Box sx={{width: "100%", typography: "body1"}}>
				<Tabs
					value={tabValue}
					onChange={handleChange}
					textColor={"primary"}
					aria-label={"tabs"}
				>
					<Tab value={"1"} label={"Skills"} />
					<Tab value={"2"} label={"Projects"} />
					<Tab value={"3"} label={"About"} />
				</Tabs>

				<Box sx={{padding: "24px 0"}}>
					{tabValue === "1" ? <Skills /> : null}
					{tabValue === "2" ? <Projects /> : null}
					{tabValue === "3" ? <About /> : null}
				</Box>
			</Box>
		</React.Fragment>
	)
}
