import { Inter } from 'next/font/google'
import NavBar from './navbar/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <NavBar/>
   </div>
  )
}
