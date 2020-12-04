import React from "react";
import Link from "./Link";

import { gql, useQuery } from "@apollo/client";

export const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  if (!data) return null;
  return (
    <div>
      {data.feed.links.map((link, index) => (
        <Link key={link.id} index={index} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
