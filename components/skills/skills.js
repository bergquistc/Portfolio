import {Box, Card, CardContent, Typography} from "@mui/material"
import React, {useCallback, useMemo} from "react"

const size = 35

export default function Skills() {
	/** Refs */

	/** State */
	/** Hooks */
	const renderCard = useCallback(card => {
		return (
			<Card sx={{minWidth: 275}}>
				<CardContent>
					<Typography
						gutterBottom
						variant={"h5"}
						sx={{color: "text.secondary"}}
					>
						{card.title}
					</Typography>

					<Box sx={{display: "flex", flexWrap: "wrap", gap: 2}}>
						{card.icons.map((icon, i) => {
							return (
								<React.Fragment key={i}>{icon}</React.Fragment>
							)
						})}
					</Box>
					<Typography variant="body2"></Typography>
				</CardContent>
			</Card>
		)
	}, [])

	/** Effects */
	/** Functions */
	/** Components */

	return (
		<React.Fragment>
			<Box sx={{display: "flex", justifyContent: "space-evenly", gap: 4}}>
				{cards.map((node, i) => {
					return (
						<React.Fragment key={i}>
							{renderCard(node)}
						</React.Fragment>
					)
				})}
			</Box>
		</React.Fragment>
	)
}

const cards = [
	{
		title: "Frontend Technologies",
		icons: [
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
				width={size}
				height={size}
			/>,
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
				width={size}
				height={size}
			/>,

			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
				width={size}
				height={size}
			/>
		]
	}
]
