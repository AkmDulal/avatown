// import React from 'react'
import HeaderComponents from "./Header";
import FooterComponents from "./Footer";
interface ProvidersProps {
    children: any[];
  }

function Layout({ children }: ProvidersProps) {
  return (
    <div className="App">
          <HeaderComponents />
           <main> {children} </main>
           <FooterComponents />
      </div>
  )
}

export default Layout