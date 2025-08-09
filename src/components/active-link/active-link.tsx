import { cn } from "@/lib/utils";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode
} & LinkProps

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps){

  const router = useRouter()
  const isActive = router.asPath === href || router.asPath === rest.as || router.asPath.startsWith(String(rest.as))

  return (
    <Link href="/" className={cn("text-sm font-medium transition-colors hover:text-blue-500", isActive ? "text-blue-500" : "text-muted-foreground")}>
      {children}
    </Link>
  )
}