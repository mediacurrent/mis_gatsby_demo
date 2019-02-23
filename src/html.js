import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                  window.AcquiaLift = {
                    account_id: "MEDIACURRENT",
                    site_id: "mediacurrent",
                    liftAssetsURL: "https://lift3assets.lift.acquia.com/stable",
                    liftDecisionAPIURL: "https://us-east-1-decisionapi.lift.acquia.com",
                    authEndpoint: "https://us-east-1-oauth2.lift.acquia.com/authorize",
                    contentReplacementMode: "trusted"
                  };
                `
          }}
        />
        <script
          type="text/javascript"
          src="https://lift3assets.lift.acquia.com/stable/lift.js"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
