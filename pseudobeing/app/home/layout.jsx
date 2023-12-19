import styles from "@/app/styles/main.module.css"
import NavBar from "./navbar"



export default function RootLayout({ children }) {
  return (
    <html className={styles.homepage}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
