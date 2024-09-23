import AppAppBar from "@/components/AppAppBar";


export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AppAppBar />
      {children}
    </>
  )
}