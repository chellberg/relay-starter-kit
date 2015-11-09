export default class extends Relay.Route {
  static path = '/';
  static queries = {
    viewer: (Component) => Relay.QL`
      query {
        game {
          ${Component.getFragment('game')},
        },
      }
    `,
  };
  static routeName = 'AppHomeRoute';
}
