"use client"
import React from "react"

import Container from "@mui/material/Container"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { ChevronDown } from "lucide-react"

import { useCopywriting } from "@/lib"

const FAQ = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false)
  const { get_script } = useCopywriting()
  const script = get_script()

  const handleExpandedChange = (pannel: string) => setExpanded(prev => prev == pannel ? false : pannel)

  return (
    <Container id="FAQ">
      <Box sx={{ padding: "3rem 0" }}>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{
            marginBottom: "3rem ",
            fontSize: "clamp(1rem, 5vw, 2rem)"
          }}>
          Perguntas Frequentes
        </Typography>

        {
          script.FAQ.map((item, index) => (

            <Accordion
              key={`FAQ-${item.pergunta}-${index}`}
              onChange={() => handleExpandedChange(item.pergunta)}
              expanded={expanded === item.pergunta}
            >
              <AccordionSummary
                expandIcon={<ChevronDown className="opacity-50" />}
              >
                {item.pergunta}
              </AccordionSummary>
              <AccordionDetails>
                {item.resposta}
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>

    </Container>
  )
}

FAQ.displayName = "FAQ"
export default FAQ