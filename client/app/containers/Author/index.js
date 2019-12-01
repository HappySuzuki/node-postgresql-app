import React from 'react';

import { Route, Switch, Redirect } from 'react-router';

import { AuthorProvider } from './context';

import Authors from '../../pages/Authors';
import AddAuthor from '../../pages/AddAuthor';
import AuthorPage from '../../pages/Author';

const Author = () => {
  return (
    <AuthorProvider>
      <Switch>
        <Route path="/author/list" component={Authors} />
        <Route path="/author/add" component={AddAuthor} />
        <Route path="/author/:id" component={AuthorPage} />
        <Redirect from="/" to="/author/list" />
      </Switch>
    </AuthorProvider>
  );
};

export default Author;
