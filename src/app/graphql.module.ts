import { NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return{
    link: httpLink.create({
      uri: 'http://34.70.147.241:8000/auth/',
    //uri: 'http://104.198.147.3:8000/graphql/',
    }),
    cache: new InMemoryCache(),
  }
}

@NgModule({
  providers: [  
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})

export class GraphQLModule {}