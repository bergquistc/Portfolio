import Projects from "@/components/projects/projects"
import styles from "./page.module.css"
import {Box, Typography} from "@mui/material"

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Box className={styles.sectionContainer}>
					<Typography variant={"h4"} sx={{fontWeight: "bold"}}>
						Projects
					</Typography>
					<Projects />
				</Box>
			</main>
		</div>
	)
}
