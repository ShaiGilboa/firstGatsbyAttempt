import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <div
          css={css`
            width: fit-content;
            height: fit-content;
            a {
              margin: auto 5px;
            }
          `}
        >
          <Link
            to={`/about/`}
            css={css`
              float: right;
            `}
          >
            About
          </Link>
          <Link
            to={`/contact/`}
            css={css`
              float: right;
            `}
          >
            Contact
          </Link>
        </div>
      </div>

      {children}
    </div>
  )
}