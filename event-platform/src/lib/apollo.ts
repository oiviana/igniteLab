import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4oaz51p1m3n01xm0bev5oa4/master',
    cache: new InMemoryCache()
})