import {
  Experimental_CssVarsProvider as CssVarsProvider
} from "@mui/material/styles"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { CopywritingProvider } from "@/lib";

const Template = ({ children }: React.PropsWithChildren) => {
  return (
    <>

      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <CssVarsProvider
          theme={theme}
          defaultMode="system"
          disableTransitionOnChange
        >
          <CssBaseline />
          <CopywritingProvider>
            {children}
          </CopywritingProvider>
        </CssVarsProvider>
      </AppRouterCacheProvider>
    </>
  )
}


export default Template