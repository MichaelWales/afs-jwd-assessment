import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nz-layout>
      <nz-sider nzCollapsible nzWidth="200px">
        <ul>
          <li nz-menu-item>Home</li>
          <ul>
            <li nz-menu-item>Users</li>
            <li nz-menu-item>Employees</li>
          </ul>
        </ul>
      </nz-sider>
    </nz-layout>
  `,
  styles: [
    `

    `
  ]
})
export class AppComponent {
  title = 'afs-jwd-assessment';
}
