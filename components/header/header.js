import {Box, Button, Typography} from "@mui/material"
import React from "react"

import styles from "./header.module.css"
import Image from "next/image"
import {Email, LinkedIn, LocationOn} from "@mui/icons-material"

export default function Header() {
	/** Refs */

	/** State */
	/** Hooks */
	/** Effects */
	/** Functions */
	/** Components */

	return (
		<React.Fragment>
			<Box className={styles.wrapper}>
				<Box className={styles.baseInfoContainer}>
					<Image
						src={"/profile_pic_cropped.jpg"}
						width={175}
						height={175}
						className={styles.picture}
						alt={"Connor Bergquist Picture"}
					/>

					<Box className={styles.bioContainer}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								gap: 4
							}}
						>
							<Typography variant={"h4"} className={styles.name}>
								Connor Bergquist
							</Typography>
							<Box className={styles.location}>
								<LocationOn sx={{width: 18, height: 18}} />
								<Typography variant={"body2"} color={"primary"}>
									San Diego, CA
								</Typography>
							</Box>
						</Box>

						<Typography variant={"subtitle2"} color={"info"}>
							Frontend Software Engineer - React Developer
						</Typography>

						<Typography
							variant={"body2"}
							sx={{textAlign: "justify"}}
						>
							{`Hello I'm Connor, nice to meet you! I went to the University of Arizona and earned a Bachelor's Degree in Computer Science
							before I started my professional career in 2019. You can learn more about my projects, technologies, and interests here.
							Follow me on LinkedIn or send me an email to chat!`}
						</Typography>

						<Box className={styles.linksContainer}>
							<Button
								variant={"contained"}
								sx={{bgcolor: "#0077B5", color: "#fff"}}
								startIcon={<LinkedIn />}
								target={"_blank"}
								href={
									"https://www.linkedin.com/in/connor-bergquist/"
								}
							>
								Connect on LinkedIn
							</Button>
							<Button
								variant={"contained"}
								startIcon={<Email />}
								href={"mailto:bergquist@gmail.com"}
								formTarget={"_blank"}
							>
								Email Me!
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</React.Fragment>
	)
}
