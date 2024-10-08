import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import Hero from "../../../components/Hero"
import FAQ from "../../../components/FAQ"
import Footer from "../../../components/Footer"

const Page = () => {
  return (
    <AppRouterCacheProvider>
      <Stack gap={3}>
        <Hero />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Stack>

    </AppRouterCacheProvider>
  )
}


export default Page