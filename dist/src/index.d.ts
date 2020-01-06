import { ApolloLink } from 'apollo-link';
declare type Lazy = (factory: () => Promise<ApolloLink | {
    default: ApolloLink;
}>) => ApolloLink;
/**
 * Lazy load ApolloLink promise
 *
 * @example
 * import { lazy } from 'apollo-link-lazy';
 *
 * const link = lazy(() => import('./link'));
 */
export declare const lazy: Lazy;
export {};
