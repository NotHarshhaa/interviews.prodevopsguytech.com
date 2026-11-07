import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="border-y border-dashed m-auto text-center flex flex-col items-center gap-4 py-8 w-full max-w-fd-container">
      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
      <h1 className="font-display text-8xl font-bold tracking-tight opacity-50">404</h1>
      <h2 className="font-display text-2xl font-semibold">Not Found</h2>
      <p className="font-mono opacity-50 text-sm">Could not find<br/> requested resource</p>
      <Link href="/" className="w-fit mx-auto inline-flex items-center gap-2 bg-fd-foreground text-fd-background font-medium px-5 py-2.5 rounded-md shadow-lg shadow-black/10 hover:-translate-y-px hover:shadow-xl transition-all duration-300">Return Home</Link>
    </div>
  )
}