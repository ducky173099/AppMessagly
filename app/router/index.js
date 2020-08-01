import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Router from './Router';

const prevGetStateForActionMainStack = Router.router.getStateForAction;
Router.router = {
  ...Router.router,
  getStateForAction(action, state) {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForActionMainStack(action, state);
  },
};

const Root = createSwitchNavigator(
  {
    Main: Router,
  },
  {
    initialRouteName: 'Main',
  },
);

const AppContainer = createAppContainer(Root);

export default AppContainer;
