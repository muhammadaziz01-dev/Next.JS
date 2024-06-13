import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function App({ Component, pageProps }) {
  return (
    <div>
      < Header/>
        <div className="main min-h-[85vh]">
           <Component {...pageProps}  />
        </div>
      <Footer />
    </div>
  )
}