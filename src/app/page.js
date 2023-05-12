// import Image from 'next/image'

import { CV, Gallery, Portfolio } from "@/Components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between m-4">
      <Portfolio />
      <CV />
      <Gallery />
    </main>
  )
}
