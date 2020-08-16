import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Contact() {
  return (
    <Layout>
    <div style={{ color: `teal` }}>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
      <div>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
    </div>
    </Layout>
  )
}