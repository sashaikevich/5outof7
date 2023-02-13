import Link from "next/link"

import { useRouter } from "next/router"

type LayoutT = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutT) => {
  const router = useRouter()
  const route = router.pathname

  return (
    <main className="bg-slate-50 pb-20">
      <div className="header text-center px-4 py-5 mb-4 font-semibold text-slate-400">
        <Link
          href="proudest"
          className={`${
            route === "/proudest"
              ? "border-b-2 border-b-slate-300"
              : "opacity-50 hover:opacity-100"
          }`}>
          proudest + context
        </Link>
        <span className="opacity-50 mx-5">|</span>
        <Link
          href="docs"
          className={`${
            route === "/docs"
              ? "border-b-2 border-b-slate-300"
              : "opacity-50 hover:opacity-100"
          }`}>
          docs + playground
        </Link>
      </div>
      <div className="">{children}</div>
    </main>
  )
}

export default Layout
