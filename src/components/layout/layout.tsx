import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }:LayoutProps){
  return (
    <div className="relative min-h-screen flex-col dark">
      <Header />
       <main className="flex-1 flex flex-col mb-12">
        {children}
       </main>
    </div>
  )
}