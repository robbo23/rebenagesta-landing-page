import { graphqlQuery } from 'utils/api';

export async function getCaseStudies() {
  const data = await graphqlQuery(
    `
      query AllCaseStudies {
        casestudies(first: 1000) {
          nodes {
            title
            uri
            acf_casestudies {
              metaInfo {
                tagsServices {
                ... on Service {
                    title
                    uri
                  }
                }
              }
              cardPhoto {
                sourceUrl
              }
            }
          }
        }
      }
    `
  );

  return data?.casestudies.nodes;
}

//metaInfo
//  featured
//  shortTitle
//  clientName
