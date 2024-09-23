"use client"
import { useCopywriting } from "@/lib";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import config from "../../config.json"

import { styled } from "@mui/material/styles";

import { Github } from "lucide-react";

const FootRoot = styled("footer", {
  name: "MuiFooter",
  slot: "root",
})(({ theme }) => ({
}))

const Footer = () => {
  const { get_script } = useCopywriting()
  const script = get_script()
  const menus: Record<string, string[]> = script.menus;
  return (
    <FootRoot >
      <Container>
        <Box
          sx={{
            padding: "3rem 0",
            display: "flex",
            alignItems: "start",
            gap: 2,
            justifyContent: "space-between"
          }}
        >
          <Stack
            gap={1}
            width={"100%"}
          >
            <Typography>
              {config.sitename}
            </Typography>

            <Typography color="text.secondary">
              faça parte dessa comunidade<br />
              inscreva-se na nossa newsletter
            </Typography>

            <Stack direction="row" gap={1} width={{ xs: "100%", md: "50%" }}>

              <OutlinedInput
                size="small"
                placeholder="seu email"
                sx={{ width: "100%" }}
              />
              <Button
                variant="contained"
              >
                enviar
              </Button>

            </Stack>
          </Stack>

          <Box
            display={{ xs: "none", md: "flex" }}
            gap={3}
          >
            {
              Object.keys(menus).map((menu, mIndex) => (
                <Stack key={`menu-footer-${menu}-${mIndex}`}>
                  <Typography
                    sx={{ textTransform: "capitalize" }}
                  >
                    {menu}
                  </Typography>
                  {
                    menus[menu].map((item, index) => (
                      <Link
                        key={`footer-${menu}-${mIndex}-link-${index}`}
                        href={`#${item}`}
                      >
                        {item}
                      </Link>
                    ))
                  }
                </Stack>
              ))
            }
          </Box>
        </Box>

        <Divider />
        <Box sx={{
          padding: "3rem 0 ",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Copyright />
          <Stack>
            <IconButton>
              <Github />
            </IconButton>
          </Stack>
        </Box>

      </Container>
    </FootRoot >
  )
}

const Copyright = () => {
  return (
    <Typography sx={{ display: "flex", gap: 1, userSelect: "none" }} variant="caption">
      {"Copyright © "}
      <Link href="/">
        {config.sitename}
      </Link>
      2024 - {new Date().getFullYear() + ". "}
    </Typography>
  )
}

export default Footer;