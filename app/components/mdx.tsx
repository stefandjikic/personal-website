import React, { JSX } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import { slugify } from "../utils/helpers";

function Code({
  children,
  ...props
}: JSX.IntrinsicAttributes & { children?: any }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

// function Card(props) {
//   return (
//     <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
//       <div className="flex items-center w-4 mr-4">{props.emoji}</div>
//       <div className="w-full callout">{props.children}</div>
//     </div>
//   );
// }

function createHeading(level: number): React.ElementType {
  return function Heading({ children }: { children: number }) {
    let slug = slugify(children);
    const H = `h${level}` as React.ElementType;
    return (
      <H id={slug} className="relative">
        <a
          href={`#${slug}`}
          key={`link-${slug}`}
          className="anchor absolute w-full h-full -left-6 no-underline opacity-0 hover:opacity-100 transition-opacity"
        ></a>
        {children}
      </H>
    );
  };
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  code: Code,
  // Card: Card,
};

export function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
