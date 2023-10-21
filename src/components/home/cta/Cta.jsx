import React from 'react'
import { Box, Stack, useTheme } from "@mui/material"
import LeftCta from './LeftCta';
import RightCta from './RightCta';
const Cta = () => {
    return (
        <Box
            className="cta"

            sx={{
                width: "90%",
                mx: "auto",
                mt: {md : 20},
                pb : 10
            }}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"} alignItems={"center"}
                flexWrap="wrap" gap="20px"
            >
              <LeftCta />

              <RightCta />


            </Stack>


        </Box>
    )
}

export default Cta