import {
  ApolloLink,
  fromPromise,
  toPromise,
  Observable,
} from 'apollo-link';

type Lazy = (factory: () => Promise<ApolloLink | { default: ApolloLink }>) => ApolloLink;

/**
 * Lazy load ApolloLink promise
 *
 * @example
 * import { lazy } from 'apollo-link-lazy';
 *
 * const link = lazy(() => import('./link'));
 */
export const lazy: Lazy = (factory) => new ApolloLink(
  (operation, forward) => fromPromise(
    factory().then((resolved) => {
      const link = resolved instanceof ApolloLink ? resolved : resolved.default;
      return toPromise(link.request(operation, forward) || Observable.of());
    }),
  ),
);
