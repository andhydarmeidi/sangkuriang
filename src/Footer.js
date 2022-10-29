import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="main-footer">
          <strong>
            Copyright &copy; 2022<a href="https://www.roniandarsyah.com/">Geologi Bandung.</a>
          </strong>
          All rights reserved.
          <div class="float-right d-none d-sm-inline-block">
            <b>Version Ujicoba</b> 1.0
          </div>
        </footer>

        <aside class="control-sidebar control-sidebar-dark"></aside>
      </div>
    );
  }
}
